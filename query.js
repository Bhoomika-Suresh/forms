//to create a database table

// CREATE TABLE students (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100),
//   age INT,
//   rollno VARCHAR(50)
// );


//to INSERT data into the table
// try {
//     const query = `
//       INSERT INTO students (name, age, rollno)
//       VALUES ($1, $2, $3)
//     `;
//     await db.query(query, [name, age, rollno]);
//     res.send('Student added successfully!');
//   } catch (err) {
//     console.error("Error inserting student", err.stack);
//     res.status(500).send('Database error');
//   }



// Search route
//     try {
//         const result = await db.query(
//             "SELECT * FROM students WHERE name ILIKE $1",
//             [`%${name}%`]
//         );

//         if (result.rows.length > 0) {
//             res.render('result', { users: result.rows });
//         } else {
//             res.send("No student found with that name");
//         }
//     } catch (err) {
//         console.error("Error searching student", err.stack);
//         res.status(500).send("Error retrieving data");
//     }



