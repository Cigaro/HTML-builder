const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

writefile();
function writefile(){
  rl.question('Write text: ', (answer) => {
    if(answer === 'exit') {
      console.log('By');
      rl.close();
      return;}
    fs.appendFile(path.resolve('02-write-file', 'text.txt'),' ' + answer, function(error){
      if(error) throw error;});
    writefile();
  });
  
}


