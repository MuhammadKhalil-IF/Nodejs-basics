const os=require('os');

// // about platForm
// console.log(os.platform())

// // architect of os
// console.log(os.arch())


// // os cores
// console.log(os.cpus())


// // os cores
// console.log(os.freemem());

function getResult(callback){
    let bytes=os.freemem();
 callback(bytes);
   
}

function formatSizeUnits(bytes){
    if(bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    return bytes + " bytes";

}  

getResult((data)=>{
console.log("this is data :" , data)
    let formattedData = formatSizeUnits(data);
    console.log(formattedData);

});
console.log(os.uptime());


// let data=getResult(formatSizeUnits(data));
// console.log(data)

