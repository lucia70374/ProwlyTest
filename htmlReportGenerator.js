const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json', // Path to the JSON output file
    output: 'reports/cucumber_report.html',  // Desired HTML output file
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    storeScreenshots: true,
};

reporter.generate(options);
