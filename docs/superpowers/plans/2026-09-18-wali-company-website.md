# WALI Company Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, responsive five-page WALI Airconditioning and Electricals Limited website that is ready for Netlify deployment and a future `waliae.com.pg` custom domain.

**Architecture:** Use dependency-free static HTML, one shared CSS design system and one small JavaScript module for mobile navigation and form enhancements. Netlify will serve the public directory and process the quotation form, so no application server or database is required.

**Tech Stack:** HTML5, modern CSS, vanilla JavaScript, Netlify Forms, Node.js static verification scripts

**Spec:** `docs/superpowers/specs/2026-09-18-wali-company-website-design.md`

## Global Constraints

- Use the supplied WALI logo and navy, electrical blue, orange and white brand palette.
- Provide Home, About, Services, Experience, Contact and not-found pages.
- Give Request a Quote, Call and WhatsApp equal prominence.
- Use 7211 5598 for telephone and WhatsApp actions.
- Use `inquiries@waliae.com.pg` for email actions.
- Treat SPAC Services Limited, South Pacific Air Conditioning Limited, PSG Facility Services Limited and RD Tuna Canners Limited as Juain Konena's previous employers, not WALI clients.
- Do not invent licences, accreditations, completed WALI projects, response guarantees or contract values.
- Make every route responsive, keyboard accessible and usable without JavaScript except for the mobile-menu enhancement.
- Produce a Netlify-ready static public directory and preserve clean URLs.

---

## File Structure

- `public/index.html` - Homepage and primary conversion surface
- `public/about/index.html` - Company purpose, values and directors
- `public/services/index.html` - Detailed air-conditioning, refrigeration, electrical and BMS services
- `public/experience/index.html` - Juain Konena's employment exposure and qualifications
- `public/contact/index.html` - Contact details and Netlify quotation form
- `public/thanks/index.html` - Successful quotation-submission confirmation
- `public/404.html` - Branded not-found page
- `public/assets/styles.css` - Shared tokens, components, page layouts and responsive rules
- `public/assets/site.js` - Mobile navigation, current-year footer and client-side form enhancements
- `public/assets/wali-logo.png` - Supplied WALI brand mark
- `public/favicon.svg` - WALI-specific lighthouse and electrical favicon
- `netlify.toml` - Static publishing and security header configuration
- `tests/site-check.mjs` - Required routes, metadata, links, form and content verification
- `package.json` - Local preview and verification commands

---

### Task 1: Establish the Brand System and Test Harness

**Files:**
- Create: `package.json`
- Create: `tests/site-check.mjs`
- Create: `public/assets/styles.css`
- Create: `public/assets/site.js`
- Create: `public/assets/wali-logo.png`
- Create: `public/favicon.svg`

**Interfaces:**
- Consumes: Supplied WALI logo from the approved letterhead and company profile
- Produces: Shared `.site-header`, `.site-nav`, `.button`, `.service-card`, `.section`, `.site-footer` classes and the `data-menu-toggle` navigation contract used by every page

- [ ] **Step 1: Write the initial failing static verification script**

```js
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve("public");
const required = [
  "index.html", "about/index.html", "services/index.html",
  "experience/index.html", "contact/index.html", "thanks/index.html",
  "404.html", "assets/styles.css", "assets/site.js",
  "assets/wali-logo.png", "favicon.svg"
];

for (const file of required) await access(resolve(root, file));
const css = await readFile(resolve(root, "assets/styles.css"), "utf8");
for (const token of ["--navy", "--blue", "--orange", "--surface"]) {
  if (!css.includes(token)) throw new Error(`Missing design token ${token}`);
}
console.log("Static site checks passed");
```

- [ ] **Step 2: Run the check and verify that it fails**

Run: `node tests/site-check.mjs`

Expected: FAIL because the public site files do not yet exist.

- [ ] **Step 3: Add the project scripts and shared assets**

```json
{
  "name": "wali-company-website",
  "private": true,
  "scripts": {
    "dev": "npx --yes serve public -l 4173",
    "test": "node tests/site-check.mjs",
    "build": "node tests/site-check.mjs"
  }
}
```

