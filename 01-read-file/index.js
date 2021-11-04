const fs = require('fs');
const path = require('path');
 
fs.readFile(path.resolve('01-read-file', 'text.txt'), 'utf8', 
  function(error,data){
    if(error) throw error; // если возникла ошибка
    console.log(data);  // выводим считанные данные
  });