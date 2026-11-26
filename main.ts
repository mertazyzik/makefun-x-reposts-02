// Entry program for make.fun's "Get the most reposts and likes on make.fun's
// newest X posts" bounty (makefun-x-reposts-02).
//
// The entry itself is not this program: it is the posts on X that POSTS.json
// names. Each of those posts quotes, or replies directly to, a different one
// of @makefunai's newest posts, all from one public X account, each carrying
// make.fun (a link or written out) and/or @makefunai plus the entrant's play
// code in its own words. The house reads the posts from X and scores them:
// 2 points per repost, 2 per quote, 1 per like, summed over all of them.
//
// All this program does is hand POSTS.json to the grader: it copies the file
// from the repository root into the output directory, byte for byte, and
// exits 0. It uses only the Node standard library, reads nothing from the
// network, the clock, or the environment beyond the two directory overrides
// below, so two runs always write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(repoRoot, "POSTS.json");
const target = join(outDir, "POSTS.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POSTS.json from ${repoRoot}: ${(error as Error).message}`);
  process.exit(1);
}
