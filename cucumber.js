module.exports = {
  default: {
    format: ['json:reports/cucumber_report.json'],
    require: [
      'features/support/**/*.ts', // Load the custom world and hooks
      'features/step_definitions/**/*.ts' // Load step definitions
    ],
    requireModule: ['ts-node/register'], // Use ts-node to run TypeScript
    paths: [
      'features/*.feature'
    ],
  },
};
