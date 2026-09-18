# WALI Airconditioning and Electricals Limited Website

Official website source for WALI Airconditioning and Electricals Limited, Port Moresby, Papua New Guinea.

## Website pages

- Home
- About
- Services
- Technical Experience
- Contact and Quotation
- Netlify form confirmation
- Branded 404 page

## Local preview

```bash
npm run dev
```

Open `http://localhost:4173`.

## Verification

```bash
npm test
```

## Netlify deployment

The site is static and requires no build framework.

- Build command: leave empty or use `npm test`
- Publish directory: `public`
- Forms: Netlify Forms is configured through the quotation form in `public/contact/index.html`

When the `waliae.com.pg` domain is ready, add it under the Netlify site's domain settings without changing the website source.