Create the logo asset from the supplied WALI letterhead, a simple branded favicon, CSS tokens for the approved palette, reusable layout components and JavaScript that toggles `aria-expanded` on the mobile navigation button.

- [ ] **Step 4: Commit the foundation**

```bash
git add package.json tests public/assets public/favicon.svg
git commit -m "feat: establish WALI website foundation"
```

### Task 2: Build the Homepage

**Files:**
- Create: `public/index.html`
- Modify: `tests/site-check.mjs`

**Interfaces:**
- Consumes: Shared navigation, buttons, service cards and footer from Task 1
- Produces: Root route with `#services`, `#why-wali` and `#contact-actions` sections

- [ ] **Step 1: Extend the failing test for homepage requirements**

```js
const home = await readFile(resolve(root, "index.html"), "utf8");
for (const value of [
  "WALI Airconditioning and Electricals Limited",
  "Request a Quote", "tel:+67572115598",
  "wa.me/67572115598", "#services", "#why-wali"
]) {
  if (!home.includes(value)) throw new Error(`Homepage missing ${value}`);
}
```

- [ ] **Step 2: Run the test and verify the new assertions fail**

Run: `node tests/site-check.mjs`

Expected: FAIL with a homepage content error.

- [ ] **Step 3: Implement the complete homepage**

Create semantic header, main and footer landmarks. Include the WALI value proposition, equal Quote, Call and WhatsApp actions, eight concise service cards, why-choose-WALI content, technical-experience summary and final contact action. Use product-specific copy from the approved profile.

- [ ] **Step 4: Run the test and inspect the homepage at mobile and desktop widths**

Run: `node tests/site-check.mjs`

Expected: PASS for all homepage assertions.

- [ ] **Step 5: Commit the homepage**

```bash
git add public/index.html tests/site-check.mjs
git commit -m "feat: build WALI homepage"
```

### Task 3: Build About and Services Pages

**Files:**
- Create: `public/about/index.html`
- Create: `public/services/index.html`
- Modify: `tests/site-check.mjs`

**Interfaces:**
- Consumes: Shared page shell and cards from Task 1
- Produces: `/about/` and `/services/` routes linked from all site navigation

- [ ] **Step 1: Add failing page-content tests**

```js
const about = await readFile(resolve(root, "about/index.html"), "utf8");
const services = await readFile(resolve(root, "services/index.html"), "utf8");
for (const value of ["Emmanuel Mabi", "Juain Konena", "Vision", "Mission"]) {
  if (!about.includes(value)) throw new Error(`About page missing ${value}`);
}
for (const value of ["VRV and VRF", "Building Management Systems", "Preventive Maintenance", "Electrical Installation"]) {
  if (!services.includes(value)) throw new Error(`Services page missing ${value}`);
}
```

- [ ] **Step 2: Verify the tests fail before implementation**

Run: `node tests/site-check.mjs`

Expected: FAIL on the first missing About or Services requirement.

- [ ] **Step 3: Implement About and Services**

Build the About page with company overview, purpose, vision, mission, values and director profiles. Build the Services page with grouped HVAC, refrigeration, electrical, controls and BMS capabilities plus clear quotation calls to action.

- [ ] **Step 4: Run static checks**

Run: `node tests/site-check.mjs`

Expected: PASS.

- [ ] **Step 5: Commit both pages**

```bash
git add public/about public/services tests/site-check.mjs
git commit -m "feat: add about and services pages"
```

### Task 4: Build the Experience Page

**Files:**
- Create: `public/experience/index.html`
- Modify: `tests/site-check.mjs`

**Interfaces:**
- Consumes: Approved CV facts and responsive record-card styles
- Produces: `/experience/` route with employer attribution and qualifications

- [ ] **Step 1: Add attribution tests that prevent misleading claims**

```js
const experience = await readFile(resolve(root, "experience/index.html"), "utf8");
for (const employer of [
  "SPAC Services Limited", "South Pacific Air Conditioning Limited",
  "PSG Facility Services Limited", "RD Tuna Canners Limited"
]) {
  if (!experience.includes(employer)) throw new Error(`Experience page missing ${employer}`);
}
if (!experience.includes("previous employers")) {
  throw new Error("Experience page must distinguish Juain's employment from WALI contracts");
}
```

