const fs = require('fs');
async function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            if (err) return reject(err);
            resolve(fileContent);
        });
    })    
}

async function getFiles(directoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) return reject(err);
            resolve(files);
        });
    })    
}

async function printFileContent(directoryPath) {    
    (await getFiles(directoryPath))
        .forEach(async file => {
            let fileContent = await readFile(directoryPath + '\\' + file);
            console.log(`${file} (${fileContent.length} bytes)\n${fileContent.substr(0, 100)}\n`);
        })
}

async function printFileContentInOrder(directoryPath) {
    for (let file of (await getFiles(directoryPath))) {
        let fileContent = await readFile(directoryPath + '\\' + file);
        console.log(`${file} (${fileContent.length} bytes)\n${fileContent.substr(0, 100)}\n`);
    }
}
let directoryPath = `${__dirname}\\assets`

//printFileContent(directoryPath);
printFileContentInOrder(directoryPath);