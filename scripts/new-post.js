// Usage: npm run new-post "My Post Title"
import fs from "node:fs";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new-post "My Post Title"');
  process.exit(1);
}
const date = new Date().toISOString().slice(0, 10);
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const file = `src/blog/posts/${date}-${slug}.md`;
if (fs.existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}
fs.writeFileSync(
  file,
  `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndate: ${date}\nmath: true\ndraft: true   # remove this line to publish\n---\n\nWrite here. Use $x^2$ for inline math and $$ ... $$ for display math.\n`
);
console.log(`Created ${file}`);
