import React, { useState } from "react";

const publications = [
  {
    title: "Closing the Gap Between Float and Posit Hardware Efficiency",
    venue: "Conference on Next Generation Arithmetic, 2025 / arXiv, 2026",
    authors: "Aditya Anirudh Jonnalagadda · Rishi Thotli · John L. Gustafson",
    tag: "Computer Arithmetic",
    link: "https://arxiv.org/abs/2603.01615"
  },
  {
    title: "An Energy-Efficient Approximate Posit Multiply-Divide Unit",
    venue: "Conference on Next Generation Arithmetic, 2025",
    authors: "Rishi Thotli · Aditya Anirudh Jonnalagadda · Rushabh Hulsurkar · Uppugunduru Anil Kumar · Sreehari Veeramachaneni · Syed Ershad Ahmed · John L. Gustafson",
    tag: "Approximate Arithmetic",
    link: "https://posithub.org/An%20Energy-Efficient%20Approximate%20Posit%20Multiply%E2%80%93Divide%20Unit.pdf"
  },
  {
    title: "Energy-Efficient Decoding and Encoding Hardware for Optimized Posit Arithmetic",
    venue: "IEEE Embedded Systems Letters",
    authors: "Aditya Anirudh Jonnalagadda · Rishi Thotli · Sreehari Veeramachaneni · Uppugunduru Anil Kumar · Syed Ershad Ahmed",
    tag: "Hardware Efficiency",
    link: "#"
  },
  {
    title: "ADEPNET: A Dynamic-Precision Efficient Posit Multiplier for Neural Networks",
    venue: "IEEE Access, 2024",
    authors: "Aditya Anirudh Jonnalagadda · Uppugunduru Anil Kumar · Rishi Thotli · Satvik Sardesai · Sreehari Veeramachaneni · Syed Ershad Ahmed",
    tag: "Neural Networks",
    link: "#"
  },
  {
    title: "Design of Energy Efficient Posit Multiplier",
    venue: "ACM GLSVLSI 2023",
    authors: "Aditya Anirudh Jonnalagadda · Uppugunduru Anil Kumar · Sreehari Veeramachaneni · Syed Ershad Ahmed",
    tag: "VLSI",
    link: "https://dl.acm.org/doi/10.1145/3583781.3590227"
  },
];

const patents = [
  {
    title: "Oscillator Self-Calibration",
    status: "Filed",
    area: "Texas Instruments"
  },
  {
    title: "On-chip Time-to-Digital Conversion Based Calibration of RC Oscillators",
    status: "Accepted for filing",
    area: "Texas Instruments"
  },
  {
    title: "Efficient Off-Chip Transfer of Alpha Pixels",
    status: "Accepted for filing",
    area: "Qualcomm"
  }
];

const experience = [
  {
    org: "National University of Singapore",
    role: "PhD Student, Computer Science",
    period: "2026 — Present",
    desc: "Researching systems and hardware architectures for efficient LLM inference under the supervision of Prof. Tulika Mitra."
  },
  {
    org: "Qualcomm",
    role: "Associate RTL Design Engineer",
    period: "2024 — 2026",
    desc: "Worked on display processor architecture and micro-architecture for new XR and compute chipset features. My work involved extending legacy pixel datapaths and contributing to the bus interface layer, including bridging transactions across different protocols and increasing memory bandwidth for next-generation Snapdragon chipsets."
  },
  {
    org: "Texas Instruments",
    role: "Digital Design Intern",
    period: "2023 — 2024",
    desc: "Architected an oscillator trim subsystem and took it through the ASIC flow up to timing closure before integrating it into a test chip. Worked across RTL design, synthesis, physical design, SPICE characterization, and SoC integration, resulting in multiple patent filings."
  },
  {
    org: "BITS Pilani Hyderabad Campus",
    role: "B.E. Electronics and Communication Engineering",
    period: "2020 — 2024",
    desc: "Worked on projects in computer architecture, low-power VLSI design, FPGA-based system design, and computer arithmetic, leading to multiple publications and research grants."
  }
];

