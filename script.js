
:root {
  --bg: #00171F;
  --bg-soft: #09252C;
  --text: #FEE9E1;
  --gold: #EFC88B;
  --gold-strong: #E5B25D;
  --muted: #8C93A8;
  --line: rgba(254, 233, 225, 0.16);
  --font-heading: "Manrope", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --container: 1180px;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
}

body.menu-open { overflow: hidden; }

a { color: inherit; text-decoration: none; }
button { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }

::selection {
  color: var(--bg);
  background: var(--gold);
}

.page-shell { overflow: clip; }

.section-wrap {
  width: min(var(--container), calc(100% - 80px));
  margin-inline: auto;
}

/* HEADER */

.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  padding: 0 max(40px, calc((100vw - var(--container)) / 2));
  border-bottom: 1px solid transparent;
  background: rgba(0, 23, 31, 0.92);
  backdrop-filter: blur(16px);
  transition: border-color .3s, height .3s;
}

.site-header.scrolled {
  height: 70px;
  border-color: var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--gold);
  color: var(--gold);
  font: 700 11px var(--font-heading);
  letter-spacing: -1px;
}

.brand-name {
  font: 700 11px var(--font-heading);
  letter-spacing: .13em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2vw, 28px);
}

.main-nav a {
  position: relative;
  color: var(--muted);
  font-size: 11px;
  transition: color .25s;
}

.main-nav a::after {
  position: absolute;
  content: "";
  height: 1px;
  left: 0;
  right: 100%;
  bottom: -7px;
  background: var(--gold);
  transition: right .25s;
}

.main-nav a:hover,
.main-nav a.active { color: var(--text); }

.main-nav a.active::after,
.main-nav a:hover::after { right: 0; }

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.language-switch {
  padding: 5px 0;
  border: 0;
  background: none;
  color: var(--gold);
  cursor: pointer;
  font: 700 11px var(--font-heading);
  letter-spacing: .1em;
}

.header-contact {
  padding: 9px 14px;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-size: 11px;
  transition: background .25s, color .25s;
}

.header-contact:hover {
  color: var(--bg);
  background: var(--gold);
}

.header-contact span { margin-left: 8px; }

.menu-toggle {
  display: none;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  background: transparent;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 15px;
  height: 1px;
  margin: 5px auto;
  background: var(--text);
  transition: transform .25s;
}

.menu-toggle[aria-expanded="true"] span:first-child {
  transform: translateY(3px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] span:last-child {
  transform: translateY(-3px) rotate(-45deg);
}

/* HERO */

.hero {
  min-height: 760px;
  padding-top: 155px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-topline,
.hero-index {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.eyebrow {
  margin: 0;
  color: var(--gold-strong);
  font: 700 10px var(--font-heading);
  letter-spacing: .2em;
  line-height: 1.6;
}

.availability {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 11px;
}

.availability-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold-strong);
  box-shadow: 0 0 12px rgba(229, 178, 93, .5);
}

.hero-content {
  margin-top: 90px;
  margin-bottom: 75px;
}

.hero-kicker {
  margin: 0 0 24px;
  color: var(--muted);
  font-size: 13px;
  letter-spacing: .04em;
}

.hero h1 {
  max-width: 1000px;
  margin: 0;
  font: 500 clamp(54px, 8vw, 108px)/1.08 var(--font-heading);
  letter-spacing: -.075em;
}

h1 em, h2 em {
  color: var(--gold);
  font-style: normal;
  font-weight: 400;
}

.hero-bottom {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-top: 55px;
}

.hero-intro {
  max-width: 490px;
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
}

.round-link {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  color: var(--gold);
  font-size: 21px;
  transition: color .25s, background .25s, transform .25s;
}

.round-link:hover {
  color: var(--bg);
  background: var(--gold);
  transform: translateY(4px);
}

.hero-index {
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font: 10px var(--font-heading);
  letter-spacing: .12em;
}

/* SECTIONS */

.content-section {
  padding-top: 145px;
  padding-bottom: 125px;
  border-top: 1px solid var(--line);
}

.section-heading {
  position: relative;
  margin-bottom: 75px;
}

.section-number {
  position: absolute;
  top: 0;
  right: 0;
  color: rgba(239, 200, 139, .28);
  font: 400 52px var(--font-heading);
  letter-spacing: -.08em;
}

.section-heading .eyebrow { margin-bottom: 24px; }

.section-heading h2,
.contact-content h2 {
  margin: 0;
  font: 500 clamp(38px, 5.4vw, 66px)/1.17 var(--font-heading);
  letter-spacing: -.065em;
}

.section-intro {
  max-width: 550px;
  margin: 27px 0 0;
  color: var(--muted);
  line-height: 1.9;
}

/* ABOUT */

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
}

.about-lead p {
  margin: 0;
  color: var(--text);
  font: 500 23px/1.65 var(--font-heading);
  letter-spacing: -.035em;
}

.about-detail p {
  margin: 0 0 19px;
  color: var(--muted);
  line-height: 1.95;
}

