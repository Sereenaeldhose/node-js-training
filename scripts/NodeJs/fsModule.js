const fs = require("node:fs");

console.log("First");
console.log(fs); // willl display all available fns 
const fileContentBuffer = fs.readFileSync("./textFile.txt"); // will display hex values in the buffer
console.log(fileContentBuffer);

const fileContent = fs.readFileSync("./textFile.txt","utf-8"); // will display human readable form
console.log(fileContent);

console.log("Second");
fs.readFile("./textFile.txt", "utf-8", (error, data)=>{
if(error){
    console.log(error);
}else{
    console.log(data);
}
})

console.log("Third");

// Welcome to File Module Section!
// Second
// Third
// Welcome to File Module Section!
// why this because the readFile is an asyn function 
//so it will allow to execute rest of the code while waiting to finish the read fn



fs.writeFileSync("./text.txt", "Hey Welcome to new File!");  // if no file exists create and write, sync fn

fs.writeFile("./text.txt", "Hey Welcome!", (error)=>{  // owerwrite the existing file content, async fn
    if(error){
        console.log(error);
    }else{
        console.log("File is written");
    }
  
})


fs.writeFile("./text.txt", " Hey Welcome!", {flag : "a"},(error)=>{  // append the existing file content with new value, async fn
    if(error){
        console.log(error);
    }else{
        console.log("File is written");
    }
  
})




// fs Module with Promise
const fs1 = require("node:fs/promises");

console.log("First Log");
fs1.readFile("./text.txt", "utf-8").then((data) => {
    console.log(data); 
}).catch((err) => {
    console.log(err);
});
console.log("Second Log");

// o/p async fn
// First Log
// Second Log
// Hey Welcome!!


(readFn = async()=>
{
    try {
        const data = await fs1.readFile("./text.txt","utf-8");
console.log(data);
console.log("Third Log");
    } catch (error) {
        console.log(error);
    }
} 
)();

console.log("Fourth Log");
// op async await
// First Log
// Second Log
// Fourth Log
// Hey Welcome!!
// Third Log

// fs read.write Stream

const readableStream = fs.createReadStream("./text.txt" ,{
    encoding : "utf-8",
    highWaterMark : 2
})

const writeableStream = fs.createWriteStream("./text2.txt");
readableStream.on("data" , (chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk);

})



// using pipe

const zlip  = require("node:zlib");

const readableStream1 = fs.createReadStream("./text2.txt" ,{
    encoding : "utf-8",
    highWaterMark : 2
})

const writeableStream1 = fs.createWriteStream("./text3.txt");
const gzip = zlip.createGzip();
readableStream1.pipe(writeableStream1);


readableStream1.pipe(gzip).pipe(fs.WriteStream("./text3.txt.gz"));