const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  const options = {
    webpackOptions: {
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config,
              },
            ],
          },
        ],
      },
    },

  };

  on('file:preprocessor', webpackPreprocessor(options));

  return config;
}

module.exports = defineConfig({
  setupNodeEvents,
  e2e: {
    baseUrl: "https://www.google.com/",
    specPattern: "**/*.feature",
    setupNodeEvents,
  }
});
