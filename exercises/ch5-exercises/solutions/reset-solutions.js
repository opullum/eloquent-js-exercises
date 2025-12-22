import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const templates = {
  everything: `export function every(array, test) {\n    // Your code here.\n}\n`,
  flattening: `let arrays = [[1, 2, 3], [4, 5], [6]];\nexport function solution() {\n    // Your code here.\n}\n`,
  loop: `export function loop() {\n    // Your code here.\n}\n`,
  writing: `export function dominantDirection(text) {\n    // Your code here.\n}\n`,
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
