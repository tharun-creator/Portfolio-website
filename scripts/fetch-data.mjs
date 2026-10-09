import fs from 'fs';

async function main() {
  const res = await fetch('https://github-contributions-api.jogruber.de/v4/tharun-creator?y=last');
  const json = await res.json();
  const items = json.contributions.map((c) => ({ date: c.date, count: c.count }));
  const code = `import { ContributionDay } from "@/components/ui/contribution-skyline";\n\nexport const tharunRealContributions: ContributionDay[] = ${JSON.stringify(items, null, 2)};\n`;
  fs.writeFileSync('lib/tharun-contributions-data.ts', code);
  console.log(`Saved ${items.length} contribution days for tharun-creator.`);
}

main().catch(console.error);
