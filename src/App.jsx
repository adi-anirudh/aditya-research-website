import React, { useEffect, useState, useRef } from "react";

/* -- content ------------------------------------------------------- */

const ME = "Aditya Anirudh Jonnalagadda";

const links = {
  scholar: "https://scholar.google.com/citations?hl=en&user=42ePXTsAAAAJ",
  linkedin: "https://www.linkedin.com/in/aditya-anirudh-jonnalagadda-297555253/",
  email: "mailto:adi.anirudh1610@gmail.com",
};

const interests = [
  "computer architecture",
  "emerging memories",
  "near-memory processing",
  "hw–sw co-design",
  "computer arithmetic",
  "ml systems",
];

const publications = [
  {
    year: "2026",
    title: "Closing the Gap Between Float and Posit Hardware Efficiency",
    authors: "Aditya Anirudh Jonnalagadda, Rishi Thotli, John L. Gustafson",
    venue: "Conference on Next Generation Arithmetic 2025 · arXiv 2026",
    link: "https://arxiv.org/abs/2603.01615",
  },
  {
    year: "2025",
    title: "An Energy-Efficient Approximate Posit Multiply–Divide Unit",
    authors:
      "Rishi Thotli, Aditya Anirudh Jonnalagadda, Rushabh Hulsurkar, Uppugunduru Anil Kumar, Sreehari Veeramachaneni, Syed Ershad Ahmed, John L. Gustafson",
    venue: "Conference on Next Generation Arithmetic 2025",
    link: "https://posithub.org/An%20Energy-Efficient%20Approximate%20Posit%20Multiply%E2%80%93Divide%20Unit.pdf",
  },
  {
    year: "",
    title: "Energy-Efficient Decoding and Encoding Hardware for Optimized Posit Arithmetic",
    authors: "Aditya Anirudh Jonnalagadda, Rishi Thotli, Sreehari Veeramachaneni, Uppugunduru Anil Kumar, Syed Ershad Ahmed",
    venue: "IEEE Embedded Systems Letters",
    link: "",
  },
  {
    year: "2024",
    title: "ADEPNET: A Dynamic-Precision Efficient Posit Multiplier for Neural Networks",
    authors: "Aditya Anirudh Jonnalagadda, Uppugunduru Anil Kumar, Rishi Thotli, Satvik Sardesai, Sreehari Veeramachaneni, Syed Ershad Ahmed",
    venue: "IEEE Access 2024",
    link: "",
  },
  {
    year: "2023",
    title: "Design of Energy-Efficient Posit Multiplier",
    authors: "Aditya Anirudh Jonnalagadda, Uppugunduru Anil Kumar, Sreehari Veeramachaneni, Syed Ershad Ahmed",
    venue: "ACM GLSVLSI 2023",
    link: "https://dl.acm.org/doi/10.1145/3583781.3590227",
  },
];

const patents = [
  { title: "Oscillator Self-Calibration", status: "filed", org: "Texas Instruments" },
  { title: "On-chip Time-to-Digital Conversion Based Calibration of RC Oscillators", status: "accepted for filing", org: "Texas Instruments" },
  { title: "Efficient Off-Chip Transfer of Alpha Pixels", status: "accepted for filing", org: "Qualcomm" },
];

const experience = [
  {
    period: "2026 — now",
    org: "National University of Singapore",
    role: "PhD Student, Computer Science",
    desc: "Computer architecture for efficient LLM inference — near-memory processing, dataflow, and emerging memory — going after the data-movement costs of memory-bound AI workloads. Advised by Prof. Tulika Mitra.",
  },
  {
    period: "2024 — 2026",
    org: "Qualcomm",
    role: "Associate RTL Design Engineer",
    desc: "RTL design for the architecture and micro-architecture of XR and compute chipset features on the Snapdragon platform.",
  },
  {
    period: "2023 — 2024",
    org: "Texas Instruments",
    role: "Digital Design Intern",
    desc: "Architected an oscillator-trim subsystem and took it from RTL to timing closure and into a test chip — across synthesis, physical design, SPICE characterization, and SoC integration. Led to multiple patent filings.",
  },
  {
    period: "2020 — 2024",
    org: "BITS Pilani, Hyderabad",
    role: "B.E. Electronics & Communication Engineering",
    desc: "Projects in computer architecture, low-power VLSI, FPGA-based systems, and computer arithmetic — leading to multiple publications and research grants.",
  },
];

const sections = [
  ["about", "about"],
  ["research", "research"],
  ["publications", "publications"],
  ["patents", "patents"],
  ["experience", "experience"],
];

/* -- helpers ------------------------------------------------------- */

function Authors({ list }) {
  const parts = list.split(ME);
  return (
    <span>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <span className="me">{ME}</span>}
        </React.Fragment>
      ))}
    </span>
  );
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* -- app ----------------------------------------------------------- */

