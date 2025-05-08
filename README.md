# ✈️ Workers Flights App

A modern Angular application for managing and viewing workers and their assigned flights.  
Built with Angular 17, RxJS, and a RESTful backend.

You can visit it on - https://workers-flights-app.onrender.com (Pay attention that the deploy is working with Mock Data, for real data need to implement ssr) 

<img width="937" alt="RESPONSIVE PAGES" src="https://github.com/user-attachments/assets/30c4b964-a35c-4cac-9673-1d2f67c0c478">

## ⚡ Getting Started with real data

### 1. Clone the repository

```bash
git clone https://github.com/dekelido/WorkersFlightsApp.git
```

```bash
cd WorkersFlightsApp
```


### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Edit `environment.ts` and `environment.prod.ts` to set your API base URL if needed.

### 4. Start the development server

```bash
ng serve
```

## Dark & Light mode 
<img width="937" alt="RESPONSIVE PAGES" src="https://github.com/user-attachments/assets/a9aa6ba9-56be-4892-ad0a-6e82be5d1120">

## Responsive design 
<img width="937" alt="RESPONSIVE PAGES" src="https://github.com/user-attachments/assets/ee97d18d-2e36-448b-b4b3-e1a5d475dd57">

## 🚀 Features
- **View all workers** in a clean, responsive UI
- **Automatic table refresh** every 60 seconds
- **See assigned flights** for each worker, with real-time updates
- **Flight details modal** with rich information
- **Robust error handling** with fallback data
- **Mobile-friendly** and accessible design

Visit [http://localhost:4200/](http://localhost:4200/) in your browser.

## 🛠️ Tech Stack

- [Angular 17](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (for fast dev/build)
- [REST API](#api-endpoints) (customizable backend)

## 🌐 API Endpoints

The app expects a REST API with endpoints like:

- `GET /workers` — List all workers
- `GET /flights/:workerId` — List flights for a worker

You can configure the API base URL in the environment files.
