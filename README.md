# VIVA Driving School GB — Website

A modern, premium, single-page website for VIVA Driving School GB
(North London, DVSA approved driving instructors).

## File structure

```
/index.html
/style.css
/script.js
/images/
  hero.jpg
  student1.jpg
  student2.jpg
  student3.jpg
/README.md
```

## ⚠️ Important: replace the placeholder images

The `images/` folder currently contains **placeholder files** labelled with
what should go there. Replace them with your real photos, **keeping the
exact same filenames**:

| File              | Should be                                                              |
|-------------------|-------------------------------------------------------------------------|
| `images/hero.jpg`     | The full-screen hero photo (red VIVA learner car at night, green light trails) |
| `images/student1.jpg` | Student pass photo #1 (the woman with the pass certificate, thumbs up) |
| `images/student2.jpg` | Student pass photo #2 (the man in the black t-shirt with the pass certificate) |
| `images/student3.jpg` | Student pass photo #3 (the man in the orange jacket with the pass certificate) |

Recommended sizes for best quality / load speed:
- `hero.jpg`: ~1920×1080px, exported as JPG, ~150–300KB
- `student*.jpg`: ~1000×1250px (portrait, 4:5 ratio), JPG, ~100–200KB

## Before going live — update placeholder details

The contact section currently uses placeholder numbers/links. Update these
in `index.html`:

1. **Phone number** — replace every instance of `+44XXXXXXXXXX` with the
   real number in international format (e.g. `+447908969686`). It appears in:
   - The "Call us" link (`tel:` href)
   - The footer link
2. **WhatsApp number** — replace `44XXXXXXXXXX` in the `https://wa.me/...`
   links (there are two — one in the Contact section, one in the floating
   WhatsApp button) with the real number, no `+` and no leading `0`
   (e.g. `447908969686`).
3. **Displayed phone number** — replace the text `+44 XXXX XXXXXX` shown on
   the "Call us" card with the real formatted number.
4. **Instagram** — the link `https://instagram.com/Vivadrivingschoolgb` is
   already set; update if the handle changes.
5. **Contact form** — the form currently shows a confirmation message in the
   browser only (see `script.js`). To actually receive messages, connect it
   to a form backend such as Formspree, Netlify Forms, or your own API
   endpoint, and update the `fetch`/submit logic in `script.js` accordingly.

## How to run locally

No build tools or installs needed — it's plain HTML/CSS/JS.

**Option 1 — just open it:**
Double-click `index.html` to open it in your browser.

**Option 2 — local server (recommended, avoids any file-path quirks):**

With Python installed, from the project folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

With Node.js installed, you can instead run:

```bash
npx serve .
```

## How to deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `viva-driving-school`).
2. Push these files to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/viva-driving-school.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. After a minute or two, your site will be live at:
   `https://<your-username>.github.io/viva-driving-school/`

## Editing the site later

- **Text content** — edit directly inside `index.html`. Sections are clearly
  labelled with HTML comments (`<!-- ABOUT -->`, `<!-- SERVICES -->`, etc.).
- **Colours** — all brand colours are defined as CSS variables at the top of
  `style.css` under `:root` (e.g. `--lime`, `--bg`, `--red`). Change a
  variable once and it updates everywhere.
- **Fonts** — loaded from Google Fonts in `index.html` (`Anton` for big
  headings, `Inter` for body text, `JetBrains Mono` for small label/plate
  details).
- **Animations** — fade-in timing on the hero is controlled via the
  `--delay` CSS variable on each `.fade-in` element in `index.html`.
