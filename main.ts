// One Word, One Username, One Reward
// Writes the entrant's own make.fun username — one word, nothing else —
// to /output/entry.txt. Pure Node stdlib, deterministic, no network.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "dewi-anjani";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true, mode: 0o755 });
  const file = join(outDir, "entry.txt");
  writeFileSync(file, USERNAME, { encoding: "utf8", mode: 0o644 });
  try {
    chmodSync(outDir, 0o755);
  } catch {
    // Directory permissions are best-effort; the file itself is what matters.
  }
  try {
    chmodSync(file, 0o644);
  } catch {
    // File permissions are best-effort.
  }
}

main();
