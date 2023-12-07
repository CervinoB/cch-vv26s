const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1000,
    viewportWidth: 1800,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
