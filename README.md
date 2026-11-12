# Art Direction 🎨

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.2.0-646C9A?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-5.3.9-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Auth0](https://img.shields.io/badge/Auth0-Authentication-EB5424?logo=auth0&logoColor=white)](https://auth0.com/)

**Art Direction** is a modern, responsive creative studio and portfolio web application built with **React**, **Vite**, and **Styled Components**. It showcases creative direction, digital design capabilities, technical proficiencies, and provides client engagement channels with primary and alternative contact methods.

---

## 🌟 Key Features

- **Distinctive Brand Identity**: Tailored visual presentation for the **Art Direction** brand, featuring custom typography, modern color palettes, and polished layout components.
- **Primary & Alternative Contact Information**: Comprehensive contact section displaying primary and alternative phone numbers, emails, studio locations, and operating hours.
- **Interactive Contact Form**: Connects to Formspree for message handling with dedicated fields for primary and alternative contact details.
- **Embedded Studio Location Map**: Google Maps integration for easy studio discovery.
- **Dynamic State Management**: Powered by React Context API and `useReducer` to manage page-specific content and dynamic data across the site.
- **Skills & Capabilities Showcase**: Grid of technical skills, design frameworks, and programming proficiencies rendered dynamically from structured data (`data.json`).
- **User Authentication**: Integrated with Auth0 for streamlined login, logout, and personalized user greetings in the navigation bar.
- **Responsive Navigation**: Mobile-first responsive header with collapsible burger menu and sticky/smooth navigation.
- **Back-to-Top Navigation**: Animated "Go to Top" button for enhanced browsing experience across long pages.
- **Custom 404 Experience**: Dedicated Error route for handling missing paths with quick return navigation.

---

## 📞 Studio Contact & Alternative Details

| Channel | Primary Detail | Alternative Detail |
| :--- | :--- | :--- |
| **Phone** | `+1 (555) 019-2834` | `+1 (555) 019-5678` |
| **Email** | [contact@artdirection.com](mailto:contact@artdirection.com) | [support@artdirection.com](mailto:support@artdirection.com) |
| **Studio Location** | 104 Design Blvd, Suite 400, New York, NY 10018 | 42 Innovation Way, London, UK EC2A 4NE |
| **Hours** | Monday – Friday: 9:00 AM – 6:00 PM EST | Saturday – Sunday: 10:00 AM – 2:00 PM EST |

---

## 📂 Project Structure

```text
Art-Direction/
├── index.html                # Application HTML entry point & meta tags
├── package.json              # Project dependencies & scripts
├── vite.config.js            # Vite bundler configuration
├── public/                   # Static media and assets
│   └── image/
│       ├── about1.jpg        # About page hero image
│       ├── body1.jpg         # Home page hero image
│       └── err.jpg           # 404 page illustration
└── src/
    ├── main.jsx              # React DOM render & Auth0 provider wrapper
    ├── App.jsx               # Application routes, theme provider & global layout
    ├── Global.jsx            # Global styled-components stylesheet & responsive rules
    ├── Home.jsx              # Home landing page
    ├── About.jsx             # About page
    ├── Skill.jsx             # Skills & capabilities showcase
    ├── Contact.jsx           # Contact page (Cards, Map & Interactive Form)
    ├── Err.jsx               # 404 fallback page
    ├── Context.jsx           # React Context and Provider for global state
    ├── Reducer.jsx           # Reducer function handling state transitions
    ├── components/
    │   ├── Header.jsx        # Top header with Art Direction branding
    │   ├── Navbar.jsx        # Navigation bar (Desktop & Mobile)
    │   ├── Footer.jsx        # Footer with links, social icons & contact details
    │   ├── Bodypart.jsx      # Reusable hero/introduction component
    │   ├── Gotop.jsx         # Scroll-to-top floating button
    │   └── DATA/
    │       └── data.json     # Skill and service catalog data
    └── styles/
        └── Button.jsx        # Reusable themed button component
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v16.0 or higher recommended)
- **npm** (v7.0 or higher)

### Installation

1. **Clone or open the workspace**:
   ```bash
   cd Art-Direction
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 🛠 Available Scripts

In the project directory, you can run:

- `npm run dev` — Launches the Vite development server with Hot Module Replacement (HMR).
- `npm run build` — Compiles and bundles production-ready assets into the `dist/` directory.
- `npm run preview` — Serves the production build locally for verification.

---

## ⚙️ Configuration & Customization

### 1. Brand Name & Context
Global brand properties and page headers are managed in [`src/Context.jsx`](file:///c:/Users/QBS%20Accounting/Documents/websites/Art-Direction/src/Context.jsx). You can modify dispatch payloads for `HOME_UPDATE` and `ABOUT_UPDATE` to customize headlines and imagery.

### 2. Contact Details & Formspree Endpoint
- Contact cards, alternative details, and the contact form reside in [`src/Contact.jsx`](file:///c:/Users/QBS%20Accounting/Documents/websites/Art-Direction/src/Contact.jsx).
- Footer contact info is maintained in [`src/components/Footer.jsx`](file:///c:/Users/QBS%20Accounting/Documents/websites/Art-Direction/src/components/Footer.jsx).
- To route emails to your inbox, update the Formspree endpoint in `src/Contact.jsx`:
  ```jsx
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

### 3. Theme & Colors
Theme tokens such as colors, fonts, and responsive breakpoints are configured in [`src/App.jsx`](file:///c:/Users/QBS%20Accounting/Documents/websites/Art-Direction/src/App.jsx) via `ThemeProvider`:
```javascript
const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    btn: "rgb(98 84 243)",
    footer_bg: "#0a1435",
    // ...
  },
  media: { mobile: "768px", tab: "998px" }
};
```

### 4. Auth0 Authentication
Auth0 client domain and client ID are configured in [`src/main.jsx`](file:///c:/Users/QBS%20Accounting/Documents/websites/Art-Direction/src/main.jsx). Update with your own credentials if you wish to connect a separate Auth0 tenant.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

