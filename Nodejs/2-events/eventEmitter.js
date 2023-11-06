const express=require('express');
const EventEmitter=require('events')
const app=express();
const event=new EventEmitter();
let count=0; 
event.on("Default",()=>{
  count++
     console.log(count);

})

app.get('/',(req,res)=>{
 res.send("Default Route api"); 
 event.emit("Default") 
   }) 


app.get('/search',(req,res)=>{
    res.send("Search api");  
   }) 

   
   app.get('/update',(req,res)=>{
    res.send("Update api");  
   }) 
   


app.listen(5000,()=>{
    console.log("hello");

})



