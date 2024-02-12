const fs = require("node:fs");
const logging = require("./assign2");

(copyContent =  () => {
  const readableStream =   fs.createReadStream("./FileToCopy/text1.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
  });
  const writeableStream =   fs.createWriteStream("./FileToCopy/text2.txt");
    readableStream.pipe(writeableStream);
  logging.getInfo("Successfully copied data!");
 
  writeableStream.on("close", ()=>{
    fs.createReadStream("./FileToCopy/text1.txt", {
        encoding: "utf-8",
        highWaterMark: 100,
      }).on("data", (data)=>{
        logging.getInfo(data);
      })
  })
})();

