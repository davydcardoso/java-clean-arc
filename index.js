#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function createDirectory(basePath, dirPath) {
  const fullPath = path.join(basePath, dirPath);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ ${dirPath}`);
  }
}

async function main() {
  console.log("🏗️  Java Clean Architecture Generator\n");

  const packageName = await question("Nome do pacote base (ex: com.empresa.projeto): ");
  const modules = await question("Módulos separados por vírgula (ex: account,customer,payment): ");

  rl.close();

  const moduleList = modules
    .split(",")
    .map((m) => m.trim())
    .filter((m) => m);
  const basePath = process.cwd();
  const srcPath = `src/main/java/${packageName.replace(/\./g, "/")}`;

  console.log("\n📁 Criando estrutura...\n");

  // Criar cada módulo
  moduleList.forEach((module) => {
    const modulePath = `${srcPath}/modules/${module}`;

    // Domain
    createDirectory(basePath, `${modulePath}/domain/entities`);
    createDirectory(basePath, `${modulePath}/domain/repositories`);
    createDirectory(basePath, `${modulePath}/domain/exceptions`);

    // Application
    createDirectory(basePath, `${modulePath}/application/usecases`);
    createDirectory(basePath, `${modulePath}/application/dtos`);

    // Infrastructure
    createDirectory(basePath, `${modulePath}/infrastructure/persistence`);
    createDirectory(basePath, `${modulePath}/infrastructure/http`);
  });

  // Criar shared (fora de modules)
  const sharedPath = `${srcPath}/shared`;

  createDirectory(basePath, `${sharedPath}/domain`);
  createDirectory(basePath, `${sharedPath}/application`);
  createDirectory(basePath, `${sharedPath}/infrastructure/config`);
  createDirectory(basePath, `${sharedPath}/infrastructure/exception`);
  createDirectory(basePath, `${sharedPath}/infrastructure/security`);
  createDirectory(basePath, `${sharedPath}/utils`);

  console.log("\n✅ Estrutura criada com sucesso!");
}

main().catch(console.error);
