'use strict'
import db from '../config/database'

class TaskRepo {
    static index(req, res){
        var sql = "select * from tasks"
        db.all(sql, (err, exercises) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json(exercises)
          });
    }

    static store(req, res){
        const { title, description, dueDate, assignedTo, status, leftColor, rightColor } = req.body
        const SQL = 'INSERT INTO tasks (title, description, dueDate, assignedTo, status, leftColor, rightColor) VALUES (?,?,?,?,?,?,?)'
        const params = [title, description, dueDate, assignedTo, status, leftColor, rightColor]        
        db.run(SQL, params, function (err) {
            if (err){
                res.status(500).json({'error': err.message})
                return;
            }
            req.body.id = this.lastID
            res.json({
                'task': req.body
            })
        })
    }

    static details(req, res){
        var sql = "select * from tasks where id = ?"
        
        db.get(sql, req.params.id, (err, task) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json({
                task
            })
        });
    }
}

export default TaskRepo
