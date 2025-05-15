// Prompt: Automatically resolve simple merge conflicts using Copilot
const fs = require('fs');

function resolveConflicts(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('<<<<<<<')) {
    const resolved = content.replace(/<<<<<<<[\s\S]*?=======\n/, '')
                            .replace(/>>>>>>>[\s\S]*?\n/, '');
    fs.writeFileSync(filePath, resolved);
    console.log(`Conflicts in ${filePath} auto-resolved`);
  } else {
    console.log("No conflicts found.");
  }
}
