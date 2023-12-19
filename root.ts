const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'app');
const outputPath = path.join(__dirname, 'file.md');

function listFiles(dir, prefix = '') {
    const files = fs.readdirSync(dir);

    return files.map(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            return `${prefix}- ${file}\n${listFiles(filePath, `${prefix}  `)}`;
        } else {
            return `${prefix}- ${file}`;
        }
    }).join('\n');
}

const content = listFiles(dirPath);
fs.writeFileSync(outputPath, content);