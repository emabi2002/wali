import { access, readFile } from "node:fs/promises";
import { extname, resolve } from "node:path";

const root = resolve("public");
const required = [
  "index.html",
  "about/index.html",
  "services/index.html",
  "experience/index.html",
  "contact/index.html",
  "thanks/index.html",
  "404.html",
  "assets/styles.css",
  "assets/site.js",
  "assets/wali-logo.png",
  "favicon.svg"
];

for (const file of required) await access(resolve(root, file));

const css = await readFile(resolve(root, "assets/styles.css"), "utf8");
for (const token of ["--navy", "--blue", "--orange", "--surface"]) {
  if (!css.includes(token)) throw new Error(`Missing design token ${token}`);
}

const home = await readFile(resolve(root, "index.html"), "utf8");
for (const value of [
  "WALI Airconditioning and Electricals Limited",
  "Request a Quote",
  "tel:+67572115598",
  "wa.me/67572115598",
  'id="services"',
  'id="why-wali"'
]) {
  if (!home.includes(value)) throw new Error(`Homepage missing ${value}`);
}

const about = await readFile(resolve(root, "about/index.html"), "utf8");
const services = await readFile(resolve(root, "services/index.html"), "utf8");
for (const value of ["Emmanuel Mabi", "Juain Konena", "Vision", "Mission"]) {
  if (!about.includes(value)) throw new Error(`About page missing ${value}`);
}
for (const value of ["VRV and VRF", "Building Management Systems", "Preventive Maintenance", "Electrical Installation"]) {
  if (!services.includes(value)) throw new Error(`Services page missing ${value}`);
}

const experience = await readFile(resolve(root, "experience/index.html"), "utf8");
for (const employer of [
  "SPAC Services Limited",
  "South Pacific Air Conditioning Limited",
  "PSG Facility Services Limited",
  "RD Tuna Canners Limited"
]) {
  if (!experience.includes(employer)) throw new Error(`Experience page missing ${employer}`);
}
if (!experience.includes("previous employers")) {
  throw new Error("Experience page must distinguish Juain's employment from WALI contracts");
}

const contact = await readFile(resolve(root, "contact/index.html"), "utf8");
for (const value of [
  'name="quotation"',
  'data-netlify="true"',
  'method="POST"',
  'action="/thanks/"',
  'name="full-name"',
  'name="phone"',
  'name="service"',
  'name="location"',
  'name="job-description"'
]) {
  if (!contact.includes(value)) throw new Error(`Quotation form missing ${value}`);
}

const htmlFiles = required.filter((name) => name.endsWith(".html"));
for (const file of htmlFiles) {
  const html = await readFile(resolve(root, file), "utf8");
  if (!/<title>[^<]+<\/title>/.test(html)) throw new Error(`${file} lacks a title`);
  if (!/name="description"/.test(html)) throw new Error(`${file} lacks a description`);
  if (!/name="viewport"/.test(html)) throw new Error(`${file} lacks responsive viewport metadata`);
  if (!/<html lang="en">/.test(html)) throw new Error(`${file} lacks document language`);
  const h1Count = (html.match(/<h1[ >]/g) || []).length;
  if (h1Count !== 1) throw new Error(`${file} must contain exactly one h1, found ${h1Count}`);
}

const notFound = await readFile(resolve(root, "404.html"), "utf8");
if (!notFound.includes("Page not found") || !notFound.includes("Return home")) {
  throw new Error("404 page lacks recovery content");
}

const netlify = await readFile(resolve("netlify.toml"), "utf8");
if (!netlify.includes('publish = "public"') || !netlify.includes("X-Content-Type-Options")) {
  throw new Error("Netlify configuration is incomplete");
}

for (const file of htmlFiles) {
  const html = await readFile(resolve(root, file), "utf8");
  const references = [...html.matchAll(/(?:href|src)="(\/[^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    const clean = reference.split("#")[0].split("?")[0];
    if (!clean || clean === "/") continue;
    if (clean.startsWith("//")) continue;
    const target = extname(clean) ? clean.slice(1) : `${clean.slice(1).replace(/\/$/, "")}/index.html`;
    await access(resolve(root, target));
  }
}

console.log("Static site checks passed");
