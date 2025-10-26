#!/usr/bin/env node

import prompts from "prompts";
import { copy, readFile, writeFile } from "fs-extra";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "What's your project name?",
      initial: "my-app"
    }
  ]);

  const templatePath = path.join(__dirname, "r_q_z_template");
  const destinationPath = path.join(process.cwd(), response.projectName);

  await copy(templatePath, destinationPath);

  // Edit package.json
  const pkgJsonPath = path.join(destinationPath, 'package.json');
  try {
    const pkgJson = await readFile(pkgJsonPath, 'utf-8');
    const newPkgJson = pkgJson.replace(/"name": "r_q_z_template"/, `"name": "${response.projectName}"`);
    await writeFile(pkgJsonPath, newPkgJson, 'utf-8');
  } catch (err) {
    console.error('Error modifying package.json', err);
  }


  // Edit index.html
  const indexHtmlPath = path.join(destinationPath, 'index.html');
  try {
    const indexHtml = await readFile(indexHtmlPath, 'utf-8');
    const newIndexHtml = indexHtml.replace(/<title>r_q_z_template<\/title>/, `<title>${response.projectName}</title>`);
    await writeFile(indexHtmlPath, newIndexHtml, 'utf-8');
  } catch (err) {
    console.error('Error modifying index.html', err);
  }

  console.log("\nInstalling dependencies...");
  exec(`npm install`, { cwd: destinationPath }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing dependencies: ${error}`);
      return;
    }
    console.log(stdout);
    console.error(stderr);
    console.log("\n🚀 Project setup complete!");
    console.log(`\ncd ${response.projectName}`);
    console.log("npm run dev");
  });
}

main();
