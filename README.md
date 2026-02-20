# 🌟 Nelson Vargas - Portfolio

A modern, responsive portfolio website built with React and Vite. Showcasing projects, skills, and experience as a Software Engineering Team Lead and Fullstack Developer.

## ✨ Features

- **Modern Design**: Clean and minimalist interface with dark/light theme support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multilingual Support**: Switch between English and Spanish
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Elegant fade-in animations and transitions
- **Social Links**: Quick access to LinkedIn, GitHub, Email, and CV
- **Project Showcase**: Dedicated section for featured projects
- **Experience Timeline**: Visual timeline of professional experience
- **Skills Section**: Comprehensive list of technical skills
- **Contact Section**: Easy contact information and methods

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library for icons
- **Emotion** - CSS-in-JS styling
- **CSS3** - Custom styling with CSS variables

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx         # About section with experience and skills
│   │   ├── Contact.jsx       # Contact information section
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero/landing section
│   │   └── Projects.jsx      # Projects showcase section
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global styles
│   ├── ThemeContext.jsx      # Theme context provider
│   ├── i18n.jsx              # Internationalization setup
│   ├── index.css             # Base styles
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## 🎨 Customization

### Color Scheme
The project uses CSS variables for easy theme customization. Edit the color variables in `App.css`:

```css
--primary: #0f1419
--accent: #00d9ff
--text-primary: #ffffff
--border: #1e2935
```

### Content
Update the following files to customize content:
- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/Contact.jsx`

### Translations
Edit `src/i18n.jsx` to add or modify translations for English and Spanish.

## 🔗 Links

- **LinkedIn**: https://www.linkedin.com/in/nelsonvargas-dev/
- **GitHub**: https://github.com/NelsonVargas04
- **Email**: var.nelson15@gmail.com

## 📱 Responsive Breakpoints

The design is optimized for:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

## 🚀 Deployment

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.)

## 📄 License

This project is open source and available for personal use.

---

**Made with ❤️ by Nelson Vargas**
