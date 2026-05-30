import { jsPDF } from "jspdf";
import { profile, caseStudies, skills, experience, aboutStats } from "../data/portfolio";

/**
 * Generates a clean, print-ready PDF resume from portfolio data.
 * Uses Helvetica (built into jsPDF) — no external font loading required.
 */
export function downloadResumePdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentW = pageWidth - margin * 2;
  let y = margin;

  const ensureSpace = (needed) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const writeLine = (text, opts = {}) => {
    const {
      size = 10,
      font = "helvetica",
      style = "normal",
      color = [13, 13, 13],
      lineGap = 4,
      maxWidth = contentW,
    } = opts;
    doc.setFont(font, style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((ln) => {
      ensureSpace(size + lineGap);
      doc.text(ln, margin, y);
      y += size + lineGap;
    });
  };

  const hr = (extra = 12) => {
    ensureSpace(extra);
    y += 6;
    doc.setDrawColor(13, 13, 13);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += extra;
  };

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(13, 13, 13);
  doc.text(profile.name.toUpperCase(), margin, y);
  y += 30;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(89, 89, 89);
  doc.text(`${profile.role}  ·  ${profile.years} years  ·  ${profile.location}`, margin, y);
  y += 16;
  doc.setTextColor(13, 13, 13);
  doc.text(`${profile.email}   ${profile.linkedin.replace("https://", "")}   ${profile.portfolioUrl.replace("https://", "")}`, margin, y);
  y += 8;
  hr(14);

  // Summary
  writeLine("SUMMARY", { size: 9, style: "bold", color: [255, 56, 35] });
  y += 2;
  writeLine(profile.intro, { size: 10, color: [13, 13, 13] });
  y += 4;
  writeLine(profile.longBio2, { size: 10, color: [89, 89, 89] });
  y += 4;
  hr(12);

  // Highlights
  writeLine("HIGHLIGHTS", { size: 9, style: "bold", color: [255, 56, 35] });
  y += 2;
  aboutStats.forEach((s) => {
    writeLine(`•  ${s.value}  —  ${s.label}`, { size: 10 });
  });
  hr(12);

  // Selected Work
  writeLine("SELECTED WORK", { size: 9, style: "bold", color: [255, 56, 35] });
  y += 2;
  caseStudies.forEach((cs) => {
    ensureSpace(60);
    writeLine(cs.title, { size: 12, style: "bold" });
    writeLine(cs.category, { size: 9, color: [89, 89, 89] });
    writeLine(cs.summary, { size: 10 });
    cs.outcomes.forEach((o) => {
      writeLine(`   →  ${o.value}  ${o.label}`, { size: 10, color: [89, 89, 89] });
    });
    y += 4;
  });
  hr(12);

  // Experience
  writeLine("EXPERIENCE", { size: 9, style: "bold", color: [255, 56, 35] });
  y += 2;
  experience.forEach((e) => {
    ensureSpace(60);
    writeLine(`${e.role}  ·  ${e.company}`, { size: 11, style: "bold" });
    writeLine(`${e.period}  ·  ${e.location}`, { size: 9, color: [89, 89, 89] });
    e.bullets.forEach((b) => writeLine(`•  ${b}`, { size: 10 }));
    y += 4;
  });
  hr(12);

  // Skills
  writeLine("SKILLS", { size: 9, style: "bold", color: [255, 56, 35] });
  y += 2;
  skills.forEach((s) => {
    writeLine(`${s.name}  —  ${s.note}`, { size: 10 });
  });

  // Footer
  ensureSpace(40);
  y = pageHeight - margin + 12;
  doc.setFontSize(8);
  doc.setTextColor(89, 89, 89);
  doc.text(`© ${new Date().getFullYear()} ${profile.name}  ·  ${profile.role}`, margin, y);

  doc.save("Anu_Gupta_UX_Resume.pdf");
}
