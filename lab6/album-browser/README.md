# Album Browser — Lab 6: Routing & HTTP

An Angular single-page application that lets you browse albums and photos using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com).

## Features

- **Multi-page SPA** with Angular Router (6 routes)
- **HTTP requests** via `HttpClient` through a dedicated `AlbumService`
- **CRUD operations**: Read (list & detail), Update (edit title), Delete (remove from list)
- **Reactive data** with RxJS Observables
- **Responsive design** with scoped component styles
- **Loading indicators** and empty state handling

## How to Run

```bash
# Install dependencies
npm install

# Start development server
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Project Structure

```
src/app/
├── components/
│   ├── home/             # Welcome page
│   ├── about/            # About page
│   ├── albums/           # Album list view
│   ├── album-detail/     # Album detail + edit view
│   └── album-photos/     # Photo grid view
├── models/
│   ├── album.model.ts    # Album interface
│   └── photo.model.ts    # Photo interface
├── services/
│   └── album.service.ts  # API service layer
├── app.ts                # Root component
├── app.html              # Root template with navbar
├── app.css               # Navbar styles
├── app.config.ts         # App configuration (Router, HttpClient)
└── app.routes.ts         # Route definitions
```

## Routes

| Path               | Component            | Description          |
| ------------------- | -------------------- | -------------------- |
| `/`                 | —                    | Redirects to `/home` |
| `/home`             | HomeComponent        | Welcome page         |
| `/about`            | AboutComponent       | About page           |
| `/albums`           | AlbumsComponent      | Album list           |
| `/albums/:id`       | AlbumDetailComponent | Album detail + edit  |
| `/albums/:id/photos`| AlbumPhotosComponent | Photo grid           |

## Technologies

- Angular 21
- Angular Router
- HttpClient + RxJS
- TypeScript
- JSONPlaceholder API
