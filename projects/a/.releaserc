const { dest } = require("./ng-package.json");

module.exports = {
  extends: "semantic-release-monorepo",
  branches: ["main", "next"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        pkgRoot: dest,
        tarballDir: dest,
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "package.json",
          "../../package.json",
          "../../package-lock.json",
          "CHANGELOG.md",
        ],
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [`${dest}/*.tgz`],
      },
    ],
  ],
};
