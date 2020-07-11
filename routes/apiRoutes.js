const Workout = require("../models/workout.js");
const mongoose = require("mongoose");

module.exports = function(app){
    app.get("/api/workouts",(req,res)=>{
        Workout.find({}).then(data=>{
            res.json(data);
        });
    });
    app.put("/api/workouts/:id",(req,res)=>{
        Workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}})
        .then((data)=>{
                res.json(data)
            }
        ).catch(err=>{
            res.json(err);
        })
    });
    app.post("/api/workouts", (req,res)=>{
        Workout.create({}).then(data=>{
            res.json(data);
        });
    });
    app.get("/api/workouts/range",(req,res)=>{
        // sending only last 7 workouts with .limit(7)
        Workout.find({}).limit(7).then(data=>{
            res.json(data);
        });
    });
}
