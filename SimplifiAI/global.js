const AllureReporter = require('nightwatch-allure');
 
module.exports = {
  reporter: (results, done) => {
    const reporter = new AllureReporter.NightwatchAllureReporter({
      outputDir: 'allure-results', // Directory where allure results will be saved
      suiteName: 'LCP Reports',
    });
    reporter.write(results, done);
  },
};
 
