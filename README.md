A small Angular application for creating and managing notes about movies, combined with a movie search feature.

## Features

- Create, view, and browse notes
- Search for movies via an external API
- Custom design (purple/orange, "movie ticket" look)
- Persistent storage via a REST API (json-server)
- Form validation with Angular Template-driven Forms

## Tech Stack

- [Angular](https://angular.dev/) (Standalone Components, Signals)
- [json-server](https://github.com/typicode/json-server) as a local mock backend
- TypeScript, HTML, CSS

## Prerequisites

- [Node.js](https://nodejs.org/) (recommended: latest LTS version)
- [Angular CLI](https://angular.dev/tools/cli)

```bash
npm install -g @angular/cli
```

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/YOUR-USERNAME/movie-notes-app.git
   cd movie-notes-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

## Running the project

This project needs **two** processes running at the same time: the Angular frontend and the json-server backend.

**Terminal 1 – Start the backend:**

```bash
npx json-server --watch data.json --port 3000
```

The backend will then be available at `http://localhost:3000`.

**Terminal 2 – Start the frontend:**

```bash
ng serve
```

The app will then be available at `http://localhost:4200/`.

## Project structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── home/
│   │   ├── about/
│   │   ├── movies/
│   │   ├── note-add/
│   │   └── note-detail/
│   ├── models/
│   │   └── note.models.ts
│   ├── services/
│   │   └── note.ts
│   └── pipes/
│       └── note-shortener.pipe.ts
data.json          # Mock database for json-server
```

## Available scripts

| Command                                           | Description                       |
| -------------------------------------------------- | ---------------------------------- |
| `ng serve`                                          | Starts the Angular dev server      |
| `ng build`                                          | Creates a production build         |
| `npx json-server --watch data.json --port 3000`     | Starts the mock backend            |

## Routes

| Path          | Description              |
| ------------- | -------------------------- |
| `/`           | Overview of all notes      |
| `/note/:id`   | Detail view of a note      |
| `/movies`     | Movie search                |
| `/about`      | About the app               |

## License

This project is for learning purposes.
