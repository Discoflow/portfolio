
"use strict";

/* =========================================================
   TRADUCTIONS
========================================================= */

const translations = {
  en: {
    brand: "PROFESSIONAL PORTFOLIO",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.publications": "Publications",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in touch",

    "hero.eyebrow": "SCIENCE · MATERIALS · CHEMISTRY",
    "hero.age": "28 years old",
    "hero.degree": "PhD in Materials Chemistry",
    "hero.targetLabel": "TARGET POSITION",
    "hero.target": "Materials Engineer – R&D",
    "hero.value1": "Scientific rigour",
    "hero.value2": "Experimental independence",
    "hero.value3": "Curiosity and versatility",

    "about.eyebrow": "ABOUT",
    "about.heading": "A scientific background,<br><em>an open-minded approach.</em>",
    "about.lead": "With a PhD in Materials Chemistry, my background has led me to explore various scientific topics, from the synthesis of functional materials to their advanced characterization.",
    "about.p1": "Independence and rigour are the foundations of my scientific approach. Conducting experimental work, critically analysing results and finding solutions to experimental challenges have shaped the way I work.",
    "about.p2": "Curious and versatile, I want to keep broadening my skill set and exploring new scientific and technological fields. Rather than limiting myself to one speciality, I want to become involved in ambitious projects at the intersection of several disciplines.",
    "about.p3": "What motivates me most is contributing to a project with a real purpose: developing a solution, advancing a technology or addressing a tangible industrial or societal need.",

    "experience.eyebrow": "PROFESSIONAL EXPERIENCE",
    "experience.heading": "A background built<br><em>through experimentation.</em>",
    "experience.intro": "Research and development work carried out in laboratories, focusing on the synthesis, characterization and study of functional materials.",
    "experience.type1": "PHD",
    "experience.job1": "PhD in Materials Chemistry",
    "experience.desc1": "Development and characterization of Al–N–H materials derived from ammonia alane for chemical hydrogen storage.",
    "experience.bullet1": "Designed and independently conducted an experimental programme, from synthesis to data interpretation.",
    "experience.bullet2": "Developed three synthesis strategies: Lewis acid–base reaction, metathesis and cryogenic milling.",
    "experience.bullet3": "Performed multi-technique characterization and investigated chemical and structural environments.",
    "experience.bullet4": "Initiated a scientific collaboration with CEA Saclay, resulting in two publications.",
    "experience.type2": "R&D INTERNSHIP",
    "experience.job2": "Research and Development Intern",
    "experience.desc2": "Solvothermal synthesis of porous MOF materials for hydrogen storage by adsorption.",
    "experience.bullet5": "Synthesis of porous materials and nanoparticle impregnation.",
    "experience.bullet6": "Evaluation of adsorption properties using PCT and BET measurements.",
    "experience.type3": "INTERNSHIP",
    "experience.job3": "Materials Chemistry Intern",
    "experience.desc3": "Synthesis and characterization of aminoborane-based ceramic materials for hydrogen storage.",
    "experience.bullet7": "Synthesis and characterization using liquid-state NMR, FTIR, TGA-MS, DSC and UV-Vis.",

    "skills.eyebrow": "SKILLS",
    "skills.heading": "Experimental expertise<br><em>applied to materials.</em>",
    "skills.intro": "Synthesis, characterization and analysis: skills developed through experimental work in materials chemistry.",
    "skills.catSynthesis": "MATERIALS DEVELOPMENT",
    "skills.synthesisTitle": "Materials synthesis and development",
    "skills.synthesisDescription": "Development of synthesis routes, experimental protocols and optimization of experimental conditions.",
    "skills.nmrDescription": "Analysis of chemical and structural environments using solid-state and liquid-state NMR.",
    "skills.spectroscopyTitle": "Spectroscopic techniques",
    "skills.structureTitle": "Structural analysis and microscopy",
    "skills.thermalTitle": "Thermal and gas analysis",
    "skills.adsorptionTitle": "Porosity and adsorption",
    "skills.softwareLabel": "SOFTWARE",
    "skills.legend": "Indicators: self-assessed practical experience on a scale of 1 to 5.",

    "projects.eyebrow": "PROJECTS & ACHIEVEMENTS",
    "projects.heading": "Exploring different disciplines,<br><em>developing solutions.</em>",
    "projects.intro": "Academic and personal projects illustrating the range of scientific topics explored throughout my background.",
    "projects.academic": "SCIENTIFIC AND ACADEMIC PROJECTS",
    "projects.personal": "PERSONAL AND DIGITAL PROJECTS",
    "projects.details": "View project",
    "projects.context": "Scientific context",
    "projects.objectives": "Objectives and approach",
    "projects.methods": "Methods considered",
    "projects.approaches": "Approaches investigated",
    "projects.outlook": "Development perspectives",

    "projects.radioTitle": "Radioactivity and the environment: solubility of uranium-bearing phases",
    "projects.radioSummary": "Undergraduate supervised project focused on natural radionuclides in the environment and a literature review of uranium- and thorium-bearing phases.",
    "projects.radioContext": "Natural radioactivity is widespread in the environment. The literature review covered the main radioactive decay series, particularly those associated with ²³⁸U, ²³⁵U and ²³²Th, as well as alpha and beta decay processes leading to more stable isotopes.",
    "projects.radioObjectives": "The project also examined naturally occurring uranium and thorium phases, their locations and abundances. A sampling campaign was considered around the Puech Buissou mine, upstream and downstream of the site, as well as at several locations: the Rhône, Espiguette beach in the Gard region and Collet-de-Dèze in Lozère.",
    "projects.radioMethods": "The proposed protocol included the characterization of liquid and solid samples using PERALS alpha liquid scintillation and infrared spectroscopy. The project was part of an environmental analysis approach, with analyses associated with the CEA Marcoule site.",
    "projects.radioStatus": "Supervised project: literature review and definition of an experimental approach. Sampling and analytical results are not presented here as completed work.",

    "projects.coatingTitle": "Superhydrophobic polymer coatings for aircraft cockpit windows",
    "projects.coatingSummary": "Study of functional coating solutions intended to reduce contamination and ice formation on aircraft windows.",
    "projects.coatingContext": "This literature-based project investigated superhydrophobic polymer coatings for cockpit windows. The objective was to identify alternative solutions to reduce contamination and icing while taking real aeronautical operating constraints into account.",
    "projects.coatingApproaches": "Several strategies were examined: hierarchical structures, nanoparticle incorporation, soft lithography and polymer nanocomposite formulations. One approach considered the combination of PDMS and SiO₂, with dip-coating or spray-deposition methods.",
    "projects.coatingOutlook": "The study considered the feasibility of moving from laboratory scale to a pilot process and potentially to industrial production. 3D printing, material selection using CES EduPack and life-cycle assessment were also considered.",
    "projects.coatingStatus": "Literature review and proposed development strategies; no finalized coating or industrialized process is claimed.",

    "projects.microTitle": "Thin-film deposition by vacuum evaporation",
    "projects.microSummary": "Cleanroom practical work involving thin-film deposition processes using vacuum evaporation.",

    "projects.pvTitle": "Literature review of photovoltaic technologies",
    "projects.pvSummary": "Analysis of photovoltaic cell technologies, their performance and research directions aimed at improving efficiency and durability.",
    "projects.pvContext": "The study compared wafer-based technology, which has a significant market presence, with thin-film technologies. The latter may rely on less energy-intensive processes, although their efficiency remains an important development challenge.",
    "projects.pvApproaches": "The literature review covered thermal management of photovoltaic cells, transparent coatings with antireflective, self-cleaning and anti-icing properties, and tandem cells combining several materials to overcome the efficiency limitations of conventional technologies.",
    "projects.pvOutlook": "Recycling routes were also considered, including mechanical grinding, chemical or thermal delamination and the recovery of valuable materials such as silicon.",

    "projects.inProgress": "PERSONAL PROJECT · IN PROGRESS",
    "projects.portfolioTitle": "Design and development of this portfolio",
    "projects.portfolioSummary": "Creation of a personal digital space to organize and showcase my scientific and professional background.",
    "projects.financeTitle": "Stock portfolio management application",
    "projects.financeSummary": "Development of an application to monitor and analyse an investment portfolio, centralizing financial data and monitoring indicators.",

    "education.eyebrow": "EDUCATION",
    "education.heading": "A multidisciplinary<br><em>scientific foundation.</em>",
    "education.degree1": "PhD in Materials Chemistry",
    "education.detail1": "Development of Al–N–H materials for chemical hydrogen storage.",
    "education.degree2": "Master's Degree in Chemistry and Materials Science",
    "education.detail2": "Materials, additive manufacturing, composites, membranes and foams.",
    "education.degree3": "Bachelor's Degree in Chemistry",
    "education.detail3": "General education in chemistry.",

    "publications.eyebrow": "SCIENTIFIC OUTPUT",
    "publications.heading": "Sharing and<br><em>communicating results.</em>",
    "publications.intro": "Three publications in the International Journal of Hydrogen Energy on Al–N–H materials derived from ammonia alane.",
    "publications.review": "REVIEW ARTICLE",
    "publications.article": "RESEARCH ARTICLE",
    "publications.paper2": "Research article resulting from the collaboration with CEA Saclay",
    "publications.paper3": "Research article resulting from the collaboration with CEA Saclay",
    "publications.note": "Full bibliographic references will be added after verification of the editorial metadata.",

    "interests.eyebrow": "BEYOND THE LABORATORY",
    "interests.heading": "A curiosity that<br><em>extends beyond science.</em>",
    "interests.sport": "Sports",
    "interests.science": "Science",
    "interests.astronomy": "Astronomy",
    "interests.watch": "Scientific monitoring",
    "interests.reading": "Reading",
    "interests.genres": "Philosophy · Fantasy · Science fiction · Personal development",

    "contact.eyebrow": "CONTACT",
    "contact.heading": "Let's build<br><em>what comes next.</em>",
    "contact.intro": "I welcome conversations about scientific projects, development and research and development. I would be glad to discuss new challenges and potential collaborations.",
    "contact.email": "Send me an email",
    "contact.footer": "Professional portfolio · 2026",
    "contact.top": "Back to top ↑"
  }
};


