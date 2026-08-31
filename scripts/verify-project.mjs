import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const routes = readFileSync(join(root, "src/app/routes.ts"), "utf8");
assert.match(routes, /path: "\/docs"/);
assert.match(routes, /path: "\/downloads"/);
assert.match(routes, /path: "\/docs\/reference\/:slug"/);

const docsDir = join(root, "src/pages/docs/docs");
assert.ok(readdirSync(docsDir).filter((file) => file.endsWith(".md")).length >= 20);

const manifest = JSON.parse(readFileSync(join(root, "src/shared/config/releases.json"), "utf8"));
assert.equal(manifest.version, "v2.0");
assert.equal(manifest.files.length, 4);
for (const file of manifest.files) {
  const artifact = join(root, "public", file.path.slice(1));
  assert.ok(existsSync(artifact) && statSync(artifact).size > 0, `Missing binary: ${file.name}`);
}
console.log("Project verification passed: routes, docs and release binaries.");
