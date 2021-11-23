import sqlite from 'sqlite3'

const DBSOURCE = `db_${process.env.NODE_ENV}.sqlite`

let db = new sqlite.Database(DBSOURCE, (err) => {
    if(err) {
        console.log(err.message)
        throw err
    } else {
        console.log('Connected to SQLite')
        db.run(`CREATE TABLE tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            description text, 
            dueDate numeric,
            assignedTo text,
            status numeric,
            leftColor text,
            rightColor text
            )`,
        (err) => {
            if (!err) {
                // Table just created, creating some rows
                var insert = 'INSERT INTO tasks (title, description, dueDate, assignedTo, status, leftColor, rightColor) VALUES (?,?,?,?,?,?,?)'
                //db.run(insert, ["Technique Guides","Learn amazing street workout and calisthenics","https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06","#A74CF2","#617BFB"])
            }
        });
    }
})

export default db