const fs = require('fs');
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', callback);
}

function getFiles(directoryPath, callback) {
    fs.readdir(directoryPath, callback);
}

function printFileContent(directoryPath) {
    getFiles(directoryPath, (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            readFile(directoryPath + '\\' + file, (err, fileContent) => {
                if (err) return console.error(err);
                console.log(`${file} (${fileContent.length} bytes)\n${fileContent.substr(0,100)}\n`);
            });
        })
    });    
}

printFileContent(`${__dirname}\\assets`);