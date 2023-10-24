const Path =require('path');

console.log(__filename);

//base file name
 console.log(Path.basename(__filename));


//dir name
console.log(Path.dirname (__filename));


// extention 
console.log(Path.extname(__filename)); 


//create Path objects
console.log(Path.parse(__filename));
console.log(Path.parse(__filename).base);  



//concate the path 
// /Users/muhammadkhalil/Desktop/Async-Javascript/Nodejs/reference
console.log(Path.join(__dirname,'Nodejs','reference'));

