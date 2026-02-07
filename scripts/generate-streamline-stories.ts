#!/usr/bin/env bun
/**
 * Generate Storybook stories for organized Streamline icons.
 *
 * Scans public/icons/streamline/{regular,light}/ and generates one .stories.tsx
 * per main category, with named story exports for each subcategory.
 *
 * Output: src/components/icons/streamline/<Category>.stories.tsx
 */

import { existsSync, readdirSync, writeFileSync, rmSync } from "fs";
import { join } from "path";

const PROJECT_ROOT = join(import.meta.dirname!, "..");
const ICONS_DIR = join(PROJECT_ROOT, "public", "icons", "streamline");
const STORIES_DIR = join(PROJECT_ROOT, "src", "components", "icons", "streamline");

/** Convert "interface-essential" → "Interface Essential" */
function humanizeCategory(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Convert "interface-essential" → "InterfaceEssential" */
function toPascalCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

interface SubcategoryData {
  slug: string;
  displayName: string;
  exportName: string;
  categoryPath: string;
  regularIcons: string[];
  lightIcons: string[];
}

interface CategoryData {
  slug: string;
  displayName: string;
  subcategories: SubcategoryData[];
}

function listDirs(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

function listPngs(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort();
}

function buildCategoryTree(): CategoryData[] {
  const regularDir = join(ICONS_DIR, "regular");
  const lightDir = join(ICONS_DIR, "light");

  const categories: CategoryData[] = [];

  for (const catSlug of listDirs(regularDir)) {
    const subcategories: SubcategoryData[] = [];
    const regularCatDir = join(regularDir, catSlug);
    const lightCatDir = join(lightDir, catSlug);

    // Collect all subcategory slugs from both regular and light
    const subSlugs = new Set<string>();
    for (const s of listDirs(regularCatDir)) subSlugs.add(s);
    for (const s of listDirs(lightCatDir)) subSlugs.add(s);

    for (const subSlug of [...subSlugs].sort()) {
      const regularIcons = listPngs(join(regularCatDir, subSlug));
      const lightIcons = listPngs(join(lightCatDir, subSlug));

      if (regularIcons.length === 0 && lightIcons.length === 0) continue;

      // Ensure unique export name within category
      let exportName = toPascalCase(subSlug);
      // Prefix with underscore if starts with digit (shouldn't happen after normalization, but safety)
      if (/^\d/.test(exportName)) exportName = `_${exportName}`;

      subcategories.push({
        slug: subSlug,
        displayName: humanizeCategory(subSlug),
        exportName,
        categoryPath: `${catSlug}/${subSlug}`,
        regularIcons,
        lightIcons,
      });
    }

    if (subcategories.length === 0) continue;

    categories.push({
      slug: catSlug,
      displayName: humanizeCategory(catSlug),
      subcategories,
    });
  }

  return categories;
}

function generateStoryFile(cat: CategoryData): string {
  const lines: string[] = [];

  lines.push(`import type { Meta, StoryObj } from '@storybook/react';`);
  lines.push(`import { StreamlineIconGrid } from './StreamlineIconGrid';`);
  lines.push(``);

  // Meta
  lines.push(`const meta = {`);
  lines.push(`  title: 'Icons/Streamline/${cat.displayName}',`);
  lines.push(`  component: StreamlineIconGrid,`);
  lines.push(`  parameters: {`);
  lines.push(`    layout: 'fullscreen',`);
  lines.push(`    docs: {`);
  lines.push(`      description: {`);
  lines.push(`        component: [`);
  lines.push(`          '## Streamline Icons — ${cat.displayName}',`);
  lines.push(`          '',`);
  lines.push(`          '100,000+ icons by [Streamline](https://streamlinehq.com). Free under [CC Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (linkware).',`);
  lines.push(`          '',`);
  lines.push(`          'Showing 96px PNG variants in Regular${cat.slug === 'interface-essential' ? ' and Light' : ''} styles.',`);
  lines.push(`        ].join('\\n'),`);
  lines.push(`      },`);
  lines.push(`    },`);
  lines.push(`  },`);
  lines.push(`  tags: ['autodocs'],`);
  lines.push(`} satisfies Meta<typeof StreamlineIconGrid>;`);
  lines.push(``);
  lines.push(`export default meta;`);
  lines.push(`type Story = StoryObj<typeof meta>;`);
  lines.push(``);

  // Deduplicate export names within this category
  const usedNames = new Set<string>();
  for (const sub of cat.subcategories) {
    let name = sub.exportName;
    if (usedNames.has(name)) {
      let i = 2;
      while (usedNames.has(`${name}${i}`)) i++;
      name = `${name}${i}`;
    }
    usedNames.add(name);

    lines.push(`export const ${name}: Story = {`);
    lines.push(`  args: {`);
    lines.push(`    subcategoryName: ${JSON.stringify(sub.displayName)},`);
    lines.push(`    categoryPath: ${JSON.stringify(sub.categoryPath)},`);
    lines.push(`    regularIcons: ${JSON.stringify(sub.regularIcons)},`);
    lines.push(`    lightIcons: ${JSON.stringify(sub.lightIcons)},`);
    lines.push(`  },`);
    lines.push(`};`);
    lines.push(``);
  }

  return lines.join("\n");
}

function main() {
  console.log("=== Streamline Story Generator ===\n");

  if (!existsSync(ICONS_DIR)) {
    console.error(`Icons directory not found: ${ICONS_DIR}`);
    console.error("Run setup-streamline-icons.ts first.");
    process.exit(1);
  }

  // Clean previously generated story files (but not the component/css)
  const existingStories = readdirSync(STORIES_DIR).filter((f) =>
    f.endsWith(".stories.tsx")
  );
  for (const f of existingStories) {
    rmSync(join(STORIES_DIR, f));
    console.log(`  Removed old: ${f}`);
  }

  const categories = buildCategoryTree();

  let totalStories = 0;
  let totalFiles = 0;

  for (const cat of categories) {
    const content = generateStoryFile(cat);
    const filename = `${toPascalCase(cat.slug)}.stories.tsx`;
    writeFileSync(join(STORIES_DIR, filename), content);
    totalFiles++;
    totalStories += cat.subcategories.length;
    console.log(
      `  Generated: ${filename} (${cat.subcategories.length} stories)`
    );
  }

  console.log(`\n=== Done! ===`);
  console.log(`Categories: ${totalFiles}`);
  console.log(`Total stories: ${totalStories}`);
}

main();
