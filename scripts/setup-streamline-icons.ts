#!/usr/bin/env bun
/**
 * Extract and organize Streamline Icons from the downloaded ZIP archive.
 *
 * Source: ~/Downloads/Streamline_All_Icons_PNG.zip
 * Extracts only 96w PNGs for both Light and Regular styles.
 *
 * Output structure:
 *   public/icons/streamline/regular/<category>/<subcategory>/<icon>.png
 *   public/icons/streamline/light/interface-essential/<subcategory>/<icon>.png
 *
 * Directory names are normalized: number prefixes stripped, lowercased, spaces→hyphens.
 */

import { $ } from "bun";
import { existsSync, mkdirSync, readdirSync, cpSync, rmSync, statSync } from "fs";
import { join, basename, dirname } from "path";

const ZIP_PATH = join(process.env.HOME!, "Downloads", "Streamline_All_Icons_PNG.zip");
const PROJECT_ROOT = join(import.meta.dirname!, "..");
const OUTPUT_DIR = join(PROJECT_ROOT, "public", "icons", "streamline");
const TEMP_DIR = join(PROJECT_ROOT, ".tmp-streamline-extract");

function normalizeName(name: string): string {
  return name
    .replace(/^\d+-\s*/, "") // strip leading "01- " or "01-"
    .toLowerCase()
    .replace(/\s+/g, "-")   // spaces to hyphens
    .replace(/[^a-z0-9\-]/g, ""); // remove special chars (keep alphanumeric + hyphens)
}

function walkPngs(dir: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkPngs(full));
    } else if (entry.name.endsWith(".png")) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  console.log("=== Streamline Icons Setup ===\n");

  // Verify ZIP exists
  if (!existsSync(ZIP_PATH)) {
    console.error(`ZIP not found at: ${ZIP_PATH}`);
    process.exit(1);
  }

  // Clean previous runs
  if (existsSync(TEMP_DIR)) {
    console.log("Cleaning previous temp directory...");
    rmSync(TEMP_DIR, { recursive: true });
  }
  if (existsSync(OUTPUT_DIR)) {
    console.log("Cleaning previous output directory...");
    rmSync(OUTPUT_DIR, { recursive: true });
  }

  mkdirSync(TEMP_DIR, { recursive: true });

  // Extract only 96w paths from the ZIP
  console.log("Extracting 96w icons from ZIP (this may take a moment)...");
  await $`unzip -q -o ${ZIP_PATH} "PNG Icons/*/96w/*" -d ${TEMP_DIR}`;

  const pngIconsDir = join(TEMP_DIR, "PNG Icons");
  if (!existsSync(pngIconsDir)) {
    console.error("Expected 'PNG Icons' directory not found after extraction.");
    process.exit(1);
  }

  let totalCopied = 0;

  // Process Regular icons (2-level: category/subcategory/96w/*.png)
  const regularSrc = join(pngIconsDir, "02- Regular");
  if (existsSync(regularSrc)) {
    console.log("\nProcessing Regular style icons...");
    for (const catEntry of readdirSync(regularSrc, { withFileTypes: true })) {
      if (!catEntry.isDirectory()) continue;
      const catNorm = normalizeName(catEntry.name);
      const catDir = join(regularSrc, catEntry.name);

      for (const subEntry of readdirSync(catDir, { withFileTypes: true })) {
        if (!subEntry.isDirectory()) continue;
        const subNorm = normalizeName(subEntry.name);
        const srcDir96 = join(catDir, subEntry.name, "96w");
        if (!existsSync(srcDir96)) continue;

        const destDir = join(OUTPUT_DIR, "regular", catNorm, subNorm);
        mkdirSync(destDir, { recursive: true });

        for (const file of readdirSync(srcDir96)) {
          if (!file.endsWith(".png")) continue;
          cpSync(join(srcDir96, file), join(destDir, file));
          totalCopied++;
        }
      }
    }
  }

  // Process Light icons (1-level: subcategory/96w/*.png → light/interface-essential/<sub>/)
  const lightSrc = join(pngIconsDir, "01- Light");
  if (existsSync(lightSrc)) {
    console.log("Processing Light style icons...");
    for (const subEntry of readdirSync(lightSrc, { withFileTypes: true })) {
      if (!subEntry.isDirectory()) continue;
      const subNorm = normalizeName(subEntry.name);
      const srcDir96 = join(lightSrc, subEntry.name, "96w");
      if (!existsSync(srcDir96)) continue;

      const destDir = join(OUTPUT_DIR, "light", "interface-essential", subNorm);
      mkdirSync(destDir, { recursive: true });

      for (const file of readdirSync(srcDir96)) {
        if (!file.endsWith(".png")) continue;
        cpSync(join(srcDir96, file), join(destDir, file));
        totalCopied++;
      }
    }
  }

  // Cleanup temp
  console.log("\nCleaning up temp directory...");
  rmSync(TEMP_DIR, { recursive: true });

  // Summary
  const regularCats = existsSync(join(OUTPUT_DIR, "regular"))
    ? readdirSync(join(OUTPUT_DIR, "regular")).length
    : 0;
  const lightCats = existsSync(join(OUTPUT_DIR, "light"))
    ? readdirSync(join(OUTPUT_DIR, "light")).length
    : 0;

  console.log(`\n=== Done! ===`);
  console.log(`Total icons copied: ${totalCopied}`);
  console.log(`Regular categories: ${regularCats}`);
  console.log(`Light categories: ${lightCats} (interface-essential only)`);
  console.log(`Output: ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
