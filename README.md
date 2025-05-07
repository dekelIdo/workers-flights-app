# ✈️ WorkersFlightsApp

A modern Angular application for managing and viewing workers and their assigned flights.  
Built with Angular 17, RxJS, and a RESTful backend.


## 🚀 Features

- **View all workers** in a clean, responsive UI
- **See assigned flights** for each worker, with real-time updates
- **Flight details modal** with rich information
- **Automatic table refresh** every 60 seconds
- **Robust error handling** with fallback data
- **Mobile-friendly** and accessible design

## 🛠️ Tech Stack

- [Angular 17](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (for fast dev/build)
- [REST API](#api-endpoints) (customizable backend)

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/WorkersFlightsApp.git
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

Visit [http://localhost:4200/](http://localhost:4200/) in your browser.

---

## 🏗️ Build for Production

```bash
ng build
```
The build output will be in the `dist/` directory.

---

## 🧪 Testing

- **Unit tests:**  
  ```bash
  ng test
  ```
- **End-to-end tests:**  
  ```bash
  ng e2e
  ```
  (Requires an e2e test runner to be set up.)

## 🌐 API Endpoints

The app expects a REST API with endpoints like:

- `GET /workers` — List all workers
- `GET /flights/:workerId` — List flights for a worker

You can configure the API base URL in the environment files.

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Need Help?

- For Angular CLI help, see the [Angular CLI docs](https://angular.io/cli).
- For project-specific questions, open an issue or contact the maintainer.
