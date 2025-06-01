# MealQuest (Vue Version)

Dies ist die Vue.js-Variante einer Single Page Application (SPA), die im Rahmen einer Bachelorarbeit entwickelt wurde. Ziel war der Vergleich dreier Frontend-Frameworks – Angular, React und Vue – unter realen Bedingungen. Die App dient als praktische Grundlage zur Analyse von Entwicklungsstil, Wartbarkeit und Performance.

## 📑 Inhaltsverzeichnis

- [Überblick](#überblick)
- [Features](#features)
- [Technologien](#technologien)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Projektstruktur](#projektstruktur)
- [Vergleichskontext](#vergleichskontext)
- [Beispielbilder](#beispielbilder)
- [Lizenz](#lizenz)

---

## 🧭 Überblick

Die Anwendung **MealQuest** bietet Nutzer:innen die Möglichkeit, Rezepte über eine öffentliche API zu suchen, zu filtern und zu favorisieren. Die Vue-Implementierung setzt auf Composition API und Vue Router.

Dieses Repository enthält die **Vue.js**-Variante der App.

---

## ✨ Features

- 🔎 Rezeptsuche mit Live-Ergebnissen
- 🍝 Detailseiten für Rezepte mit Zutatenliste & Anleitungen
- 🌿 Vegetarische Filteroption
- ❤️ Favoritenverwaltung mit Local Storage
- 🖨️ PDF-Export der Rezepte mit `jsPDF`
- 🧭 Client-seitiges Routing via Vue Router

---

## ⚙️ Technologien

- [Vue 3 (Composition API)](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/) für State Management
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [jsPDF](https://github.com/parallax/jsPDF)
- [Spoonacular API](https://spoonacular.com/food-api)

---

## 🧪 Installation

```bash
git clone https://github.com/dein-benutzername/mealquest-vue.git
cd mealquest-vue
npm install
npm run dev
```

> Lege eine `.env` Datei im Projekt an mit deinem API-Key:

```
VITE_SPOONACULAR_API_KEY=dein_api_key
```

---

## ▶️ Verwendung

1. Starte den Dev-Server: `npm run dev`
2. Öffne `http://localhost:5173` im Browser
3. Rezepte entdecken, speichern und exportieren

---

## 🗂️ Projektstruktur

```text
src/
├── assets/            → Statische Ressourcen
├── components/        → Wiederverwendbare UI-Komponenten
├── pages/             → Hauptseiten (Home, Detail, Favoriten)
├── router/            → Routen-Konfiguration
├── services/          → API-Funktionen
├── store/             → Pinia Stores (z. B. für Favoriten)
├── utils/             → Hilfsfunktionen (z. B. PDF-Export)
```

---

## 🧪 Vergleichskontext

Diese SPA wurde parallel in Vue, React und Angular entwickelt. Ziel war ein systematischer Vergleich auf Basis:

- Entwicklungslogik & Struktur
- Wartbarkeit & Lesbarkeit
- Framework-Funktionalität
- Performance im User Interface

---

## 👨‍💻 Lizenz

MIT License

---

## 🙋 Feedback?

Bei Fragen zur Bachelorarbeit oder den Framework-Implementierungen stehe ich gern zur Verfügung.
