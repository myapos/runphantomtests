// Install firefox-profile package
//npm install firefox-profile

var webdriver = require('selenium-webdriver');
// Input capabilities
var capabilities = {
 'browserName' : 'Chrome',
 'browser_version' : '61.0',
 'os' : 'Windows',
 'os_version' : '7',
 'resolution' : '1024x768',
 'chromeOptions' : {
    'args' : ["--incognito"]
  },
 'browserstack.user' : 'myronapostolakis1',
 'browserstack.key' : 'L2BxjLn5EftaAzb5BMnq'
}
for (i=1; i<100; i++ ) {
  
  var driver = new webdriver.Builder().
    usingServer('http://hub-cloud.browserstack.com/wd/hub').
    withCapabilities(capabilities).
    build();

  driver.get('http://www.adman.gr');
  // var element = driver.findElement(webdriver.By.id('footer'));
  // console.log(element.innerHTML);
  // driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
  // driver.findElement(webdriver.By.name('btnG')).click();

  driver.getTitle().then(function(title) {
    console.log(title);
  });

  driver.quit();
}