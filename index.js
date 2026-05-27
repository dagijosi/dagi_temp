#!/usr/bin/env node

import prompts from "prompts";
import fsExtra from "fs-extra";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const { copy, readFile, writeFile } = fsExtra;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  // 1️⃣ Ask user for details
  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "What's your project name?",
      initial: "my-app",
    },
    {
      type: "select",
      name: "templateType",
      message: "Choose a template type:",
      choices: [
        { title: "Landing Page", value: "r_q_z_template" },
        { title: "Dashboard", value: "r_q_z_d_template" },
        { title: "Nextjs Landing Page", value: "n_q_z_template" },
      ],
    },
  ]);

  const templatePath = path.join(__dirname, response.templateType);
  const destinationPath = path.join(process.cwd(), response.projectName);

  // 2️⃣ Copy template to destination
  await copy(templatePath, destinationPath);

  // 3️⃣ Edit package.json name field
  const pkgJsonPath = path.join(destinationPath, "package.json");
  try {
    const pkgJson = await readFile(pkgJsonPath, "utf-8");
    // Replace "name" field regardless of which template it came from
    const newPkgJson = pkgJson.replace(
      /"name"\s*:\s*"(r_q_z_template|r_q_z_d_template|n_q_z_template)"/,
      `"name": "${response.projectName}"`
    );
    await writeFile(pkgJsonPath, newPkgJson, "utf-8");
    console.log("✔ package.json updated");
  } catch (err) {
    console.error("❌ Error modifying package.json", err);
  }

  // 4️⃣ Edit index.html title
  const indexHtmlPath = path.join(destinationPath, "index.html");
  try {
    const indexHtml = await readFile(indexHtmlPath, "utf-8");
    // Replace <title>r_q_z_template</title> or <title>r_q_z_d_template</title>
    const newIndexHtml = indexHtml.replace(
      /<title>(r_q_z_template|r_q_z_d_template|n_q_z_template)<\/title>/,
      `<title>${response.projectName}</title>`
    );
    await writeFile(indexHtmlPath, newIndexHtml, "utf-8");
    console.log("✔ index.html updated");
  } catch (err) {
    console.error("❌ Error modifying index.html", err);
  }

  // 5️⃣ Install dependencies
  console.log("\n📦 Installing dependencies...");
  exec(`npm install`, { cwd: destinationPath }, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error installing dependencies: ${error}`);
      return;
    }
    console.log(stdout);
    console.error(stderr);
    console.log("\n🚀 Project setup complete!");
    console.log(`\n➡ cd ${response.projectName}`);
    console.log("➡ npm run dev");
  });
}

main();
