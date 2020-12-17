const argv = process.argv;
const fs = require('fs');
const axios = require('axios');

// --out output-filename.txt readfile-or-url

function cat(path, newFile) {
    console.log(path);
    if(argv[2] === '--out') {
        fs.writeFile(newFile, path, 'utf-8', (err, data) => {
            if(err) throw err;
            console.log("FILE WRITTEN");
        })
    }
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err) throw err;
        console.log(data);
    });
}

async function webCat(url) {
    try {
        const resp = await axios.get(url);
        fs.readFile(resp.data, 'utf-8', (err, data) => {
            if(err) throw err;
            console.log(data)
        })
    } catch (error) {
        console.log(error); 
    }
}

if(argv[2] === '--out') {
    cat(argv[4], argv[3]);
} else {
    cat(path = argv[2])
}