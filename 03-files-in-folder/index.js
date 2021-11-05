const fs = require('fs');
const path = require('path');
const readFrom = '03-files-in-folder/secret-folder'; // из какой папки нужно всё прочитать

function fileStats(file, name){
  fs.stat(file, (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
      if(stats.isFile()) console.log(path.parse(file).name,' - ', path.extname(file).substr(1),' - ', stats['size']);
      else
        return;
    }
  });
}

function listObjects(){
  fs.readdir(readFrom, (err, files) => {
    if(err) throw err;
    for(let i = 0; i< files.length; i++){
      const a = '/';
      let adrees = readFrom + a +files[i];
      fileStats(adrees, files[i]);
    }
  });}
listObjects();