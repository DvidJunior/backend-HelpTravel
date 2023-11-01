const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pu5pv3",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
});
