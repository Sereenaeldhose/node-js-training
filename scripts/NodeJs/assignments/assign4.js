const fs = require("node:fs");

(copyContent = () => {
  const readableStream = fs.createReadStream("./FileToCopy/text1.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
  });

  const writeableStream = fs.createWriteStream("./FileToCopy/text2.txt");
  readableStream.pipe(writeableStream);
})();
