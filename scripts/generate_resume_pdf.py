from __future__ import annotations

import shutil
from pathlib import Path
from xml.sax.saxutils import escape

import fitz
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"
PREVIEW_DIR = ROOT / "tmp" / "pdfs"
PDF_NAME = "akmal-muhammed-cv.pdf"

ACCENT = colors.HexColor("#0F766E")
INK = colors.HexColor("#0F172A")
MUTED = colors.HexColor("#475569")
LINE = colors.HexColor("#CBD5E1")

RESUME = {
    "name": "Akmal Muhammed",
    "title": "Security Consultant | SOC Operations | Threat Hunting | Cloud Security Advisory",
    "contact_primary": "Doha, Qatar | +974 7401 5001 | akmalmuhammed93@gmail.com",
    "contact_secondary": "linkedin.com/in/akmal-muhammed-m-k | akmalmuhammed.github.io/resume",
    "summary": (
        "Security consultant with 4+ years of experience across SOC operations, threat hunting, "
        "incident response, and cloud security advisory. Delivers security posture assessments, "
        "SIEM and XDR tuning, SOAR automation, executive reporting, and high-visibility event "
        "monitoring for critical infrastructure environments."
    ),
    "highlights": [
        "Microsoft SC-200 certified with hands-on experience across Microsoft Sentinel, Defender XDR, Cortex XDR/XSOAR, SentinelOne, Darktrace, and Prisma Cloud.",
        "Delivered live SOC coverage for FIFA Intercontinental Cup, Arab Cup, F1 Qatar Grand Prix, and 8 FIFA World Cup stadiums.",
        "Combines detection engineering, MITRE ATT&CK-driven threat hunting, KQL, Python automation, and executive stakeholder communication.",
    ],
    "experience": [
        {
            "role": "Security Consultant",
            "company": "INTALEQ Technology & Consulting",
            "meta": "Client: Aspire Zone Foundation | Doha, Qatar | Feb 2024 - Present",
            "bullets": [
                "Performed security posture assessments across SIEM, XDR, and cloud environments and translated findings into risk-based improvement plans.",
                "Built Cortex XSOAR playbooks that improved investigation speed, response consistency, and analyst productivity.",
                "Led threat hunting focused on APT39, MuddyWater, and ClickFix using MITRE ATT&CK hypotheses and telemetry correlations.",
                "Delivered live SOC monitoring for FIFA Intercontinental Cup, Arab Cup, F1 Qatar Grand Prix, and 8 FIFA World Cup stadiums.",
                "Investigated and contained ransomware activity on critical infrastructure while collaborating with Qatar NCSA on threat intelligence sharing.",
            ],
            "tools": "Microsoft Sentinel, Cortex XDR, Cortex XSOAR, SentinelOne, Darktrace, KQL, Python",
        },
        {
            "role": "Senior Analyst",
            "company": "Interactive Avenues (IPG) | WPP",
            "meta": "Mumbai, India | Mar 2023 - Dec 2023",
            "bullets": [
                "Executed website security audits and mitigated cross-site scripting and malicious JavaScript injection risks.",
                "Implemented role-based access controls for internal BI tools to reduce unauthorized data exposure.",
                "Built Python automations to identify bot traffic and campaign anomalies in digital marketing operations.",
            ],
            "tools": "Security Audits, Python, RBAC, Analytics",
        },
        {
            "role": "Executive - Analytics & Reporting",
            "company": "Group M",
            "meta": "Bengaluru, India | Jun 2021 - Jun 2023",
            "bullets": [
                "Delivered reporting and decision-support solutions for Disney Hotstar, Ikea, Meesho, Amway, and Kimberly Clark.",
                "Built dashboards and recurring reporting using Power BI, Salesforce Datorama, and SQL.",
            ],
            "tools": "Power BI, SQL, Salesforce Datorama, Reporting",
        },
    ],
    "projects": [
        {
            "name": "MX Lens",
            "tagline": "Email Security SaaS",
            "description": "B2B platform built to reduce SOC workload through automated phishing detection, an administrative control plane, and billing automation.",
            "stack": "Next.js, Prisma, Stripe",
        },
        {
            "name": "CyberTools Hub",
            "tagline": "SOC Operations Toolkit",
            "description": "Privacy-first SaaS concept designed to centralize critical SOC and incident response tooling in a single workflow.",
            "stack": "SaaS, SOC Tooling, Privacy",
        },
        {
            "name": "Threat Hunting Initiative",
            "tagline": "Aspire Zone Foundation",
            "description": "Created hunting queries that combined Sentinel, Cortex XDR, and Kaspersky TI context to investigate MENA-focused APT activity.",
            "stack": "Microsoft Sentinel, MITRE ATT&CK, Cortex XDR",
        },
    ],
    "skills": [
        ("Security Operations", "Detection engineering, alert triage, threat hunting, incident response, SIEM and log analysis"),
        ("SOC Platforms", "Microsoft Sentinel, Defender XDR, Cortex XDR/XSOAR, SentinelOne, Darktrace, Trend Micro XDR"),
        ("Threat Intelligence", "MITRE ATT&CK, APT analysis, IOC management, Kaspersky TI, VirusTotal Enterprise"),
        ("Automation", "Python, KQL, XSOAR playbooks, SOAR orchestration"),
        ("Cloud and Infrastructure", "Prisma Cloud, Azure Security, Microsoft Entra ID, Forescout"),
        ("Reporting and Tools", "Tenable, Power BI, Looker Studio, executive reporting"),
    ],
    "certifications_completed": [
        "Microsoft SC-200 - Security Operations Analyst Associate",
        "CFR - CyberSec First Responder - Threat Detection & Response",
        "IBM Data Analyst - Data Analyst Specialization",
    ],
    "certifications_pursuing": [
        "ISC2 CCSP - Certified Cloud Security Professional",
    ],
    "education": [
        "B.Tech - Computer Science & Engineering",
        "National Institute of Technology, Puducherry",
    ],
}


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="ResumeName",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=28,
            textColor=INK,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeTitle",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=14,
            textColor=ACCENT,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeContact",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=11,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeSection",
            parent=styles["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=ACCENT,
            spaceBefore=10,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.6,
            leading=13.4,
            textColor=INK,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeMeta",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=10.8,
            textColor=MUTED,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeRole",
            parent=styles["Heading4"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=13,
            textColor=INK,
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBullet",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.4,
            leading=12.6,
            leftIndent=10,
            textColor=INK,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeLabelLine",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.6,
            textColor=INK,
            spaceAfter=4,
        )
    )
    return styles


