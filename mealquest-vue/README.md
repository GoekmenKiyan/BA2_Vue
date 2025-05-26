# MealQuest 🍽️ – Vue Version

Dies ist das Vue.js 3 Projekt zur Anwendung **MealQuest**, das 1:1 das Verhalten der React- und Angular-Version nachbildet. Es wurde im Rahmen einer Bachelorarbeit entwickelt, um Performance, Architektur und Usability der drei Frontend-Frameworks direkt zu vergleichen.

---

## 🚀 Features

- 🔍 Rezepte suchen via Spoonacular API
- 🍝 Rezept-Detailansicht mit:
  - Zutaten & Nährwerte
  - Beschreibung & Zubereitung
- ❤️ Favoriten speichern/löschen (localStorage)
- 📄 Export der Favoriten als PDF
- ♾️ Infinite Scrolling (Lazy Loading)
- 🧭 Navigation mit zentriertem Navbar-Titel
- 🎨 Styling mit TailwindCSS

---

## 🧰 Technologie-Stack

- **Vue 3** (Composition API)
- **Vite** als Build-Tool
- **Vue Router** für Client-Routing
- **jsPDF** für PDF-Export
- **Axios** für HTTP-Requests
- **TailwindCSS** für UI

---

## 🗂️ Projektstruktur

src/
├── api/
│   └── spoonacular.js      // API Kommunikation
├── components/
│   └── Navbar.vue
│   └── SearchBar.vue
├── composables/
│   └── useFavorites.js     // Globale Favoritenverwaltung
├── pages/
│   ├── Home.vue
│   ├── RecipeList.vue
│   ├── RecipeDetail.vue
│   └── Favorites.vue
├── utils/
│   └── pdfExport.js
├── App.vue
├── main.js
└── router/
    └── index.js

---

## ⚙️ Setup

1. `.env` Datei erstellen:

```bash
touch .env

2. App starten

npm install
npm run dev