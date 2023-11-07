 function GetName(name){
   setTimeout (()=>{
  console.log(`my name is: , ${name}`);
   },2000)
   return name;
 }


 function setName(name){
   // setTimeout (()=>{
      console.log(`set name is ${name}`);
      //  },1000)
       return name;
    
 };


setName("khalil")
 async function init(){
    let name1 = setName("khalil");
    console.log("init SetName", name1);
    let returnName= await GetName(name1);
    console.log(returnName);
 }


 init()