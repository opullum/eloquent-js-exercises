import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const templates = {
  deepcompare: `export function deepEqual(a, b) {\n  // Your code here.\n}\n\n`,
  list: `export function arrayToList(array) {\n  // Your code here.\n}\n\nexport function listToArray(list) {\n  // Your code here.\n}\n\nexport function prepend(value, list) {\n  // Your code here.\n}\n\nexport function nth(list, n) {\n  // Your code here.\n}\n\n`,
  rangesum: `export function range(start, end, step = start < end ? 1 : -1) {\n  // Your code here.\n}\n\nexport function sum(array) {\n  // Your code here.\n}\n\n`,
  reversal: `export function reverseArray(array) {\n  // Your code here.\n}\n\nexport function reverseArrayInPlace(array) {\n  // Your code here.\n}\n\n`,
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
