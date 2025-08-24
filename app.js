import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // for CSS/JS if needed

app.use(bodyParser.urlencoded({extended:true}));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req,res)=>{
    const {name, age, rollno} = req.body;
    console.log(name);
    console.log(age);
    console.log(rollno);
    const user= {
        name:name,
        age:age,
        rollno:rollno,  
    }
    res.render("result", {student:user});
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
