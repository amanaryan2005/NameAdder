const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

let names = [];

app.use(cors());
app.use(express.json());

app.post("/api/names", (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Name must be a non-empty string",
    });
  }

  names.push(name.trim());
  return res.status(201).json({
    success: true,
    message: "Name stored successfully",
  });
});

app.get("/api/names", (req, res) => {
  return res.json({
    success: true,
    names,
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