const themes = [
  "Computer Architecture",
  "Emerging Memories",
  "HW-SW Co-Design",
  "Computer Arithmetic",
  "Near-Memory Processing",
  "Machine Learning Systems"
];

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f1ea",
    color: "#111827",
    fontFamily: "IBM Plex Sans, Avenir Next, Segoe UI, sans-serif"
  },
  container: {
    maxWidth: "1220px",
    margin: "0 auto",
    padding: "34px 32px 72px"
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "270px minmax(0, 1fr)",
    gap: "42px",
    alignItems: "start"
  },
  sidebar: {
    position: "sticky",
    top: "34px",
    background: "#1f2937",
    color: "white",
    borderRadius: "22px",
    padding: "26px",
    minHeight: "calc(100vh - 68px)",
    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.22)"
  },
  name: {
    margin: 0,
    fontSize: "25px",
    lineHeight: 1.08,
    letterSpacing: "-0.04em",
    fontWeight: 700
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "34px"
  },
  navButton: {
    background: "transparent",
    border: "none",
    borderRadius: "12px",
    color: "#cbd5e1",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "left",
    padding: "10px 12px",
    fontFamily: "inherit"
  },
  activeButton: {
    background: "#2563eb",
    color: "white"
  },
  sidebarLink: {
    color: "#93c5fd",
    textDecoration: "none",
    fontSize: "14px",
    padding: "10px 12px"
  },
  contact: {
    position: "absolute",
    left: "26px",
    right: "26px",
    bottom: "26px",
    display: "grid",
    gap: "8px"
  },
  main: {
    minHeight: "calc(100vh - 68px)",
    background: "#fffdf8",
    borderRadius: "22px",
    padding: "38px 44px",
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)"
  },
  intro: {
    marginTop: "20px",
    color: "#4b5563",
    lineHeight: 1.9,
    fontSize: "17px",
    maxWidth: "900px"
  },
  introBlock: {
    marginTop: "26px",
    maxWidth: "920px"
  },
  sectionTitle: {
    margin: 0,
    color: "#0f172a",
    fontSize: "28px",
    lineHeight: 1.15,
    letterSpacing: "-0.04em"
  },
  chipWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
    gap: "18px",
    marginTop: "48px",
    maxWidth: "1040px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  chip: {
    background: "#1f2937",
    color: "#ffffff",
    border: "1px solid #374151",
    borderRadius: "18px",
    padding: "22px",
    fontSize: "16px",
    fontWeight: 700,
    boxShadow: "0 8px 24px rgba(15,23,42,0.10)",
    textAlign: "center",
    lineHeight: 1.4,
    minHeight: "92px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    padding: "20px 0",
    borderBottom: "1px solid #e7dfd4"
  },
  itemTitle: {
    margin: 0,
    color: "#0f172a",
    fontSize: "18px",
    lineHeight: 1.45,
    fontWeight: 700
  },
  text: {
    margin: "5px 0 0",
    color: "#5b5563",
    lineHeight: 1.65,
    fontSize: "14px"
  },
  meta: {
    marginTop: "8px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center"
  },
  tag: {
    color: "#ffffff",
    background: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "999px",
    padding: "5px 11px",
    fontSize: "12px",
    fontWeight: 700
  },
  timeline: {
    marginTop: "24px",
    borderLeft: "2px solid #dbeafe",
    paddingLeft: "24px"
  },
  timelineItem: {
    position: "relative",
    paddingBottom: "26px"
  },
  dot: {
    position: "absolute",
    left: "-32px",
    top: "4px",
    width: "14px",
    height: "14px",
    borderRadius: "999px",
    background: "#2563eb",
    border: "3px solid white",
    boxShadow: "0 0 0 2px #bfdbfe"
  }
};

function SidebarButton({ label, target, page, setPage }) {
  const active = page === target;
  return (
    <button
      onClick={() => setPage(target)}
      style={{ ...styles.navButton, ...(active ? styles.activeButton : {}) }}
    >
      {label}
    </button>
  );
}

