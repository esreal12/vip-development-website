# Villas Tres Hermanas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a complete, responsive Villas Tres Hermanas project experience with optimized supplied renders and source-tagged dual-recipient enquiries.

**Architecture:** The existing static Next.js App Router site remains a single page. A reusable `LeadForm` owns validation and submission state, while `ContactForm` and the project section supply form-specific copy and source metadata. A checked-in asset manifest and Node image optimizer convert the supplied client renders into predictable static WebP files consumed by `FeaturedProject`.

**Tech Stack:** Next.js 14 static export, React 18, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, EmailJS Browser SDK, Sharp, Vitest, React Testing Library.

**Spec:** `docs/superpowers/specs/2026-10-09-villas-tres-hermanas-design.md`

## Global Constraints

- Preserve the one-page site and existing `/projects` anchor; global section order is unchanged.
- Use client-supplied renders as the primary imagery and never serve the original 3.8–5.8K files.
- Email recipient addresses are configured as fixed destinations in EmailJS, never passed as browser-controlled template parameters.
- Pass `General Contact Form` or `Featured Project — Villas Tres Hermanas` as the only lead-source values.
- All `Get Started` CTAs become `Send a Message`; all project enquiry CTAs read `Request Information`.
- Keep the static export working with `npm run build`.

## Review Focus

- Missing EmailJS environment variables must fail submissions gracefully without leaking identifiers or form values to browser logs.
- A malformed email or an empty required field must retain entered values and expose its associated error text.
- A project submission must send the Featured Project source while the general contact form must never inherit it.
- The focused target after a project CTA must be the project form’s Name field, including for keyboard activation.
- Every optimized image reference in the rendered gallery must exist in `public/` and be reachable in the static `out/` export.

---

## File structure

- Create: `components/LeadForm.tsx` — reusable React Hook Form UI and submission-state handling.
- Create: `components/VipStandard.tsx` — semantic, data-driven VIP Standard editorial sections and summary grid.
- Create: `lib/villasTresHermanas.ts` — typed project-copy, image, gallery, and standard data.
- Create: `scripts/optimize-villas-images.mjs` — deterministic conversion of approved client assets to WebP.
- Create: `scripts/villas-image-manifest.mjs` — source-to-output mapping imported by the optimizer.
- Create: `tests/emailjs.test.ts` — email parameter construction and safety tests.
- Create: `tests/LeadForm.test.tsx` — validation, source propagation, and submission-state tests.
- Create: `vitest.config.ts`, `tests/setup.ts` — component-test configuration.
- Create: `public/images/projects/villas-tres-hermanas/` — optimized logo, story images, primary images, and gallery assets.
- Modify: `lib/emailjs.ts` — source-aware, log-safe email transport.
- Modify: `components/ContactForm.tsx` — general-form wrapper around `LeadForm`.
- Modify: `components/FeaturedProject.tsx` — new project opening, inline enquiry, VIP Standard, gallery, and focus-aware CTAs.
- Modify: `components/Header.tsx`, `components/Hero.tsx` — CTA copy.
- Modify: `package.json`, `package-lock.json` — image/test tooling and scripts.
- Modify: `.env.example` — document EmailJS variables and recipient-template setup without values.
- Modify: `README.md` — local verification, EmailJS template, asset generation, and static deployment instructions.

### Task 1: Configure test and image tooling

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`

**Interfaces:**
- Produces: `npm run test`, `npm run optimize:villas-images`, and a jsdom environment used by Tasks 2–5.

- [ ] **Step 1: Add failing test commands and dependencies**

Add these dev dependencies and scripts:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "optimize:villas-images": "node scripts/optimize-villas-images.mjs"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.6.1",
    "jsdom": "^25.0.1",
    "sharp": "^0.33.5",
    "vitest": "^2.1.8"
  }
}
```

