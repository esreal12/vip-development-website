# Villas Tres Hermanas Experience Design

## Goal

Turn the existing Featured Project section into a complete Villas Tres Hermanas editorial experience that communicates the VIP construction standard, presents optimized project imagery, and converts interest into clearly tagged email leads.

## Scope

### Included

- Replace the Featured Project hero/slider images and gallery with optimized versions of the supplied `0-Renders Finales` assets.
- Add the supplied Villas Tres Hermanas logo as a web-optimized PNG.
- Replace the current abbreviated project copy with the approved Villas Tres Hermanas introduction.
- Add the complete `The VIP Standard` content as six visually separated story sections and a final twelve-item construction-standard summary.
- Add a project enquiry form between the project introduction and the photo gallery.
- Route both the existing general contact form and the new project form through EmailJS with a `lead_source` value.
- Configure the EmailJS template to send copies to `info@vipdevelopmentcr.com` and `kurt@hiddenbayrealty.com`; recipients are fixed in EmailJS, not browser-controlled parameters.
- Change every current `Get Started` CTA to `Send a Message`; it scrolls to the general contact form.
- Add `Request Information` CTAs in the project experience; they scroll to and focus the project enquiry form.
- Keep the existing one-page information architecture. Global section reordering is explicitly out of scope for this delivery.

### Excluded

- A standalone Villas Tres Hermanas route or new CMS.
- Replacement of EmailJS with another messaging provider.
- Production deployment before the branch is reviewed and approved.

## Content and visual structure

`FeaturedProject` remains the `projects` anchor and renders this sequence:

1. Project label, optimized Villas Tres Hermanas logo, headline `Exceptional Homes. Extraordinary Setting. Built Without Compromise.`, and the supplied introductory copy.
2. Two supplied exterior renders as the primary visual story, followed by project facts for three residences, ocean setting, infinity pools, and indoor-outdoor living.
3. The project enquiry form, labeled for Villas Tres Hermanas and positioned before the gallery.
4. `The VIP Standard` introduction and six alternating image-and-copy sections:
   - Built From the Ground Up
   - Engineered for Coastal Costa Rica
   - What’s Behind the Walls Matters
   - Real Materials. No Shortcuts.
   - Designed for Comfort
   - Luxury Without the Maintenance Headache
5. `Beyond the Finish` as a responsive grid covering Foundation, Structure, Interior Materials, Cabinetry, Windows & Doors, Coastal Protection, Electrical, Climate Control, Roofing, Plumbing, Wastewater, and Warranty.
6. Closing project enquiry CTA, then the optimized gallery and existing accessible lightbox.

The supplied exterior, interior, pool, bedroom, and bathroom renders are the primary image source. No synthetic imagery is needed unless a required visual relationship cannot be served by the supplied inventory; if needed, generated imagery will be clearly supplemental and never represented as a property render.

## Images and performance

Source files will never be served directly. Exported assets will live under `public/images/projects/villas-tres-hermanas/` with descriptive, ASCII filenames.

- Main visual and wide story images: WebP, maximum 2560 px on the long edge.
- Gallery images: WebP, maximum 1600 px on the long edge.
- Logo: PNG trimmed for web use, with a max long edge of 1200 px.
- A mobile rendition of each primary exterior image will be produced when cropping materially improves mobile composition.
- `next/image` receives correct `sizes`, explicit meaningful alt text, and priority only for the first visual above the fold. Gallery images remain lazy-loaded.

## Lead delivery

`sendEmail` accepts a lead object with a fixed source chosen by the component:

- General form source: `General Contact Form`.
- Project form source: `Featured Project — Villas Tres Hermanas`.

The EmailJS template parameters include `from_name`, `from_email`, `phone`, `project_type` when applicable, `message`, `lead_source`, and a human-readable subject. The EmailJS dashboard template has a fixed recipient list of `info@vipdevelopmentcr.com, kurt@hiddenbayrealty.com`; no recipient address is accepted from frontend form data.

The dedicated project form includes Name, Email, Phone / WhatsApp, and Message. It has the same required-field, invalid-email, submitting, success, and error states as the general form. The closing CTA moves focus to the Name field after smooth-scrolling so keyboard users can immediately begin their enquiry.

## Component boundaries

- `lib/emailjs.ts`: lead type, source-aware template parameter mapping, safe EmailJS transport.
- `components/LeadForm.tsx`: reusable visual and validation logic for both form variants.
- `components/ContactForm.tsx`: general-form configuration and existing `contact` section shell.
- `components/FeaturedProject.tsx`: project content, primary images, VIP Standard sections, and gallery/lightbox state.
- `components/Header.tsx` and `components/Hero.tsx`: CTA copy only.
- `public/images/projects/villas-tres-hermanas/`: optimized project assets.

## Accessibility and quality

- Section headings follow an `h2` → `h3` hierarchy.
- Image alt text identifies the architectural feature or room rather than repeating filenames.
- Gallery controls retain keyboard activation and the lightbox remains operable with keyboard controls.
- Form labels remain explicit and validation errors are announced.
- The static export must build successfully with no missing image references.
- A manual EmailJS test must establish that each form reaches both fixed recipients and that the subject/body exposes the correct lead source.

## Acceptance criteria

1. Featured Project has the new Villas Tres Hermanas content, complete VIP Standard content, supplied optimized renders, and logo.
2. The project form appears before the gallery and sends the `Featured Project — Villas Tres Hermanas` source.
3. EmailJS delivers both form types to both required recipients without exposing recipient addresses as user-controllable fields.
4. Header and hero say `Send a Message`; project CTAs say `Request Information` and target the project form.
5. Desktop and mobile presentation is visually coherent, responsive, keyboard accessible, and uses optimized images.
6. `npm run build` succeeds, followed by review of the static `out/` site before GitHub push and production deployment.
