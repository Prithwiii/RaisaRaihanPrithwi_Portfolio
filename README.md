# Raisa Raihan Prithwi Portfolio

A modern personal portfolio website for a third-year Computer Science and Engineering student at BRAC University with a minor in Economics. The site is built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React, with a minimal blue-and-sage visual identity and a strong academic, data-focused tone.

## Technologies used

- React
- Vite
- JavaScript / JSX
- Tailwind CSS
- Framer Motion
- Lucide React

## Project overview

This portfolio is designed to present:

- academic background
- research and learning interests
- technical skills and exploration areas
- selected project work
- contact information and networking links

The content is centralized in the data file so updates are easy without modifying every component.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev -- --host 0.0.0.0
```

Then open the local Vite URL shown in the terminal, typically:

```bash
http://localhost:5173/
```

## Build for production

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the default Vite settings.
4. Deploy the project.

No backend is required for this portfolio.

## Update personal information

Edit:

- `src/data/portfolioData.js`

This file contains the personal profile, navigation links, social URLs, project data, learning tags, and contact messages.

## Add your CV

Place your resume in the `public` folder as:

```bash
public/resume.pdf
```

The hero section links to `/resume.pdf` by default, so you can replace the file later without changing the component code.

## Update project links

Edit the project entries in:

- `src/data/portfolioData.js`

Each project object includes:

- `githubUrl`
- `demoUrl`

Replace the placeholder `#` values with your real links when available.

## Add project images

Use the folder:

```bash
public/project-images/
```

You can add images there and reference them in the project data if you decide to extend the portfolio later.

## Main structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Research.jsx
│   ├── CurrentlyLearning.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js
├── App.jsx
├── main.jsx
├── index.css
└──
```

## Notes

This project intentionally avoids invented jobs, internships, certifications, or publication claims. It is written as a realistic undergraduate portfolio for networking, internship applications, research opportunities, and graduate applications.
