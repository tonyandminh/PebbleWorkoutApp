Pebble.addEventListener("ready", function(event){
    console.log("Ready");
    
    //var myWorkoutJSON = JSON.parse();
    
    var request = new XMLHttpRequest();
   request.open("GET", "src/js/workouts.json", false);
   request.send(null);
   var workoutsJSONObj = JSON.parse(request.responseText);
   console.log (workoutsJSONObj.Workouts);
    
    
    var text = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';
    
    var obj = JSON.parse(text);
    console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
});

Pebble.addEventListener("appmessage", function(event){
    console.log("Hello");
});
