// scripts/generate-report.js
const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/cucumber_report.json'),
    output: path.join(__dirname, '../reports/cucumber_report.html'),
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "Test Environment": process.env.NODE_ENV || "CI"
    }
};

reporter.generate(options);
