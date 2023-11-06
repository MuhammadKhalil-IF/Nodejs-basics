let test=new Promise((res,rej)=>{
    let req="true";
    if (req === "true"){
        res("working ")
    }

})


test.then(
    (value)=>{
        console.log("kskfkdsjfsk")
    }
);