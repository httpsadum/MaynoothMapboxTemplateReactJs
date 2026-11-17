# Maynooth Campus Map – React & Mapbox

An interactive campus mapping project built with **React.js** and **Mapbox GL JS**, designed around Maynooth University.

The project provides a foundation for a campus navigation application, combining an interactive map interface with the potential to expand into location discovery, outdoor navigation and indoor building navigation.

**Repository:** [MaynoothMapboxTemplateReactJs](https://github.com/httpsadum/MaynoothMapboxTemplateReactJs)

## Features

- **Interactive Mapbox map** – Displays an interactive map centred around Maynooth University.
- **React.js frontend** – Component-based application structure.
- **Map controls** – Mapbox navigation controls for zooming and map interaction.
- **Location sidebar** – Interface for displaying and organising campus locations.
- **Environment-based configuration** – Mapbox access token configured through environment variables.

## Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend application |
| JavaScript | Application logic |
| Mapbox GL JS | Interactive mapping |
| HTML5 & CSS3 | Layout and styling |
| Node.js & npm | Development environment |

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- A [Mapbox account](https://account.mapbox.com/) and public access token

### 1. Clone the repository

```bash
git clone https://github.com/httpsadum/MaynoothMapboxTemplateReactJs.git
```

Navigate into the project:

```bash
cd MaynoothMapboxTemplateReactJs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Mapbox

Create a `.env` file in the project root directory, alongside `package.json`.

Add your Mapbox public access token:

```env
REACT_APP_MAPBOX_TOKEN=your_mapbox_public_token
```

Replace `your_mapbox_public_token` with your own token from your Mapbox account.

**Important:** Do not commit your `.env` file or expose secret access tokens in your repository.

### 4. Start the development server

```bash
npm start
```

Open the application at:

```text
http://localhost:3000
```

The development server automatically reloads when changes are made to the source code.

## Building for Production

To generate an optimised production build:

```bash
npm run build
```

The resulting application is generated in the `build` directory and can be deployed to a suitable static hosting provider.

## Project Structure

```text
MaynoothMapboxTemplateReactJs/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── App.jsx
│   ├── Map.js
│   ├── sidebar.css
│   └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*The source file names above describe the current application structure; adjust them if the project changes.*

## Future Development

Potential extensions for the project include:

- Campus building and facility markers.
- Searchable campus locations.
- GPS-based user positioning.
- Outdoor walking navigation.
- Indoor building maps and floor selection.
- Indoor route calculation.
- Responsive mobile interface and Android support.

These are planned extensions rather than claims about currently implemented functionality.

## Author

**Adam Bennett**

GitHub: [@httpsadum](https://github.com/httpsadum)

Developed as a React and Mapbox campus mapping project focused on exploring interactive mapping, frontend development and location-based applications.

---

*Map data and mapping services are provided through Mapbox. A valid Mapbox access token is required to run the application.*
