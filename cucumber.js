// cucumber.js
const isCI = process.env.CI !== undefined;

module.exports = {
  default: {
    format: ['json:reports/cucumber_report.json'],
    require: [
      'features/support/**/*.ts',
      'features/step_definitions/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    paths: [
      'features/*.feature'
    ],
    worldParameters: {
      playwright: {
        launchOptions: {
          headless: true, // Force headless mode for the container
          slowMo: isCI ? 0 : 1000
        },
        contextOptions: {
          baseURL: 'https://www.ecosia.org/',
          viewport: { width: 1280, height: 720 },
        }
      }
    }
  },
};
