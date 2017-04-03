Pebble.addEventListener("ready", function(event){
    //var myWorkoutJSON = JSON.parse();
   var workoutsJSON = require('./workouts.json');
    console.log(workoutsJSON.Workouts.Plyometrics.Moves[0].Name);
    console.log(workoutsJSON.Workouts.Plyometrics.Moves[0].Time);
    
    for(var i = 0; i < workoutsJSON.Workouts.Plyometrics.Moves.length; i++){
        console.log(workoutsJSON.Workouts.Plyometrics.Moves[i].Name);
    console.log(workoutsJSON.Workouts.Plyometrics.Moves[i].Time);
    }
});