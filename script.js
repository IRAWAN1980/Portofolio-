/* ==========================================================================
   ISI KONTEN DI SINI
   Semua teks yang tampil di halaman diambil dari array-array di bawah.
   Edit array-nya saja — HTML tidak perlu disentuh.
========================================================================== */

// ---- 1. PROYEK UNGGULAN --------------------------------------------------
// image: kosongkan ("") untuk pakai placeholder, atau isi path screenshot,
// misalnya "assets/xiphos-report.png" lalu taruh filenya di folder assets/.
const PROJECTS = [
  {
    name: "KSATRIA Xiphos",
    image: "",
    imageAlt: "Screenshot output KSATRIA Xiphos",
    description: "Framework red team black-box web assessment: recon otomatis, 3-tier Nuclei scanning dengan auto-revalidation temuan HIGH/CRITICAL, dan 50 test case manual OWASP Top 10.",
    tags: ["Python", "Nuclei", "OWASP Top 10", "Kali Linux"],
    link: "" // isi link GitHub/demo di sini
  },
  {
    name: "KSATRIA Network",
    image: "",
    imageAlt: "Screenshot output KSATRIA Network",
    description: "Automated network vulnerability scanner: port scanning via nmap/masscan, korelasi CVE lewat NVD API 2.0, dan laporan PDF profesional.",
    tags: ["Python", "Nmap", "NVD API", "PDF Report"],
    link: ""
  },
  {
    name: "IP Threat Intel CLI",
    image: "",
    imageAlt: "Screenshot IP Threat Intel CLI",
    description: "Tool CLI threat intelligence untuk enrichment IOC, dipaketkan dengan Nuitka untuk distribusi lintas platform.",
    tags: ["Python", "Flask", "OSINT", "CLI"],
    link: ""
  },
  {
    name: "SOC Security Automation",
    image: "",
    imageAlt: "Screenshot automasi investigasi SOC",
    description: "Konsep automasi investigasi SOC: enrichment IOC, pemetaan MITRE ATT&CK, risk scoring, dan pelaporan otomatis.",
    tags: ["Python", "MITRE ATT&CK", "REST API"],
    link: ""
  }
];

// ---- 2. DASHBOARD SIEM (Splunk) ------------------------------------------
// PENTING: pastikan setiap screenshot sudah disanitasi (blur/crop data
// pelanggan, IP publik, hostname internal) sebelum dipakai di sini.
const DASHBOARDS = [
  {
    name: "Anti-DDoS Monitoring",
    image: "",
    description: "16 panel single-value color-coded per kategori serangan, dibangun di atas Dashboard Studio dengan arsitektur chained ds.search."
  },
  {
    name: "GlobalProtect VPN Activity",
    image: "",
    description: "Dashboard aktivitas VPN dengan filter dropdown Portal yang fungsional (token-based OR-wildcard pattern)."
  },
  {
    name: "ExtraHop NDR",
    image: "",
    description: "5 tab mengikuti best-practice view SOC untuk network detection & response."
  }
];

// ---- 3. RINGKASAN RISET / BUG BOUNTY --------------------------------------
// Isi angka sebenarnya di sini (jumlah program, dsb).
const RESEARCH_STATS = [
  { value: "—", label: "Program Diikuti" },
  { value: "—", label: "Temuan Dilaporkan" },
  { value: "YesWeHack", label: "Platform" },
  { value: "KsatriaRed", label: "Handle" }
];

// ---- 4. STUDI KASUS RISET --------------------------------------------------
// severity: "critical" | "high" | "medium" | "info"
// Kosongkan / hapus baris yang belum boleh dipublikasikan.
const RESEARCH_CASES = [
  {
    severity: "high",
    title: "Hardcoded credential pada JS bundle",
    description: "Ditemukan Basic Auth credential ter-hardcode di bundle JavaScript publik. Dilaporkan dengan CVSS 7.5."
  },
  {
    severity: "medium",
    title: "Kajian WAF bypass",
    description: "Pengujian teknik bypass terhadap proteksi WAF pada aplikasi web publik."
  },
  {
    severity: "info",
    title: "Source map exposure",
    description: "Ditemukan source map yang ter-expose secara publik pada domain aplikasi web, memungkinkan rekonstruksi struktur kode sisi klien."
  }
];

