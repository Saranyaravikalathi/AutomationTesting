module.exports = {
    'Select dropdown option': function (browser) {
      browser
        .url('https://testautomationpractice.blogspot.com/') 
        .pause(3000)
        .setValue('//select[@id="country"]', 'india') 
        .pause(1000)
        .end();
    }
  };
  