/* =========================================================
   TRADUCTION ET MÉMORISATION DE LA LANGUE
========================================================= */

const languageButton = document.getElementById("language-switch");

const originalFrench = new Map();

document.querySelectorAll("[data-i18n]").forEach(element => {
  originalFrench.set(element, {
    type: "text",
    value: element.textContent
  });
});

document.querySelectorAll("[data-i18n-html]").forEach(element => {
  originalFrench.set(element, {
    type: "html",
    value: element.innerHTML
  });
});

function getSavedLanguage() {
  try {
    return localStorage.getItem("portfolio-language") || "fr";
  } catch {
    return "fr";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("portfolio-language", language);
  } catch {
    // Le site reste fonctionnel si le stockage local est indisponible.
  }
}

function setLanguage(language) {
  const selectedLanguage = language === "en" ? "en" : "fr";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const original = originalFrench.get(element);

    if (selectedLanguage === "en" && dictionary[key]) {
      element.textContent = dictionary[key];
    } else if (original) {
      element.textContent = original.value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    const key = element.dataset.i18nHtml;
    const original = originalFrench.get(element);

    if (selectedLanguage === "en" && dictionary[key]) {
      element.innerHTML = dictionary[key];
    } else if (original) {
      element.innerHTML = original.value;
    }
  });

  languageButton.textContent = selectedLanguage === "fr" ? "EN" : "FR";
  languageButton.setAttribute(
    "aria-label",
    selectedLanguage === "fr" ? "Switch to English" : "Passer en français"
  );

  saveLanguage(selectedLanguage);
}

