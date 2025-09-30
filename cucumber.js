module.exports = {
  default: {
    format: ['summary'],
    require: [
      'features/support/**/*.ts',
      'features/step_definitions/**/*.ts'
    ],
    requireModule: ['ts-node/register']
  },
  ci: {
    format: ['summary', 'json:reports/cucumber_report.json'],
    require: [
      'features/support/**/*.ts',
      'features/step_definitions/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    // A longer timeout for the CI environment (e.g., 90 seconds)
    timeout: 90 * 1000,
  },
};

