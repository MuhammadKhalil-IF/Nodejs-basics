const fs =require('fs');
const Path =require('path');
const EventEmitter=require('events');

let count=0;
const event=new EventEmitter();
event.on("New directory Event triggered",()=>{
    count++
    console.log(count);
});
console.log("File Path", __filename);
console.log("Dir Name ", __dirname);

fs.mkdir(Path.join(__dirname,'main'),{},(err)=>{
 if(err) throw err;
 event.emit("New directory Event triggered");
 fs.writeFile(Path.join(__dirname,'./main','index.txt'),"Hello World",(err)=>{
    if(err) throw err;
 })
 fs.rename(Path.join(__dirname,'./main','index.txt' ),Path.join(__dirname,'./main','main.txt' ),(err, data)=>{
    if(err) throw err;
    console.log("File Renamed");
})
 fs.readFile(Path.join(__dirname,'./main','main.txt'),(err, data)=>{
    if(err) throw err;
    console.log("My File Data is" , data.toString());
})


});