setLanguage(getSavedLanguage());

languageButton.addEventListener("click", () => {
  const nextLanguage =
    document.documentElement.lang === "fr" ? "en" : "fr";

  setLanguage(nextLanguage);
});


/* =========================================================
   COMPÉTENCES : INDICATEURS CIRCULAIRES
========================================================= */

const skillLevels = {
  "synthesis-ceramic": 5,
  "synthesis-solvothermal": 5,
  "lewis": 5,
  "metathesis": 5,
  "milling": 5,
  "protocols": 5,
  "inert": 5,

  "nmr-solid": 5,
  "nmr-mas": 5,
  "cpmas": 5,
  "mqmas": 4,
  "nmr-liquid": 4,
  "hetcor": 3,
  "dmfit": 5,
  "topspin": 3,

  "ftir": 5,
  "xps": 5,
  "raman": 5,
  "uv": 5,

  "xrd": 4,
  "sem": 4,

  "tga": 5,
  "dsc": 4,
  "gcms": 4,

  "bet": 4,
  "pct": 4,
  "gas": 5,

  "origin": 5,
  "omnic": 5,
  "office": 5
};

function renderSkillIndicators() {
  document.querySelectorAll("[data-skill]").forEach(element => {
    const skillId = element.dataset.skill;
    const level = skillLevels[skillId];

    if (!level) return;

    const dotContainer = element.querySelector(".skill-dots");
    if (!dotContainer) return;

    dotContainer.replaceChildren();

    for (let i = 1; i <= 5; i++) {
      const dot = document.createElement("span");
      dot.className = "skill-dot";

      if (i <= level) {
        dot.classList.add("filled");
      }

      dot.setAttribute("aria-hidden", "true");
      dotContainer.appendChild(dot);
    }

    dotContainer.setAttribute(
      "aria-label",
      `${level} sur 5`
    );

    element.setAttribute(
      "aria-label",
      `${element.querySelector("span:first-child").textContent} : ${level} sur 5`
    );
  });
}