function HomePage() {
  return (
    <>
      <h1 style={styles.sectionTitle}>About Me</h1>

      <div style={styles.introBlock}>
        <p style={styles.intro}>
          I am currently pursuing a PhD in Computer Science at the National University of Singapore under the supervision of Prof. Tulika Mitra, where my research focuses on systems and hardware architectures for efficient LLM inference, with an emphasis on near-memory processing, dataflow architectures, and emerging memory technologies to reduce the data movement overheads of memory-bound AI workloads. Prior to this, I completed my undergraduate studies in Electronics and Communication Engineering at BITS Pilani Hyderabad Campus, where I worked on computer architecture, low-power VLSI design, FPGA-based system design, and posit arithmetic, resulting in multiple publications.
        </p>
      </div>

      <div style={styles.introBlock}>
        <p style={styles.intro}>
          Previously, I worked with Dr. John Gustafson on posit arithmetic for AI and HPC systems, focusing on improving the hardware efficiency of posit encoding, decoding, and arithmetic units to make posit systems a more practical alternative to IEEE floating-point hardware. I have also worked at Qualcomm as an RTL designer, where I worked on architecture and micro-architecture for new XR and compute chipset features, and at Texas Instruments as a digital design intern, where I architected an oscillator trim subsystem and took it through the ASIC flow up to timing closure before integrating it into a test chip, resulting in multiple patent filings.
        </p>
      </div>

      <div style={styles.chipWrap}>
        {themes.map((theme) => (
          <span key={theme} style={styles.chip}>{theme}</span>
        ))}
      </div>
    </>
  );
}

function PublicationsPage() {
  return (
    <section>
      <h2 style={styles.sectionTitle}>Publications</h2>
      {publications.map((paper) => (
        <article key={paper.title} style={styles.item}>
          <h3 style={styles.itemTitle}>{paper.title}</h3>
          <p style={{ ...styles.text, fontWeight: 600, color: "#374151" }}>{paper.authors}</p>
          <p style={styles.text}>{paper.venue}</p>
        </article>
      ))}
    </section>
  );
}

function PatentsPage() {
  return (
    <section>
      <h2 style={styles.sectionTitle}>Patents</h2>
      {patents.map((patent) => (
        <article key={patent.title} style={styles.item}>
          <h3 style={styles.itemTitle}>{patent.title}</h3>
          <div style={styles.meta}>
            <span style={styles.tag}>{patent.status}</span>
            <span style={{ ...styles.text, margin: 0 }}>{patent.area}</span>
          </div>
        </article>
      ))}
    </section>
  );
}

function ExperiencePage() {
  return (
    <section>
      <h2 style={styles.sectionTitle}>Experience</h2>
      <div style={styles.timeline}>
        {experience.map((exp) => (
          <article key={exp.org} style={styles.timelineItem}>
            <div style={styles.dot} />
            <h3 style={styles.itemTitle}>{exp.org}</h3>
            <p style={{ ...styles.text, color: "#111827", fontWeight: 700 }}>{exp.role} · {exp.period}</p>
            <p style={styles.text}>{exp.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function PersonalResearchWebsite() {
  const [page, setPage] = useState("home");

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <div style={styles.layout}>
          <aside style={styles.sidebar}>
            <h2 style={styles.name}>Aditya Anirudh Jonnalagadda</h2>

            <nav style={styles.nav}>
              <SidebarButton label="Home" target="home" page={page} setPage={setPage} />
              <SidebarButton label="Publications" target="publications" page={page} setPage={setPage} />
              <SidebarButton label="Patents" target="patents" page={page} setPage={setPage} />
              <SidebarButton label="Experience" target="experience" page={page} setPage={setPage} />
            </nav>

            <div style={styles.contact}>
              <a href="https://www.linkedin.com/in/aditya-anirudh-jonnalagadda-297555253/" style={styles.sidebarLink}>LinkedIn</a>
              <a href="https://scholar.google.com/citations?hl=zh-CN&user=42ePXTsAAAAJ" style={styles.sidebarLink}>Google Scholar</a>
              <a href="mailto:adi.anirudh1610@gmail.com" style={styles.sidebarLink}>Email</a>
            </div>
          </aside>

          <section style={styles.main}>
            {page === "home" && <HomePage />}
            {page === "publications" && <PublicationsPage />}
            {page === "patents" && <PatentsPage />}
            {page === "experience" && <ExperiencePage />}
          </section>
        </div>
      </div>
    </main>
  );
}
