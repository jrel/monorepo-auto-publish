const concurrently = require("concurrently");
const { projects } = require("../angular.json");
const { resolve } = require("path");

concurrently(
  Object.keys(projects).map((project) => {
    return {
      command: `yarn:build --project ${project}`,
      name: `Build ${project}`,
    };
  }),
  {
    prefix: "name",
    killOthers: ["failure"],
    cwd: resolve(__dirname, ".."),
  }
);
