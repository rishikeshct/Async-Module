var async = require('async');
var fs = require('fs');


var fileNames= ['file1','file2','file3']


// This callback was missing in the question.
var readAFile = function(fileName, callback) {
    console.log(fileName)
    fs.readFile(fileName,'utf8',function(error, data) {
        if ( error) {
            console.log('oh no file missing')
            return callback(error)
        } else {
            console.log('woo '+fileName+' found');
            console.log(data);
            return callback()
        }
    })
}

async.forEach(fileNames, readAFile, function(error) {
    if ( error) {
        console.log('oh no errors!')
    } else {
        console.log('YAAAAAAY')
    }
})
/*  var read = function (file){
  console.log("dsajda");
  return fs.readFile(file,'utf8');

}
async.map(['file1', 'file2', 'file3'], read(file,callback) , function (err, results) {
    // results is now an array of stats for each file
    if(err){
      console.log(err);
    }
    console.log(results);
});




function stats (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {

      if (err) {
        return reject (err)
      }
      console.log("**********************"+data);
      resolve(data)
    })
  })
}

Promise.all([
  stats('file1'),
  stats('file2'),
  stats('file3')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))*/

console.log("rishi");