- [ ] **Step 2: Add Vitest configuration**

Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  test: { environment: 'jsdom', setupFiles: ['./tests/setup.ts'] },
})
```

Create `tests/setup.ts`:

```ts
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => <img {...props} />,
}))
```

- [ ] **Step 3: Install and verify the runner**

Run: `npm install --save-dev vitest@^2.1.8 jsdom@^25.0.1 @testing-library/react@^16.1.0 @testing-library/jest-dom@^6.6.3 @testing-library/user-event@^14.6.1 sharp@^0.33.5`

Run: `npm run test`

Expected: Vitest starts and reports zero test files without configuration errors.

- [ ] **Step 4: Commit the tooling**

```bash
git add package.json package-lock.json vitest.config.ts tests/setup.ts
git commit -m "test: add component test and image tooling"
```

### Task 2: Implement safe source-aware EmailJS delivery

**Files:**
- Modify: `lib/emailjs.ts`
- Create: `tests/emailjs.test.ts`
- Modify: `.env.example`

**Interfaces:**
- Produces: `LeadFormData`, `LeadSource`, `sendEmail(data: LeadFormData): Promise<boolean>`.
- Consumes: only `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

- [ ] **Step 1: Write failing parameter tests**

Mock `@emailjs/browser`; verify the project source and general source become `lead_source`, and recipient fields are absent:

```ts
expect(send).toHaveBeenCalledWith('service', 'template', {
  from_name: 'Ada Lovelace',
  from_email: 'ada@example.com',
  phone: '+506 8000 0000',
  project_type: '',
  message: 'Please send availability.',
  lead_source: 'Featured Project — Villas Tres Hermanas',
  subject: 'New Villas Tres Hermanas enquiry',
}, 'public-key')
expect(Object.keys(mockSend.mock.calls[0][2])).not.toContain('to_email')
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test -- tests/emailjs.test.ts`

Expected: FAIL because the existing transport has no `lead_source` or subject mapping.

- [ ] **Step 3: Implement the minimal transport**

Define the exact data contract:

```ts
export type LeadSource = 'General Contact Form' | 'Featured Project — Villas Tres Hermanas'

export interface LeadFormData {
  name: string
  email: string
  phone?: string
  projectType?: string
  message: string
  source: LeadSource
}
```

Construct only these EmailJS parameters: `from_name`, `from_email`, `phone`, `project_type`, `message`, `lead_source`, `subject`. Remove all console logging of parameter data and make missing configuration return `false`.

- [ ] **Step 4: Document dashboard configuration**

In `.env.example` document variable names only. Add a comment that the EmailJS template must have fixed To addresses `info@vipdevelopmentcr.com, kurt@hiddenbayrealty.com`, use `{{subject}}`, and display `{{lead_source}}` in the email body.

- [ ] **Step 5: Run tests**

Run: `npm run test -- tests/emailjs.test.ts`

Expected: PASS, including missing-config and failed-provider results.

- [ ] **Step 6: Commit the email transport**

```bash
git add lib/emailjs.ts tests/emailjs.test.ts .env.example
git commit -m "feat: tag EmailJS leads by source"
```

### Task 3: Build a reusable accessible lead form

**Files:**
- Create: `components/LeadForm.tsx`
- Modify: `components/ContactForm.tsx`
- Create: `tests/LeadForm.test.tsx`

**Interfaces:**
- Consumes: `sendEmail` and `LeadSource` from `lib/emailjs.ts`.
- Produces: `LeadForm({ source, includeProjectType, nameInputRef?, submitLabel? })`.

- [ ] **Step 1: Write failing form tests**

Test all required fields, invalid email, supplied source, success reset, and failure preservation:

```tsx
render(<LeadForm source="Featured Project — Villas Tres Hermanas" />)
await user.click(screen.getByRole('button', { name: 'Request Information' }))
expect(await screen.findByText('Name is required')).toBeInTheDocument()

await user.type(screen.getByLabelText('Email *'), 'not-an-email')
expect(await screen.findByText('Invalid email address')).toBeInTheDocument()
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test -- tests/LeadForm.test.tsx`

Expected: FAIL because `LeadForm` does not exist.

- [ ] **Step 3: Implement the form**

`LeadForm` owns React Hook Form registration, loading status, a `role="status"` success announcement, and a `role="alert"` error announcement. Name, Email, Phone / WhatsApp, and Message are present for both variants; `includeProjectType` adds the current general-form select. Give all form controls a caller-supplied `idPrefix` to avoid duplicate DOM IDs.

- [ ] **Step 4: Convert the general section**

Keep `ContactForm` responsible only for the `contact` section heading/background and render:

```tsx
<LeadForm
  idPrefix="contact"
  source="General Contact Form"
  includeProjectType
  submitLabel="Send Inquiry"
/>
```

