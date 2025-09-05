import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const app = express();
const PORT = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Rohan@25",
  port: 5432,
});

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

db.connect();

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // for CSS/JS if needed

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", (req, res) => {
  res.render("result");
});

app.post("/submit", async (req, res) => {
  const { name, age, rollno } = req.body;
  console.log(name);
  console.log(age);
  console.log(rollno);
  // const user= {
  //     name:name,
  //     age:age,
  //     rollno:rollno,
  // }
  // users.push(user);
  try {
    const query = `
      INSERT INTO students (name, age, rollno)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const result = await db.query(query, [name, age, rollno]);
    console.log(result);
    res.render("index", { student: result.rows[0] });
  } catch (err) {
    console.error("Error inserting student", err.stack);
    res.status(500).send("Database error");
  }
  // res.render("index", { student: user });
});

app.post("/search", async (req, res) => {
  const { name } = req.body;
  console.log(name);
  // let value;
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].name == name) {
  //     value = i;
  //     break;
  //   }
  // }

  try {
    const result = await db.query(
      "SELECT * FROM students WHERE name ILIKE $1",
      [`%${name}%`]
    );
    console.log(result.rows);
    if (result.rows.length > 0) {
      res.render("result", { student: result.rows });
    } else {
      res.send("No student found with that name");
    }
  } catch (err) {
    console.error("Error searching student", err.stack);
    res.status(500).send("Error retrieving data");
  }
  // res.render("result", { student: users[value] });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