def section_heading(title: str, styles) -> list:
    return [
        Paragraph(escape(title), styles["ResumeSection"]),
        HRFlowable(width="100%", thickness=0.8, color=LINE, spaceBefore=0, spaceAfter=5),
    ]


def paragraph(text: str, style_name: str, styles) -> Paragraph:
    return Paragraph(escape(text), styles[style_name])


def build_story(styles) -> list:
    story = [
        Paragraph(escape(RESUME["name"]), styles["ResumeName"]),
        Paragraph(escape(RESUME["title"]), styles["ResumeTitle"]),
        Paragraph(escape(RESUME["contact_primary"]), styles["ResumeContact"]),
        Paragraph(escape(RESUME["contact_secondary"]), styles["ResumeContact"]),
        Spacer(1, 0.08 * inch),
        HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceBefore=0, spaceAfter=9),
    ]

    story.extend(section_heading("Professional Summary", styles))
    story.append(paragraph(RESUME["summary"], "ResumeBody", styles))
    for line in RESUME["highlights"]:
        story.append(Paragraph(f"- {escape(line)}", styles["ResumeBullet"]))

    story.extend(section_heading("Professional Experience", styles))
    for item in RESUME["experience"]:
        story.append(paragraph(f"{item['role']} | {item['company']}", "ResumeRole", styles))
        story.append(paragraph(item["meta"], "ResumeMeta", styles))
        for bullet in item["bullets"]:
            story.append(Paragraph(f"- {escape(bullet)}", styles["ResumeBullet"]))
        story.append(Paragraph(f"<b>Platforms:</b> {escape(item['tools'])}", styles["ResumeLabelLine"]))
        story.append(Spacer(1, 0.06 * inch))

    story.append(PageBreak())

    story.extend(section_heading("Selected Projects", styles))
    for project in RESUME["projects"]:
        story.append(paragraph(f"{project['name']} | {project['tagline']}", "ResumeRole", styles))
        story.append(paragraph(project["description"], "ResumeBody", styles))
        story.append(Paragraph(f"<b>Stack:</b> {escape(project['stack'])}", styles["ResumeLabelLine"]))
        story.append(Spacer(1, 0.05 * inch))

    story.extend(section_heading("Technical Skills", styles))
    for label, values in RESUME["skills"]:
        story.append(Paragraph(f"<b>{escape(label)}:</b> {escape(values)}", styles["ResumeLabelLine"]))

    story.extend(section_heading("Certifications", styles))
    for item in RESUME["certifications_completed"]:
        story.append(Paragraph(f"- {escape(item)}", styles["ResumeBullet"]))
    for item in RESUME["certifications_pursuing"]:
        story.append(Paragraph(f"- Pursuing: {escape(item)}", styles["ResumeBullet"]))

    story.extend(section_heading("Education", styles))
    story.append(paragraph(RESUME["education"][0], "ResumeRole", styles))
    story.append(paragraph(RESUME["education"][1], "ResumeMeta", styles))

    return story