- [ ] **Step 5: Run tests**

Run: `npm run test -- tests/LeadForm.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit the reusable form**

```bash
git add components/LeadForm.tsx components/ContactForm.tsx tests/LeadForm.test.tsx
git commit -m "feat: reuse accessible lead form"
```

### Task 4: Generate optimized Villas Tres Hermanas assets

**Files:**
- Create: `scripts/villas-image-manifest.mjs`
- Create: `scripts/optimize-villas-images.mjs`
- Create: `public/images/projects/villas-tres-hermanas/*`

**Interfaces:**
- Produces: an exported manifest with `{ source, output, width, quality, alt, role }` entries consumed by the optimizer and project data.

- [ ] **Step 1: Create an explicit asset manifest**

Map provided files to descriptive outputs, including at minimum:

```js
{ source: 'Casa A - Render Frontal.jpg', output: 'hero-exterior.webp', width: 2560, quality: 84, role: 'primary' }
{ source: 'Casa A - Render Lateral_01.jpg', output: 'hero-side.webp', width: 2560, quality: 84, role: 'primary' }
{ source: 'Render Rerraza_Piscina_01.jpg', output: 'infinity-pool.webp', width: 2560, quality: 84, role: 'story' }
{ source: 'Render Cocina_Sala_01.jpg', output: 'open-living.webp', width: 2560, quality: 84, role: 'story' }
{ source: 'RA_Logotipo_R&Letras_Negro.png', output: 'villas-tres-hermanas-logo.png', width: 1200, quality: 100, role: 'logo' }
```

Include every supplied raster render in the gallery at a 1600 px maximum; exclude only `RA_Logotipo_R&Letras_Negro.ai`.

- [ ] **Step 2: Implement deterministic conversion**

Use `sharp` to create parent directories, apply EXIF rotation, resize without enlargement, and write WebP for render assets. Preserve the logo as lossless PNG. Fail the script with the missing source filename if any mapped source is absent.

- [ ] **Step 3: Run image generation and inspect output**

Run: `npm run optimize:villas-images`

Run: `find public/images/projects/villas-tres-hermanas -type f | sort`

Expected: all manifest outputs exist, no original source filenames or `.ai` files are copied, and `du -sh public/images/projects/villas-tres-hermanas` is materially smaller than the original source directory.

- [ ] **Step 4: Commit optimized assets**

```bash
git add scripts public/images/projects/villas-tres-hermanas
git commit -m "feat: add optimized Villas Tres Hermanas imagery"
```

### Task 5: Add content data and VIP Standard components

**Files:**
- Create: `lib/villasTresHermanas.ts`
- Create: `components/VipStandard.tsx`
- Modify: `components/FeaturedProject.tsx`

**Interfaces:**
- `villasTresHermanas`: `{ opening, primaryImages, galleryImages, standardSections, standards }`.
- `VipStandard({ sections, standards })`: semantic content block rendered after the project enquiry.

- [ ] **Step 1: Write a failing content-shape test**

Assert six standard sections and twelve final standard entries, with each image file present:

```ts
expect(standardSections).toHaveLength(6)
expect(standards).toHaveLength(12)
for (const image of [...primaryImages, ...galleryImages]) {
  expect(existsSync(path.join(process.cwd(), 'public', image))).toBe(true)
}
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test -- tests/villasTresHermanas.test.ts`

Expected: FAIL because content data has not been created.

- [ ] **Step 3: Add the approved content exactly once**

Put all client copy from the approved spec into typed data, including the six standard narratives and the twelve summary values. Do not place long copy in JSX conditionals. Each standard section has a distinct supplied render and meaningful alt text.

- [ ] **Step 4: Render the editorial experience**

Update `FeaturedProject` order to: opening → primary project story → project form → `VipStandard` → closing project CTA → gallery → lightbox. Replace the old project description, slider assets, and gallery entries. Use the optimized project logo, `next/image` `sizes`, lazy gallery loading, and current keyboard lightbox handlers.

- [ ] **Step 5: Run content and component tests**

Run: `npm run test -- tests/villasTresHermanas.test.ts tests/LeadForm.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit the project experience**

```bash
git add lib/villasTresHermanas.ts components/VipStandard.tsx components/FeaturedProject.tsx tests/villasTresHermanas.test.ts
git commit -m "feat: expand Villas Tres Hermanas experience"
```

### Task 6: Wire project CTAs and update global CTA copy

**Files:**
- Modify: `components/FeaturedProject.tsx`
- Modify: `components/Header.tsx`
- Modify: `components/Hero.tsx`
- Modify: `tests/LeadForm.test.tsx`

**Interfaces:**
- Produces: a focusable `#villas-tres-hermanas-enquiry-name` field and project CTA behavior.

- [ ] **Step 1: Write a failing focus test**

```tsx
render(<FeaturedProject />)
await user.click(screen.getByRole('button', { name: 'Request Information' }))
expect(document.activeElement).toBe(screen.getByLabelText('Name *'))
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test -- tests/FeaturedProject.test.tsx`

Expected: FAIL because the project form focus target and CTA handler do not exist.

- [ ] **Step 3: Implement focus-aware project CTA behavior**

Use a ref or element lookup to smooth-scroll `#villas-tres-hermanas-enquiry` into view and call `.focus({ preventScroll: true })` on the Name field. Label both project buttons `Request Information`.

- [ ] **Step 4: Update global CTAs**

Change the Header and Hero primary button text from `Get Started` to `Send a Message`, keeping their `#contact` behavior. Do not change secondary `View Projects` behavior.

- [ ] **Step 5: Run the focused tests**

Run: `npm run test -- tests/FeaturedProject.test.tsx tests/LeadForm.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit CTA behavior**

```bash
git add components/FeaturedProject.tsx components/Header.tsx components/Hero.tsx tests/FeaturedProject.test.tsx tests/LeadForm.test.tsx
git commit -m "feat: direct project and global message CTAs"
```

### Task 7: Validate static export and configure EmailJS

**Files:**
- Modify: `README.md`

**Interfaces:**
- Produces: verified `out/` static site and documented external email setup.

- [ ] **Step 1: Add operator documentation**

Document these exact EmailJS dashboard settings:

```text
To: info@vipdevelopmentcr.com, kurt@hiddenbayrealty.com
Subject: {{subject}}
Body includes: {{from_name}}, {{from_email}}, {{phone}}, {{project_type}}, {{message}}, {{lead_source}}
```

Document image generation, local test, build, GitHub push, and SiteGround dry-run/deploy commands.

- [ ] **Step 2: Run automated checks**

Run: `npm run test`

Run: `npm run build`

Expected: all tests pass and `out/index.html` plus project image files exist.

- [ ] **Step 3: Perform visual and accessibility smoke checks**

Start the static output and inspect desktop and 375 px mobile views. Verify heading order, CTA target/focus behavior, gallery keyboard activation, form error/success states, image loading, and no horizontal overflow.

- [ ] **Step 4: Configure and verify live EmailJS delivery**

In the existing EmailJS template, set the fixed To recipients and required variables. With legitimate test details, submit each form once and confirm both inboxes receive each message with the correct source. Do not commit credentials or inbox screenshots.

- [ ] **Step 5: Commit documentation and verified feature work**

```bash
git add README.md
git commit -m "docs: document Villas Tres Hermanas operations"
```

### Task 8: Publish for review, then deploy after approval

**Files:**
- No source changes required unless verification finds a defect.

- [ ] **Step 1: Confirm review state**

Run: `git status --short --branch`

Run: `git log --oneline origin/main..HEAD`

Expected: a clean `codex/vip-website` branch containing the implementation commits.

- [ ] **Step 2: Push the review branch**

Run: `git push -u origin codex/vip-website`

Expected: GitHub receives the review branch; do not merge or deploy yet.

- [ ] **Step 3: Obtain explicit deployment approval**

Present the branch, build/test output, image summary, and EmailJS verification result. Wait for approval before writing to `/home/customer/www/vipdevelopmentcr.com/public_html`.

- [ ] **Step 4: Dry-run and deploy static output**

Run:

```bash
rsync -nrc --delete -e 'ssh -o BatchMode=yes -o UseKeychain=yes' out/ vipdevelopment:/home/customer/www/vipdevelopmentcr.com/public_html/
```

After approval, run the same command without `-n`; preserve no server-side source or secret files. Verify the public URL, the visible project content, asset responses, and both CTAs immediately after deployment.
