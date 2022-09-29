const myArgs = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(myArgs[0], (error, response, body) => {
  console.log('error', error);
  console.log('statusCode: ', response );
  const content = body; 
  fs.writeFile(myArgs[1], content, err => {
    if (err) {
      console.error(err);
    }

  const data = fs.readFileSync( myArgs[1], 'utf-8');
  const length = data.length;
  console.log(`Downloaded and saved ${length} bytes to ${myArgs[1]}`);
  })

  

  

})