.about-detail .about-emphasis {
  color: var(--gold);
  font-size: 16px;
}

.principles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 90px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.principles div {
  padding: 23px 20px 23px 0;
}

.principles div + div {
  padding-left: 22px;
  border-left: 1px solid var(--line);
}

.principles span {
  color: var(--gold-strong);
  font: 10px var(--font-heading);
}

.principles p {
  margin: 12px 0 0;
  font: 600 13px var(--font-heading);
}

/* TIMELINE */

.timeline {
  border-top: 1px solid var(--line);
}

.timeline-item {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 55px;
  padding: 48px 0 55px;
  border-bottom: 1px solid var(--line);
}

.timeline-date {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--gold);
  font: 600 12px var(--font-heading);
  letter-spacing: .04em;
}

.timeline-type {
  color: var(--muted);
  font-size: 9px;
  letter-spacing: .16em;
}

.timeline-content h3,
.education-item h3 {
  margin: 0;
  font: 600 22px var(--font-heading);
  letter-spacing: -.04em;
}

.timeline-place {
  margin: 6px 0 20px;
  color: var(--gold);
  font-size: 12px;
}

.timeline-content > p:not(.timeline-place) {
  max-width: 700px;
  color: var(--muted);
}

.timeline-content ul {
  padding-left: 18px;
  color: var(--muted);
  font-size: 13px;
}

.timeline-content li { padding: 4px 0; }
.timeline-content li::marker { color: var(--gold-strong); }

.tag-list, .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.tag-list span, .skill-tags span {
  padding: 6px 10px;
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 10px;
}

/* SKILLS */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.skill-block {
  min-height: 265px;
  padding: 32px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transition: background .25s;
}

.skill-block:hover { background: var(--bg-soft); }

.skill-index {
  color: var(--gold-strong);
  font: 700 9px var(--font-heading);
  letter-spacing: .15em;
}

.skill-block h3 {
  margin: 25px 0 10px;
  font: 600 21px var(--font-heading);
  letter-spacing: -.04em;
}

.skill-block > p {
  max-width: 430px;
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.skill-tags { margin-top: 22px; }
.skill-tags span { padding: 5px 8px; }

.skills-note,
.publication-note {
  margin-top: 25px;
  color: var(--muted);
  font-size: 11px;
}

/* PROJECTS */

.project-list { border-top: 1px solid var(--line); }

.project-item {
  display: grid;
  grid-template-columns: 70px 1fr 30px;
  gap: 24px;
  padding: 38px 0;
  border-bottom: 1px solid var(--line);
  transition: padding .25s;
}

.project-item:hover { padding-left: 10px; }

.project-number {
  color: var(--gold-strong);
  font: 12px var(--font-heading);
}

.project-category {
  margin: 0 0 13px;
  color: var(--gold-strong);
  font: 700 9px var(--font-heading);
  letter-spacing: .15em;
}

.project-main h3 {
  max-width: 720px;
  margin: 0;
  font: 600 24px/1.4 var(--font-heading);
  letter-spacing: -.045em;
}

.project-main > p:not(.project-category) {
  max-width: 730px;
  color: var(--muted);
  font-size: 13px;
}

.project-arrow {
  color: var(--gold);
  font-size: 20px;
}

.text-link {
  padding: 8px 0;
  border: 0;
  background: transparent;
  color: var(--gold);
  cursor: pointer;
  font-size: 11px;
}

.text-link span:last-child {
  display: inline-block;
  margin-left: 8px;
  transition: transform .25s;
}

.text-link[aria-expanded="true"] span:last-child { transform: rotate(45deg); }

.project-detail {
  max-width: 730px;
  padding: 10px 0 5px;
  color: var(--muted);
  font-size: 13px;
}

.exploration-note {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 24px;
  margin-top: 80px;
  padding: 35px;
  background: var(--bg-soft);
}

.exploration-symbol {
  color: var(--gold);
  font: 32px var(--font-heading);
}

.exploration-note .eyebrow { margin-bottom: 12px; }

.exploration-note h3 {
  margin: 0;
  font: 600 24px var(--font-heading);
}

.exploration-note p:last-child {
  max-width: 750px;
  margin-bottom: 0;
  color: var(--muted);
  font-size: 13px;
}

/* EDUCATION */

.education-list { border-top: 1px solid var(--line); }

.education-item {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 55px;
  padding: 32px 0;
  border-bottom: 1px solid var(--line);
}

.education-date {
  color: var(--gold);
  font: 600 12px var(--font-heading);
}

.education-item p {
  margin: 5px 0 9px;
  color: var(--gold);
  font-size: 12px;
}

.education-item div > span {
  color: var(--muted);
  font-size: 12px;
}

/* PUBLICATIONS */

.publication-list { border-top: 1px solid var(--line); }

.publication-item {
  display: grid;
  grid-template-columns: 90px 1fr 30px;
  gap: 24px;
  align-items: start;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  transition: padding .25s;
}

.publication-item:hover { padding-left: 10px; }

.publication-year {
  color: var(--gold);
  font: 600 13px var(--font-heading);
}

.publication-type {
  color: var(--gold-strong);
  font: 700 9px var(--font-heading);
  letter-spacing: .15em;
}

.publication-item h3 {
  max-width: 750px;
  margin: 10px 0 6px;
  font: 600 17px/1.5 var(--font-heading);
}

.publication-item p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
}

