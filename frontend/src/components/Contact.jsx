import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Linkedin, Download, Send } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal, FadeUp } from "./Reveal";
import { downloadResumePdf } from "../lib/downloadResume";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

function SectionTag({ number, label }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-8">
      <span className="text-accent-signal">{number}</span>
      <span className="flex-1 h-px bg-[hsl(var(--foreground))] opacity-20" />
      <span>{label}</span>
    </div>
  );
}

function FloatingInput({ id, label, value, onChange, type = "text", required, multiline, testid }) {
  const [focused, setFocused] = useState(false);
  const hasValue = Boolean(value);
  const float = focused || hasValue;

  const sharedClass =
    "w-full bg-transparent outline-none border-b hairline-strong pt-7 pb-2 text-base focus:border-accent-signal transition-colors";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-0 font-mono uppercase tracking-[0.18em] transition-all pointer-events-none ${
          float
            ? "top-1 text-[12px] text-accent-signal"
            : "top-7 text-xs text-[hsl(var(--muted-foreground))]"
        }`}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          data-testid={testid}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          className={sharedClass + " resize-none"}
        />
      ) : (
        <input
          id={id}
          data-testid={testid}
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={sharedClass}
        />
      )}
    </div>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    setSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      subject: subject || "New message from portfolio",
      message,
      to_name: profile.name,
    };

    try {
      // Send the email via EmailJS (primary delivery) and persist to backend
      // in parallel so submissions are also retained server-side.
      const results = await Promise.allSettled([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          { publicKey: EMAILJS_PUBLIC_KEY }
        ),
        axios.post(`${API}/contact`, { name, email, subject, message }),
      ]);

      const emailRes = results[0];
      if (emailRes.status === "rejected") {
        console.error("EmailJS error:", emailRes.reason);
        toast.error("Couldn't send the email. Please email me directly.");
        return;
      }

      toast.success("Message sent. I'll get back within 48 hours.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative border-b hairline py-20 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <SectionTag number="05 —" label="Contact" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="md:col-span-7">
            <h2
              data-testid="contact-heading"
              className="font-display font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
            >
              <Reveal text="Let's build" />
              <br />
              <Reveal text="something" delay={0.1} />
              <br />
              <span className="text-accent-signal">
                <Reveal text="great." delay={0.2} />
              </span>
            </h2>
            <FadeUp delay={0.1} className="mt-8 max-w-lg">
              <p className="text-base md:text-lg leading-relaxed">
                Open to UI/UX Designer roles, contract work, and remote
                opportunities. If you're building a product that deserves great
                design, let's talk.
              </p>
            </FadeUp>

            {/* Direct links */}
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                data-testid="contact-email-link"
                className="group flex items-center justify-between gap-4 border-b hairline-strong py-4 hover:border-accent-signal transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Mail size={16} strokeWidth={1.5} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
                    Email
                  </span>
                  <span className="font-display font-medium text-lg md:text-xl">
                    {profile.email}
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin-link"
                className="group flex items-center justify-between gap-4 border-b hairline-strong py-4 hover:border-accent-signal transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Linkedin size={16} strokeWidth={1.5} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
                    LinkedIn
                  </span>
                  <span className="font-display font-medium text-lg md:text-xl">
                    linkedin.com/in/anu-gupta
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
            </div>

            <button
              type="button"
              onClick={downloadResumePdf}
              data-testid="contact-download-resume"
              className="mt-10 inline-flex items-center gap-2 h-12 px-6 border hairline-strong font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-accent-signal hover:text-white hover:border-transparent transition-colors"
            >
              <Download size={14} strokeWidth={1.5} />
              Download Resume — PDF
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="md:col-span-5 md:pt-4 space-y-6"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] flex items-center gap-3">
              <span className="text-accent-signal">→</span>
              Send a direct message
            </div>
            <FloatingInput
              id="c-name"
              label="Name *"
              value={name}
              onChange={setName}
              required
              testid="contact-input-name"
            />
            <FloatingInput
              id="c-email"
              label="Email *"
              value={email}
              onChange={setEmail}
              type="email"
              required
              testid="contact-input-email"
            />
            <FloatingInput
              id="c-subject"
              label="Subject"
              value={subject}
              onChange={setSubject}
              testid="contact-input-subject"
            />
            <FloatingInput
              id="c-message"
              label="Message *"
              value={message}
              onChange={setMessage}
              multiline
              required
              testid="contact-input-message"
            />
            <button
              type="submit"
              disabled={sending}
              data-testid="contact-submit"
              className="w-full h-14 inline-flex items-center justify-center gap-3 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-accent-signal hover:text-white transition-colors disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
              <Send size={14} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
