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
            dueDate text,
            assignedTo text,
            status text,
            leftColor text,
            rightColor text
            )`,
        (err) => {
            return;
        });
        
        var insert = 'INSERT INTO tasks (title, description, dueDate, assignedTo, status, leftColor, rightColor) VALUES (?,?,?,?,?,?,?)'
        db.run(insert, ["Tarea Test Hoho", "Este es un intento", "14/10/2021", "Felipe Marin", "EN PROCESO", "#A74CF2", "#617BFB"])
    }
})

export default db