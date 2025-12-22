import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const templates = {
  fizzbuzz: `export function solution() {\n    // Your code here.\n}\n`,
  triangle: `export function solution() {\n    // Your code here.\n}\n`,
  chessboard: `export function solution() {\n    // Use this value when writing the solution. \n    const SIZE = 8; \n\n    // Your code here.\n}\n`,
};

function resetOne(key) {
  const template = templates[key];
  if (!template) {
    throw new Error(`Unknown exercise key: ${key}`);
  }
  const target = path.join(__dirname, `${key}-solution.js`);
  writeFileSync(target, template, 'utf8');
  console.log(`Reset ${key} solution -> ${target}`);
}

function main() {
  const arg = process.argv[2];
  if (arg) {
    resetOne(arg);
    return;
  }
  Object.keys(templates).forEach(resetOne);
}

main();
