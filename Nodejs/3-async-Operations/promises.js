// let test=new Promise((res,rej)=>{
//     let req="true";
//     if (req === "true"){
//         res("working ")
//     }

// })


// test.then(
//     (value)=>{
//         console.log(value)
//     }
// );





/***Second Way to Handle Promise ***/
function testing(){
    setTimeout(()=>{
        console.log("i am working from the testing");
    },3000)
}
function PromiseTesting(){
   return new Promise((res,rej)=>{
    let data=300;
        res("resolved");
        setTimeout(()=>{
            console.log("i am working from the PromiseTesting")
        },5000)
        return data;
    })




}


PromiseTesting().then((value)=>{
    testing();
    console.log(value)
})