def draw_page_chrome(canvas, doc):
    canvas.saveState()
    canvas.setTitle("Akmal Muhammed CV")
    canvas.setAuthor("Akmal Muhammed")
    canvas.setSubject("ATS-friendly cybersecurity resume")
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1)
    canvas.line(doc.leftMargin, A4[1] - 0.48 * inch, A4[0] - doc.rightMargin, A4[1] - 0.48 * inch)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.35 * inch, "Akmal Muhammed - Resume")
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.35 * inch, f"Page {canvas.getPageNumber()}")
    canvas.restoreState()


def render_previews(pdf_path: Path):
    if PREVIEW_DIR.exists():
        shutil.rmtree(PREVIEW_DIR)
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)

    document = fitz.open(pdf_path)
    try:
        for index, page in enumerate(document, start=1):
            pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
            pixmap.save(PREVIEW_DIR / f"akmal-muhammed-cv-page-{index}.png")
    finally:
        document.close()


def validate_text(pdf_path: Path):
    reader = PdfReader(str(pdf_path))
    extracted_text = "\n".join(page.extract_text() or "" for page in reader.pages)
    required_terms = [
        "Akmal Muhammed",
        "Security Consultant",
        "Professional Experience",
        "Technical Skills",
        "Microsoft SC-200",
    ]
    missing = [term for term in required_terms if term not in extracted_text]
    if missing:
        raise RuntimeError(f"PDF text validation failed. Missing terms: {', '.join(missing)}")


def build_pdf():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    output_pdf = OUTPUT_DIR / PDF_NAME
    public_pdf = PUBLIC_DIR / PDF_NAME

    document = SimpleDocTemplate(
        str(output_pdf),
        pagesize=A4,
        leftMargin=0.62 * inch,
        rightMargin=0.62 * inch,
        topMargin=0.74 * inch,
        bottomMargin=0.62 * inch,
    )

    styles = build_styles()
    story = build_story(styles)
    document.build(story, onFirstPage=draw_page_chrome, onLaterPages=draw_page_chrome)

    shutil.copy2(output_pdf, public_pdf)
    validate_text(output_pdf)
    render_previews(output_pdf)

    page_count = len(PdfReader(str(output_pdf)).pages)
    print(f"Generated: {output_pdf}")
    print(f"Copied to: {public_pdf}")
    print(f"Preview pages: {PREVIEW_DIR}")
    print(f"Page count: {page_count}")


if __name__ == "__main__":
    build_pdf()
