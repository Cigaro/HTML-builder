const fs = require('fs');
const copyFrom = '04-copy-directory/files';
const copyTo = '04-copy-directory/files-copy/';



function copyFile(file, way){
  console.log(file);
  fs.copyFile(file, way, err => {
    if(err) throw err; // не удалось скопировать файл
    console.log('Файл успешно скопирован');
  });
}


function mkDir(){
  fs.mkdir('04-copy-directory/files-copy', err => {
    if(err) {
      if (err.errno === -4075){
        console.log('hi');
        return listObjects();
      } else throw err;
    } else  listObjects();
  });
}

function listObjects(){
  fs.readdir(copyFrom, (err, files) => {
    if(err) throw err;
    for(let i = 0; i< files.length; i++){
      const a = '/';
      let adrees = copyFrom + a +files[i];
      let adreesTo = copyTo + a + files[i];
      copyFile(adrees, adreesTo);
    }
  });}
mkDir();