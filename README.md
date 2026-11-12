# Swayamshakti Samal — Portfolio

A responsive personal portfolio built with plain HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — page content and navigation
- `styles.css` — visual design and responsive layout
- `script.js` — page navigation, project search/filter and contact-link configuration
- `assets/` — add your profile photo and résumé here

## Run locally
Open `index.html` in a browser. For a local development server, open this folder in VS Code and use the Live Server extension.

## Before publishing — personalise these items
1. Replace the initials placeholder in the profile card with your own photograph. Save it as `assets/profile.jpg`; then replace the `.profile-photo` block in `index.html` with:
   `<img src="assets/profile.jpg" alt="Swayamshakti Samal" class="profile-image">`
   Add `.profile-image { width:100%; aspect-ratio:1; object-fit:cover; border-radius:7px; }` to `styles.css`.
2. Add your latest résumé as `assets/resume.pdf`.
3. Open `script.js` and fill `PROFILE.email` and `PROFILE.linkedin`.
4. Verify the degree dates, internship dates/title, course list and project descriptions against your final CV.
5. Add only certificates you have actually completed. Include issuer, year and a credential URL.
6. Add links to any public degree certificate/transcript only if you deliberately want those documents public.

## Publish with GitHub Pages
Create a repository, upload the contents of this folder to its root, then go to **Settings → Pages**. Select **Deploy from a branch**, choose `main` and `/ (root)`, and save. GitHub Pages will provide the public website URL.

## Notes
The portfolio uses a close visual direction inspired by the supplied reference: dark background, cream profile card, pill navigation, oversized headings, orange/mint feature cards and compact mono typography. It is not a pixel-for-pixel copy. Missing personal contact details and documents are intentionally left configurable rather than invented.
