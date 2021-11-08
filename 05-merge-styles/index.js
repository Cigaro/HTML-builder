const fs = require('fs');
const path = require('path');
const readFrom = ['05-merge-styles/styles', '05-merge-styles/project-dist']; // из какой папки нужно всё прочитать

function delBundle(read){
  fs.readdir(read, (err, files) => {
    if(err) throw err;
    for(let i = 0; i< files.length; i++){
      if(files[i] === 'bundle.css'){
        fs.unlink(read + '/' + files[i],function(err){
          if(err) return console.log(err);
        }); }
      else listObjects(readFrom[0]);
    }
  });}

function fileStats(file){
  fs.stat(file, (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
      if(stats.isFile() && path.extname(file).substr(1) === 'css') writeCss(file);
      else
        return;
    }
  });
}

function listObjects(read){
  fs.readdir(read, (err, files) => {
    if(err) throw err;
    for(let i = 0; i< files.length; i++){
      const a = '/';
      let adrees = read + a +files[i];
      fileStats(adrees);
    }
  });}


function writeCss(file){
  fs.readFile(file, 'utf8', 
    function(error,data){
      if(error) throw error; // если возникла ошибка
      fs.appendFile(path.resolve('05-merge-styles/project-dist', 'bundle.css'),' ' + data, function(error){
        if(error) throw error;});
    });
}

delBundle(readFrom[1]);
