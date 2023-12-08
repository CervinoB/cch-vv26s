const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 5,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
