import { RecipeBuilder } from "@blitzjs/installer";
import { join } from "path";

export default RecipeBuilder()
  .setName("Elastic UI")
  .setDescription(
    `This will install all necessary dependencies and configure Elastic UI for use.`
  )
  .setOwner("carter@timetrackify.com")
  .setRepoLink("https://github.com/timetrackify/blitz-recipe-eui")
  .addAddDependenciesStep({
    stepId: "addDeps",
    stepName: "npm dependencies",
    explanation: `Elastic UI requires a few dependencies to package properly.`,
    packages: [
      { name: "@elastic/eui", version: "32.1.0" },
      { name: "@elastic/datemath", version: "5.0.3" },
      { name: "glob", version: "7.1.6" },
      { name: "@next/bundle-analyzer", version: "10.1.3", isDevDep: true },
      { name: "copy-webpack-plugin", version: "6.3.2", isDevDep: true },
      { name: "iniparser", version: "1.0.5", isDevDep: true },
      { name: "null-loader", version: "4.0.1", isDevDep: true },
    ],
  })
  .addNewFilesStep({
    stepId: "addConfig",
    stepName: "Config files",
    explanation: `Adds a starter blitz.config.js. NOTE: this will replace your existing blitz.config.js and babel.config.js files. Make sure it is backed up if this isn't a new project.`,
    targetDirectory: ".",
    templatePath: join(__dirname, "templates", "config"),
    templateValues: {},
  })
  .addNewFilesStep({
    stepId: "addHighlight",
    stepName: "Add Highlight.js",
    explanation: `Adds a highlightjs config.`,
    targetDirectory: "./lib/",
    templatePath: join(__dirname, "templates", "lib"),
    templateValues: {},
  })
  .build();
