function test(){
    setTimeout(()=>{
        console.log("i will available after 2 sec")
    }, 2000)
    return 10;

}


function execFirst(callback){
console.log("i am working ")
callback();
}


execFirst((data)=>{
test(data);
})
// execFirst(test);