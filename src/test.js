var wdio = require("webdriverio");
var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};
var browser = wdio.remote(options);

browser
  .init()
  .url("http://oakwoodchapel.co.uk")
  .getTitle().then(function(title) {
    console.log("Title is: " + title);
  })
  .end();
