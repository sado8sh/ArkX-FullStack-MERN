const fs = require('fs');

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File written successfully');
            }
        });
    });
}

writeFileAsync('./fichier.txt', 'Hello everyone, how are you?')
    .then(message => {
        console.log(message); 
        return readFileAsync('./fichier.txt');
    })
    .then(data => {
        console.log('File content:', data); 
    })
    .catch(err => {
        console.error('Error:', err);
    });