// ---- 5. TOOLS & STACK ------------------------------------------------------
const STACK = [
  { group: "Security Operations", items: ["Splunk (SPL, Dashboard Studio)", "XDR/EDR", "Palo Alto GlobalProtect", "ExtraHop NDR"] },
  { group: "Offensive Security", items: ["Nuclei", "ffuf", "Burp Suite", "subfinder / httpx / katana", "Nmap / Masscan"] },
  { group: "Development", items: ["Python", "Flask", "REST API", "SQLite", "Git"] }
];

// ---- 6. KONTAK --------------------------------------------------------------
const CONTACT = [
  { label: "Email", href: "mailto:isi-email-kamu@example.com" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "YesWeHack", href: "#" }
];

// URL file PDF portofolio lengkap (opsional) untuk tombol "Download CV"
const CV_PDF_URL = "#";


/* ==========================================================================
   RENDER — tidak perlu diedit kecuali mau mengubah tampilan/struktur
========================================================================== */

function renderProjects(){
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card">
      <div class="project-shot">
        ${p.image
          ? `<img src="${p.image}" alt="${p.imageAlt || p.name}" style="width:100%;height:100%;object-fit:cover;">`
          : `[ Screenshot / demo: ${p.name} ]`}
      </div>
      <div class="project-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="tag-row">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">Lihat repo / detail</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderDashboards(){
  const grid = document.getElementById("dashGrid");
  grid.innerHTML = DASHBOARDS.map(d => `
    <div class="dash-card">
      <div class="dash-shot">
        ${d.image
          ? `<img src="${d.image}" alt="${d.name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
          : `[ Taruh screenshot dashboard di sini ]`}
      </div>
      <div class="dash-caption">
        <h3>${d.name}</h3>
        <p>${d.description}</p>
      </div>
    </div>
  `).join("");
}

function renderResearch(){
  const stats = document.getElementById("researchStats");
  stats.innerHTML = RESEARCH_STATS.map(s => `
    <div class="stat-tile">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join("");

  const list = document.getElementById("researchList");
  list.innerHTML = RESEARCH_CASES.map(c => `
    <div class="research-row">
      <span class="severity severity-${c.severity}">${c.severity.toUpperCase()}</span>
      <div>
        <h4>${c.title}</h4>
        <p>${c.description}</p>
      </div>
    </div>
  `).join("");
}

function renderStack(){
  const wrap = document.getElementById("stackGroups");
  wrap.innerHTML = STACK.map(g => `
    <div class="stack-group">
      <h3>${g.group}</h3>
      <ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderContact(){
  const list = document.getElementById("contactLinks");
  list.innerHTML = CONTACT.map(c => `<li><a href="${c.href}" target="_blank" rel="noopener">${c.label}</a></li>`).join("");
  document.getElementById("cv-download-link").href = CV_PDF_URL;
}

// ---- Terminal boot animation di hero (satu momen, hormati reduced motion) --
function renderTerminal(){
  const body = document.getElementById("terminalBody");
  const lines = [
    `> whoami`,
    `<span class="ok">edi.irawan (Xsecure)</span>`,
    `> status --role`,
    `SOC / Security Operations — <span class="warn">active</span>`,
    `> focus`,
    `threat-intel, web-assessment, automation`
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion){
    body.innerHTML = lines.map(l => `<div class="line">${l}</div>`).join("");
    return;
  }

  let i = 0;
  function next(){
    if (i >= lines.length){
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      body.appendChild(cursor);
      return;
    }
    const div = document.createElement("div");
    div.className = "line";
    div.innerHTML = lines[i];
    body.appendChild(div);
    i++;
    setTimeout(next, 260);
  }
  next();
}

// ---- Nav toggle (mobile) ----------------------------------------------------
function initNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderDashboards();
  renderResearch();
  renderStack();
  renderContact();
  renderTerminal();
  initNav();
  document.getElementById("year").textContent = new Date().getFullYear();
});
