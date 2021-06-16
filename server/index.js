const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3001;
const pool = require("./db");

console.log(port)

// middleware
app.use(express.json());
app.use(cors());
app.get("/getcars", async (req, res) => {
  const data = await pool.query("SELECT * FROM products")
  // res.send("Welcome to our node server")
  res.json(data)  
})

app.listen(port, () => {
  console.log(`Your server is being hosted on localhost:${port}`);
});