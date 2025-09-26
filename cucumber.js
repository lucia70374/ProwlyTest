module.exports = {
  default: {
    format: ['summary'],
    require: [
      'features/support/**/*.ts', // Load the custom world and hooks
      'features/step_definitions/**/*.ts' // Load step definitions
    ],
    requireModule: ['ts-node/register'], // Use ts-node to run TypeScript
  },
};