renderSkillIndicators();


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Ouvrir le menu" : "Fermer le menu"
  );

  mainNav.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});


/* =========================================================
   HEADER AU DÉFILEMENT
========================================================= */

const header = document.querySelector(".site-header");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();


/* =========================================================
   NAVIGATION ACTIVE
========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      );
    });
  });
}, {
  rootMargin: "-30% 0px -60% 0px",
  threshold: 0
});

sections.forEach(section => sectionObserver.observe(section));


/* =========================================================
   APPARITION DES ÉLÉMENTS AU DÉFILEMENT
========================================================= */

const revealElements = document.querySelectorAll(".reveal");
const timelineItems = document.querySelectorAll(".timeline-item");

const motionPreference = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

if ("IntersectionObserver" in window && !motionPreference.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(element => revealObserver.observe(element));

  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  timelineItems.forEach(item => timelineObserver.observe(item));
} else {
  revealElements.forEach(element => element.classList.add("is-visible"));
  timelineItems.forEach(item => item.classList.add("is-visible"));
}


/* =========================================================
   PROGRESSION DE LA FRISE CHRONOLOGIQUE
========================================================= */

const timeline = document.querySelector(".timeline");

if (timeline) {
  const progressLine = document.createElement("span");
  progressLine.className = "timeline-progress";
  progressLine.setAttribute("aria-hidden", "true");
  timeline.prepend(progressLine);

  let timelineFrame = null;

  function updateTimelineProgress() {
    if (motionPreference.matches) {
      progressLine.style.height = "0";
      return;
    }

    const rect = timeline.getBoundingClientRect();
    const viewportPosition = window.innerHeight * 0.72;

    const totalHeight = timeline.offsetHeight;
    const passedHeight = Math.max(
      0,
      Math.min(totalHeight, viewportPosition - rect.top)
    );

    progressLine.style.height = `${passedHeight}px`;
  }

  function requestTimelineUpdate() {
    if (timelineFrame !== null) return;

    timelineFrame = window.requestAnimationFrame(() => {
      updateTimelineProgress();
      timelineFrame = null;
    });
  }

  window.addEventListener("scroll", requestTimelineUpdate, {
    passive: true
  });

  window.addEventListener("resize", requestTimelineUpdate);

  updateTimelineProgress();
}


/* =========================================================
   DÉTAILS DES PROJETS
========================================================= */

document.querySelectorAll(".project-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const target = document.getElementById(targetId);

    if (!target) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    target.hidden = isExpanded;
  });
});


/* =========================================================
   MISE À JOUR DE L'ANNÉE DU PIED DE PAGE
========================================================= */

const currentYear = new Date().getFullYear();

document.querySelectorAll(".contact-footer").forEach(footer => {
  const yearLabel = footer.querySelector("[data-i18n='contact.footer']");

  if (yearLabel) {
    const language = document.documentElement.lang;

    yearLabel.textContent = language === "en"
      ? `Professional portfolio · ${currentYear}`
      : `Portfolio professionnel · ${currentYear}`;
  }
});
