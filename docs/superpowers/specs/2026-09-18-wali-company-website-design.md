# WALI Company Website Design

## Purpose

Build a professional public website for WALI Airconditioning and Electricals Limited, hosted on Netlify at `waliace.com`.

The website must help residential, commercial, industrial and government customers understand WALI's services and contact the company. Requesting a quotation and contacting WALI directly by telephone or WhatsApp will have equal prominence.

## Brand and Visual Direction

The design will use the supplied WALI logo and its existing navy, electrical blue, orange and white palette. The visual character will be practical, trustworthy and technically capable. Typography will be clean and highly legible. Cooling airflow, electrical current and equipment-inspired details may be used as restrained background motifs.

The first release will be brand-led. It will not use generic photographs in a way that could imply they are WALI projects. The layout will support adding genuine project photographs later without structural changes.

## Information Architecture

### Home

The homepage will establish WALI's identity, summarise its air-conditioning and electrical capability and make the three primary actions immediately available:

- Request a quotation
- Call 7211 5598
- Contact WALI through WhatsApp on 7211 5598

The page will include a concise service overview, reasons to choose WALI, a brief technical-experience section and final contact call to action.

### About Us

The About page will include the company overview, mission, vision, operating values and directors. It will present Emmanuel Mabi and Juain Konena as directors and describe Juain's role as the technical lead. The wording will position WALI as a Papua New Guinea business without making unsupported ownership, licensing or certification claims.

### Services

The Services page will group and explain the following capabilities:

- Air-conditioning installation
- Preventive maintenance and servicing
- Fault diagnosis and repairs
- VRV and VRF systems
- Refrigeration, container freezer and cool-room controls
- Domestic, commercial and industrial electrical installation
- Motor, pump and star-delta controls
- Building Management Systems
- Chillers, chilled-water systems and air-handling units
- Testing, commissioning and service reporting

Each service section will provide enough information for a customer to identify the relevant capability and proceed to contact or quotation.

### Experience

The Experience page will explain that Juain gained professional experience through the following previous employers:

- SPAC Services Limited
- South Pacific Air Conditioning Limited
- PSG Facility Services Limited
- RD Tuna Canners Limited

The page will describe his employment periods, positions, technical exposure and selected qualifications. It will clearly distinguish Juain's previous employment from contracts completed by WALI.

### Contact and Quotation

The Contact page will include:

- Netlify-compatible quotation form
- Customer name
- Organisation name when applicable
- Telephone number
- Email address
- Service category
- Property or site location
- Description of required work
- Preferred contact method
- Direct telephone link
- WhatsApp link
- Email link
- Physical and postal addresses
- External map link for the Gordons address

The form will provide clear success and error states. Netlify will process submissions without a separate database.

## Shared Components

The website will include a consistent header, desktop navigation, mobile menu, footer, service call-to-action area, telephone action, WhatsApp action and quotation action. The current page will be identifiable in navigation. All interactive controls will be keyboard accessible and have visible focus states.

## Responsive Behaviour

The site will support mobile, tablet and desktop screens. Mobile layouts will prioritise short readable text, large touch targets and persistent access to Call, WhatsApp and Quote actions. Tables or structured experience information will transform into readable stacked records on narrow screens rather than requiring horizontal scrolling.

## Technical Architecture

The site will be a static, component-based frontend suitable for Netlify. It will not require a database, authentication or paid service. Routes will use stable, human-readable paths. Netlify configuration will support clean URLs, form handling and a custom domain later.

The project will include:

- Page-specific titles and descriptions
- Semantic HTML landmarks and heading hierarchy
- WALI favicon
- Accessible form labels and validation messaging
- Optimised supplied logo asset
- A not-found page
- Netlify configuration
- Production build output suitable for deployment

## Content Accuracy

The website will use facts drawn from the approved WALI company profile and Juain Konena's supplied CV. It will not claim that WALI performed work carried out during Juain's earlier employment. It will not invent project clients, licences, accreditations, response times, guarantees or completed contract values.

## Acceptance Criteria

The website will be complete when:

- All five pages and the not-found page are available.
- The logo and approved brand palette are applied consistently.
- Call, WhatsApp and quotation actions work on mobile and desktop.
- The quotation form is configured for Netlify Forms.
- Juain's industry exposure is accurate and clearly attributed.
- The full site is responsive and keyboard accessible.
- The production build completes successfully.
- Internal links and public contact links are verified.
- The site can be deployed to Netlify and assigned to `waliace.com` without code changes.
