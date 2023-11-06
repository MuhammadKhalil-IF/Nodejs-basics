const fs =require('fs');
const Path =require('path');


/**  
    Create New Directory
**/
fs.mkdir('./test',{},(error)=>{
   if(error)throw error;
   console.log("folder created");
   
})

 
/**  
    Create New File
**/
console.log(Path.join(__dirname,"./test",'first_File.txt'));


function writingNewFile(callback){
    fs.writeFile(Path.join(__dirname,"./test",'first_File.txt'),"Hello World",error=>{
        if(error)throw error;
        console.log("file created");
        callback();
        
     })
}

/**  
    Update File
**/
function updatexistingFileData(){
    fs.appendFile(Path.join(__dirname,"./test",'first_File.txt'),"My Name is Khalil",error=>{
        if(error)throw error;
        console.log("file Data Updated");
        
     })
}


/**  
    Read File
**/

fs.writeFile(Path.join(__dirname,"./test",'first_File.txt'),"Hello World",error=>{
    if(error)throw error;
    console.log("file created");
 })


fs.readFile(Path.join(__dirname,"./test",'first_File.txt'),'utf8',(err,data)=>{
    if(err)throw err;
    console.log("Reading File", data  );
    
 })
 


// writingNewFile(updatexistingFileData);