import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5001/api/names";

  const fetchNames = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.success) {
        setNames(data.names);
      } else {
        setError(data.message || "Failed to fetch names");
      }
    } catch (err) {
      setError("Unable to connect to server");
    }
  }, []);

  useEffect(() => {
    fetchNames();
  }, [fetchNames]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();

      if (data.success) {
        setName("");
        fetchNames();
      } else {
        setError(data.message || "Failed to add name");
      }
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Hello Names</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-48"
          placeholder="Enter a name"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul className="bg-white shadow rounded p-4 w-64">
        {names.map((n) => (
          <li key={n} className="border-b py-1">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;