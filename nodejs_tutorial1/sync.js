const fs = require('fs');
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function getFiles(directoryPath) {
    return fs.readdirSync(directoryPath);
}

function printFileContent(directoryPath) {
    getFiles(directoryPath)
        .forEach(file => {
            let fileContent = readFile(directoryPath + '\\' + file);
            console.log(`${file} (${fileContent.length} bytes)\n${fileContent.substr(0, 100)}\n`);
        })
}

printFileContent(`${__dirname}\\assets`);