export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );
  const [hasPhoto, setHasPhoto] = useState(true);
  const active = useScrollSpy(useRef(sections.map((s) => s[0])).current);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* private mode — ignore */
    }
  }, [theme]);

  return (
    <>
      <header className="topbar">
        <div className="topbar__inner">
          <span className="topbar__id">
            <b>aditya</b>@nus:~$
          </span>
          <nav className="nav">
            {sections.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
                {label}
              </a>
            ))}
            <button
              className="toggle"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? "light" : "dark"}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="hero">
          <div className="hero__top">
            <div>
              <div className="hero__cmd">
                <span className="prompt">aditya@nus</span>:~$ whoami
              </div>
              <h1>
                Aditya Anirudh
                <br />
                Jonnalagadda
                <span className="cursor" aria-hidden="true" />
              </h1>
              <p className="hero__role">
                PhD student · Computer Architecture &amp; Machine Learning Systems · National University of Singapore
              </p>
            </div>

            {hasPhoto && (
              <img
                className="avatar"
                src="/aditya.jpg"
                alt="Aditya Anirudh Jonnalagadda"
                onError={() => setHasPhoto(false)}
              />
            )}
          </div>

          <p className="hero__tagline">
            I build <b>hardware and systems that make large-model inference
            cheaper to run</b> — near-memory processing, dataflow, and emerging
            memory.
          </p>

          <div className="hero__links">
            <a href={links.scholar} target="_blank" rel="noreferrer">
              google scholar <span className="arrow">↗</span>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              linkedin <span className="arrow">↗</span>
            </a>
            <a href={links.email}>email</a>
          </div>
        </section>

        {/* about */}
        <section id="about" className="sec prose">
          <h2 className="sec-head">
            <span className="prompt">&gt;</span> about
          </h2>
          <p>
            I am a PhD student in Computer Science at the National University of
            Singapore, advised by Prof. Tulika Mitra, working on{" "}
            <b>computer architecture and machine learning systems for efficient
            large language model inference</b>. Modern LLM inference is bound less by compute than by
            data movement — the bandwidth and energy spent shuttling model weights
            and the ever-growing key–value cache between memory and the processor.
            My research targets this memory wall directly, through{" "}
            <b>near-memory and in-storage processing</b>, dataflow architectures,
            and emerging memory technologies that move computation closer to where
            the data resides.
          </p>
          <p>
            Before my PhD, I spent several years designing silicon in industry. At{" "}
            <b>Qualcomm</b> I worked as an RTL design engineer on architecture and
            micro-architecture for XR and compute chipsets on the Snapdragon
            platform. At{" "}
            <b>Texas Instruments</b> I architected an oscillator-trim subsystem and
            carried it through the full ASIC flow — RTL design, synthesis, physical
            design, SPICE characterization, and SoC integration — to timing closure
            and integration into a test chip, resulting in multiple patent filings.
            I hold a B.E. in Electronics and Communication Engineering from BITS
            Pilani, Hyderabad.
          </p>
          <p>
            My earlier research was in computer arithmetic, in collaboration with
            Dr.{" "}
            <a href="https://en.wikipedia.org/wiki/John_Gustafson_(scientist)" target="_blank" rel="noreferrer">
              John Gustafson
            </a>
            , the originator of the <b>posit number format</b>. There I focused on
            the hardware efficiency of posit encoding, decoding, and arithmetic
            units, with the goal of making posits a practical alternative to
            IEEE-754 floating-point for AI and HPC systems. A consistent thread
            runs through all of it: efficiency at the hardware–software boundary —
            extracting more from every bit represented and every byte moved.
          </p>
        </section>

        {/* research */}
        <section id="research" className="sec">
          <h2 className="sec-head">
            <span className="prompt">&gt;</span> research
          </h2>
          <ul className="tags">
            {interests.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {/* publications */}
        <section id="publications" className="sec">
          <h2 className="sec-head">
            <span className="prompt">&gt;</span> publications
          </h2>
          <div className="pubs">
            {publications.map((p) => (
              <article className="pub" key={p.title}>
                <div className="pub__year">{p.year || "·"}</div>
                <div>
                  {p.link ? (
                    <a className="pub__title" href={p.link} target="_blank" rel="noreferrer">
                      {p.title} <span className="arrow">↗</span>
                    </a>
                  ) : (
                    <span className="pub__title">{p.title}</span>
                  )}
                  <div className="pub__authors">
                    <Authors list={p.authors} />
                  </div>
                  <div className="pub__venue">{p.venue}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* patents */}
        <section id="patents" className="sec">
          <h2 className="sec-head">
            <span className="prompt">&gt;</span> patents
          </h2>
          <div className="patents">
            {patents.map((p) => (
              <article className="patent" key={p.title}>
                <div className="patent__title">{p.title}</div>
                <div className="patent__meta">
                  <span className="patent__status">{p.status}</span> &nbsp;{p.org}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* experience */}
        <section id="experience" className="sec">
          <h2 className="sec-head">
            <span className="prompt">&gt;</span> experience
          </h2>
          <div className="xp">
            {experience.map((e) => (
              <article className="job" key={e.org}>
                <div className="job__period">{e.period}</div>
                <div>
                  <div className="job__org">{e.org}</div>
                  <div className="job__role">{e.role}</div>
                  <div className="job__desc">{e.desc}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* contact */}
        <footer className="footer">
          <h2 className="sec-head">
            <span className="prompt">&gt;</span> contact
          </h2>
          <div className="footer__links">
            <a href={links.email}>email</a>
            <a href={links.scholar} target="_blank" rel="noreferrer">
              google scholar <span className="arrow">↗</span>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              linkedin <span className="arrow">↗</span>
            </a>
          </div>
          <div className="footer__prompt">
            <span className="prompt">aditya@nus</span>:~$ <span className="cursor" aria-hidden="true" />
          </div>
          <div className="footer__copy">© 2026 Aditya Anirudh Jonnalagadda</div>
        </footer>
      </main>
    </>
  );
}
