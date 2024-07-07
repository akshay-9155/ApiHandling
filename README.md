# HandleAPI

HandleAPI is a full-stack application designed to demonstrate simple API handling. It includes a frontend built with Vite and React for displaying products, and a backend for serving product data. This project serves as a learning tool for managing API requests, displaying data dynamically, and structuring a full-stack application.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch and display product data from an API
- Search functionality to filter products
- Responsive UI built with React and Vite
- Backend API to serve product data

## Project Structure

HandleAPI

├── backend

│   ├── node_modules/

│   ├── .gitignore

│   ├── index.js

│   ├── package-lock.json

│   └── package.json

├── frontend

│   ├── node_modules/


│   ├── src/

│   │   ├── App.css

│   │   ├── App.jsx

│   │   └── main.jsx

│   ├── .eslint.cjs

│   ├── .gitignore

│   ├── index.html

│   ├── package-lock.json

│   ├── package.json

│   └── vite.config.js

└── .gitignore

## Installation

### Prerequisites

- Node.js and npm installed
- Git installed

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/HandleAPI.git
    cd HandleAPI/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage

1. Ensure the backend server is running.
2. Open the frontend application in your browser, typically at `http://localhost:3000`.
3. Use the search bar to filter products based on their names.
4. View product details, including names, prices, and images.

## API Endpoints

- `GET /api/products`: Fetch all products.
- `GET /api/products?search=<query>`: Fetch products based on a search query.

### Sample Product Data

```json
[
    {
        "id": 1,
        "name": "Laptop",
        "price": 999.99,
        "image": "https://example.com/laptop.jpg"
    },
    {
        "id": 2,
        "name": "Smartphone",
        "price": 699.99,
        "image": "https://example.com/smartphone.jpg"
    }
]
```

## Technologies Used

- **Frontend**: Vite, React, CSS
- **Backend**: Node.js, Express
- **HTTP Client**: Axios

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


