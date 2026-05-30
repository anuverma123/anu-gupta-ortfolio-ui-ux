"""Backend API tests for Anu Gupta — Portfolio API.
Covers: health, contact (CRUD + validation), legacy status, root endpoints.
"""
import os
import time
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://design-process-lab.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Health -----
class TestHealth:
    def test_health_200(self, client):
        r = client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "time" in data

    def test_api_root(self, client):
        r = client.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert data.get("owner") == "Anu Gupta"

    def test_bare_root(self, client):
        # Note: server.py does NOT define GET "/" — only /api/. Document behavior.
        r = client.get(f"{BASE_URL}/", timeout=15)
        # Frontend index.html may be served by ingress; backend route is missing.
        # We accept either 200 (frontend served) or 404 (no route). Fail only on 5xx.
        assert r.status_code < 500, f"Bare root returned {r.status_code}"


# ----- Contact -----
class TestContact:
    unique_subject = f"TEST_subject_{uuid.uuid4().hex[:8]}"
    created_id = None

    def test_post_contact_success(self, client):
        payload = {
            "name": "TEST_Anu Reviewer",
            "email": "test_reviewer@example.com",
            "subject": self.__class__.unique_subject,
            "message": "TEST_This is a backend test message to validate persistence.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        self.__class__.created_id = data["id"]

    def test_post_contact_invalid_email(self, client):
        payload = {
            "name": "TEST_Bad Email",
            "email": "not-an-email",
            "subject": "x",
            "message": "msg",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_post_contact_empty_name(self, client):
        payload = {
            "name": "",
            "email": "test@example.com",
            "subject": "x",
            "message": "msg",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_post_contact_empty_message(self, client):
        payload = {
            "name": "TEST_NoMessage",
            "email": "test@example.com",
            "subject": "x",
            "message": "",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_post_contact_no_subject_ok(self, client):
        payload = {
            "name": "TEST_NoSubject",
            "email": "no_subject@example.com",
            "message": "subject is optional",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        assert r.json()["subject"] == ""

    def test_get_contact_returns_recent(self, client):
        # ensure earlier insert is reflected
        time.sleep(0.5)
        r = client.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        subjects = [row.get("subject") for row in rows]
        assert self.__class__.unique_subject in subjects, (
            f"Newly created contact not found in GET /api/contact (subjects sample: {subjects[:5]})"
        )

    def test_get_contact_limit_param(self, client):
        r = client.get(f"{API}/contact?limit=1", timeout=15)
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        assert len(rows) <= 1


# ----- Legacy status -----
class TestStatusLegacy:
    def test_post_and_get_status(self, client):
        payload = {"client_name": f"TEST_client_{uuid.uuid4().hex[:6]}"}
        r = client.post(f"{API}/status", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["client_name"] == payload["client_name"]
        assert "id" in data and "timestamp" in data

        r2 = client.get(f"{API}/status", timeout=15)
        assert r2.status_code == 200
        rows = r2.json()
        assert any(row["client_name"] == payload["client_name"] for row in rows)
