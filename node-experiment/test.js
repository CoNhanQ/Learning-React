var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
  if (error) { // error if file is not created.
    return console.log(error);
  } else {
    return console.log("Congrats")
  }
})

var myPhotoLocation =  'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg'
https.get(myPhotoLocation, function (response) {  // pipe / save within folder
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
})
