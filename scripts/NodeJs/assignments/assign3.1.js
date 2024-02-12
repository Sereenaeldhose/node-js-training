const fs = require("fs");
const logging = require("./assign2");
const path = require("path");

deleteFiles =  (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        console.error("Directory does not exist.");
        return;
      }
   fs.readdir(dirPath, (error, files) => {
    if (error) {
      logging.getError(error);
    }
    files.forEach((file) => {
      fs.rm(path.join(dirPath, file), { recursive: true }, (err) => {
        if (err) {
          logging.getError(err);
          return;
        }
        logging.getInfo(`Sucessfully removed ${file} from folder ${dirPath}`);
      });
    });
  });
};
deleteFiles("textFolder");
