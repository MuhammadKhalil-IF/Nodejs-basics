 const EventEmitter=require('events');
 const eventCreation =new EventEmitter();


 function createEevent(callback){
    eventCreation.on("my_Event",()=>{
        console.log("event fire");
     })
     console.log(' Event created ');
     callback();
 }

 function Emiting(){
    const result=eventCreation.emit("my_Event");
    console.log('Listing event',result);

 }


 createEevent(Emiting);