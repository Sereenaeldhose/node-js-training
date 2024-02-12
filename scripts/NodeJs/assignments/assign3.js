const fs = require("fs");
const path = require("path");
const logging = require("./assign2");


deleteAllFiles = (dirPath)=>{
    if (!fs.existsSync(dirPath)) {
        console.error('Directory does not exist.');
        return;
    }
  fs.readdir(dirPath,(error,files)=>{
        if(error){
            logging.getError(error);
        }
        files.forEach(file => {
           let filePath = path.join(dirPath,file);
            if(!path.extname(filePath) && fs.statSync(filePath).isDirectory())
           {
            deleteAllFiles(filePath);
           }
           else{
            fs.unlink(filePath,(error)=>{
                if(error){
                    logging.getError(error);
                }
                else{
                    logging.getInfo(`Sucessfully removed ${file} from folder ${dirPath}`);
                }
            })
           }
        });
    })

}
deleteAllFiles("textFolder");

