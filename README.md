# Name Capture App 📝

A simple full-stack web application that captures user names and displays them. This project demonstrates the integration between a **React** frontend and a **Node.js/Express** backend.

## 🚀 Features

* **Simple UI:** Clean interface to input text.
* **REST API:** Node.js backend to handle data requests.
* **Real-time Interaction:** React hooks (`useState`, `useEffect`) to manage state.
* **Cross-Origin Resource Sharing:** Configured CORS to allow communication between client and server.

## 🛠️ Tech Stack

**Frontend:**

* React.js
* CSS (or Tailwind/Bootstrap)
* Fetch API / Axios

**Backend:**

* Node.js
* Express.js
* Body-Parser
* Cors

---

## 📂 Project Structure

```bash
root
├── client/          # React Frontend application
│   ├── src/
│   ├── public/
│   └── package.json
└── server/          # Node.js Backend application
    ├── index.js     # Main server entry point
    └── package.json

```

---

## 🏁 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### 1. Setup the Backend (Server)

Navigate to the server directory and install dependencies:

```bash
cd server
npm install

```

Start the server:

```bash
# Standard node command
node index.js

# OR if you use nodemon
npm run dev

```

*The server typically runs on `http://localhost:5000` (or your defined port).*

### 2. Setup the Frontend (Client)

Open a new terminal, navigate to the client directory, and install dependencies:

```bash
cd client
npm install

```

Start the React application:

```bash
npm start
# OR if using Vite
npm run dev

```

*The client typically runs on `http://localhost:3000` (or `5173` for Vite).*

---

## 🔌 API Endpoints

The backend exposes the following endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| **GET** | `/api/names` | Returns a list of all saved names. |
| **POST** | `/api/names` | Accepts a JSON object `{ "name": "John" }` to save a new name. |

---

## ⚙️ Configuration

If you are using environment variables (e.g., specific ports), create a `.env` file in your **server** directory:

```env
PORT=5001


