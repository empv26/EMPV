# Company presentation implementation plan

Goal: publish the approved V18 brochure at /presentazione/ on empv.it.
Architecture: isolated static page under public/presentazione, copied by Vite; retain existing brochure markup, translations, navigation and print behavior. Compile Tailwind and vendor icons; externalize and optimize embedded images. No homepage or menu changes.

- [ ] Prepare static HTML and local assets, canonical and social metadata.
- [ ] Check all 15 slides, local asset resolution, IT/EN/FR navigation and preference persistence; production build and existing static checks.
- [ ] Review isolated diff, open PR, verify CI, merge and check deployment and live route.

Constraints: preserve approved cover and all slide content; no unapproved Enrico composite; preserve homepage Hero, Team, Customize, footer, analytics and consent. Test 320/390/768/1440/1920 where browser access permits. Missing browser verification must be reported.
