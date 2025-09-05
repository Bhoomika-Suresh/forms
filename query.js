//to create a database table

// CREATE TABLE students (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100),
//   age INT,
//   rollno VARCHAR(50)
// );


//to INSERT data into the table
// app.post('/submit', async (req, res) => {
//   const { name, age, rollno } = req.body;

//   try {
//     const query = `
//       INSERT INTO students (name, age, rollno)
//       VALUES ($1, $2, $3)
//       RETURNING *
//     `;
//     const result = await pool.query(query, [name, age, rollno]);
//     res.render('studentForm', { student: result.rows[0] });
//   } catch (err) {
//     console.error("Error inserting student", err.stack);
//     res.status(500).send('Database error');
//   }
// });


// Search route
// app.post('/search', async (req, res) => {
//   const { name } = req.body;

//   try {
//     const result = await pool.query(
//       "SELECT * FROM students WHERE name ILIKE $1",
//       [`%${name}%`]
//     );

//     if (result.rows.length > 0) {
//       res.render('searchResult', { users: result.rows });
//     } else {
//       res.send("No student found with that name");
//     }
//   } catch (err) {
//     console.error("Error searching student", err.stack);
//     res.status(500).send("Error retrieving data");
//   }
// });


// Show all students
// app.get('/all', async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM students ORDER BY id ASC");
//     res.render('searchResult', { users: result.rows });
//   } catch (err) {
//     console.error("Error fetching all students", err.stack);
//     res.status(500).send("Error retrieving data");
//   }
// });