- [ ] **Step 2: Verify the tests fail**

Run: `node tests/site-check.mjs`

Expected: FAIL because the Experience page is not implemented.

- [ ] **Step 3: Implement the employment timeline and qualifications**

Present each employer, period, position and technical exposure as responsive records. Add selected training from 2011 to 2025 and a clear introductory statement that these organisations were Juain's previous employers.

- [ ] **Step 4: Run static checks**

Run: `node tests/site-check.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the Experience page**

```bash
git add public/experience tests/site-check.mjs
git commit -m "feat: present technical experience accurately"
```

### Task 5: Build Contact and Netlify Quotation Flow

**Files:**
- Create: `public/contact/index.html`
- Create: `public/thanks/index.html`
- Modify: `public/assets/site.js`
- Modify: `tests/site-check.mjs`

**Interfaces:**
- Consumes: WALI telephone, WhatsApp, email and address details
- Produces: Netlify form named `quotation`, POST submission to `/thanks/`, direct Call and WhatsApp links

- [ ] **Step 1: Add failing form-contract tests**

```js
const contact = await readFile(resolve(root, "contact/index.html"), "utf8");
for (const value of [
  'name="quotation"', "data-netlify=\"true\"", 'method="POST"',
  'action="/thanks/"', 'name="full-name"', 'name="phone"',
  'name="service"', 'name="location"', 'name="job-description"'
]) {
  if (!contact.includes(value)) throw new Error(`Quotation form missing ${value}`);
}
```

- [ ] **Step 2: Verify the form test fails**

Run: `node tests/site-check.mjs`

Expected: FAIL because the Contact page is absent.

- [ ] **Step 3: Implement accessible quotation and contact pages**

Create labelled fields, required indicators, service selection, preferred contact method, privacy explanation and submission button. Include `form-name`, a Netlify honeypot and a useful success page. Keep telephone, WhatsApp and email actions equally visible beside the form.

- [ ] **Step 4: Run static checks and keyboard-test the form**

Run: `node tests/site-check.mjs`

Expected: PASS, with logical tab order and visible focus on every control.

- [ ] **Step 5: Commit the quotation flow**

```bash
git add public/contact public/thanks public/assets/site.js tests/site-check.mjs
git commit -m "feat: add Netlify quotation flow"
```

### Task 6: Complete Hosting, Metadata and Final Verification

**Files:**
- Create: `public/404.html`
- Create: `netlify.toml`
- Modify: all HTML pages
- Modify: `tests/site-check.mjs`

**Interfaces:**
- Consumes: All completed public routes
- Produces: Deployable `public` directory with metadata, error page, security headers and clean URLs

- [ ] **Step 1: Add final metadata and link-integrity checks**

```js
for (const file of required.filter((name) => name.endsWith(".html"))) {
  const html = await readFile(resolve(root, file), "utf8");
  if (!/<title>[^<]+<\/title>/.test(html)) throw new Error(`${file} lacks a title`);
  if (!/name="description"/.test(html)) throw new Error(`${file} lacks a description`);
  if (!html.includes("assets/styles.css") && file !== "404.html") {
    throw new Error(`${file} lacks shared CSS`);
  }
}
```

- [ ] **Step 2: Verify the final checks fail before completion**

Run: `node tests/site-check.mjs`

Expected: FAIL on missing metadata, 404 content or configuration.

- [ ] **Step 3: Add not-found page, metadata and Netlify configuration**

```toml
[build]
  publish = "public"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
```

Add unique titles and descriptions, canonical-ready relative routes, navigation labels, the branded 404 page and security headers.

- [ ] **Step 4: Run all verification**

Run: `npm test`

Expected: `Static site checks passed`.

- [ ] **Step 5: Preview every route at mobile and desktop widths**

Verify no horizontal overflow, clipped text, broken links or inaccessible controls on `/`, `/about/`, `/services/`, `/experience/`, `/contact/`, `/thanks/` and `/404.html`.

- [ ] **Step 6: Commit the deployable website**

```bash
git add public netlify.toml tests package.json
git commit -m "feat: complete Netlify-ready WALI website"
```