.publication-arrow {
  color: var(--gold);
  font-size: 19px;
}

/* CONTACT */

.contact-section {
  min-height: 600px;
  padding-top: 120px;
  padding-bottom: 30px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-content { max-width: 850px; }

.contact-content .eyebrow { margin-bottom: 25px; }

.contact-content h2 { font-size: clamp(45px, 7vw, 85px); }

.contact-content > p:not(.eyebrow) {
  max-width: 540px;
  margin: 28px 0 35px;
  color: var(--muted);
}

.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 380px;
  padding: 15px 0;
  border-bottom: 1px solid var(--line);
  color: var(--text);
  font: 500 14px var(--font-heading);
  transition: color .2s;
}

.contact-link:hover { color: var(--gold); }

.contact-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 100px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 10px;
  letter-spacing: .08em;
}

.contact-footer a:hover { color: var(--gold); }

/* REVEAL */

.content-section,
.contact-content {
  animation: appear .7s ease both;
}

@keyframes appear {
  from { opacity: .4; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

/* RESPONSIVE */

@media (max-width: 1050px) {
  .site-header { padding-inline: 30px; }
  .main-nav { gap: 14px; }
  .main-nav a { font-size: 10px; }
  .header-contact { display: none; }
  .section-wrap { width: calc(100% - 60px); }
}

@media (max-width: 760px) {
  html { scroll-padding-top: 78px; }

  .site-header {
    height: 70px;
    padding-inline: 22px;
  }

  .site-header.scrolled { height: 64px; }

  .brand-name { font-size: 10px; }

  .menu-toggle {
    display: block;
    order: 3;
  }

  .header-actions {
    margin-left: auto;
    margin-right: 16px;
  }

  .main-nav {
    position: fixed;
    inset: 70px 0 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0;
    padding: 30px 35px 70px;
    background: var(--bg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity .25s, visibility .25s, transform .25s;
  }

  .main-nav.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .main-nav a {
    padding: 15px 0;
    border-bottom: 1px solid var(--line);
    color: var(--text);
    font: 500 21px var(--font-heading);
  }

  .main-nav a::after { display: none; }

  .section-wrap { width: calc(100% - 44px); }

  .hero {
    min-height: 690px;
    padding-top: 120px;
    padding-bottom: 25px;
  }

  .hero-topline {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .hero-content {
    margin-top: 75px;
    margin-bottom: 55px;
  }

  .hero h1 {
    font-size: clamp(49px, 12vw, 76px);
  }

  .hero-bottom { margin-top: 35px; }
  .hero-intro { font-size: 13px; }
  .round-link { flex-shrink: 0; width: 44px; height: 44px; }

  .hero-index { font-size: 8px; }

  .content-section {
    padding-top: 95px;
    padding-bottom: 85px;
  }

  .section-heading { margin-bottom: 48px; }
  .section-heading h2 { font-size: clamp(38px, 9vw, 55px); }
  .section-number { font-size: 36px; }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .about-lead p { font-size: 20px; }

  .principles {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 55px;
  }

  .principles div {
    padding: 18px 10px 18px 0;
  }

  .principles div + div { padding-left: 12px; }
  .principles div:nth-child(3) { border-left: 0; }
  .principles div:nth-child(n+3) { border-top: 1px solid var(--line); }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 32px 0;
  }

  .timeline-date {
    flex-direction: row;
    justify-content: space-between;
  }

  .timeline-content h3 { font-size: 20px; }

  .skills-grid { grid-template-columns: 1fr; }
  .skill-block { min-height: auto; padding: 25px 22px; }

  .project-item {
    grid-template-columns: 30px 1fr 20px;
    gap: 12px;
    padding: 30px 0;
  }

  .project-main h3 { font-size: 20px; }
  .exploration-note { grid-template-columns: 35px 1fr; padding: 24px 18px; }
  .exploration-note h3 { font-size: 20px; }

  .education-item {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 25px 0;
  }

  .publication-item {
    grid-template-columns: 52px 1fr 18px;
    gap: 12px;
    padding: 25px 0;
  }

  .publication-item h3 { font-size: 14px; }

  .contact-section {
    min-height: 570px;
    padding-top: 90px;
  }

  .contact-content h2 { font-size: clamp(44px, 11vw, 68px); }

  .contact-footer {
    flex-wrap: wrap;
    margin-top: 70px;
    font-size: 9px;
  }
}

@media (max-width: 380px) {
  .hero h1 { font-size: 46px; }
  .hero-index span:last-child { max-width: 150px; text-align: right; }
  .section-number { font-size: 30px; }
}

/* ACCESSIBILITÉ */

:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
