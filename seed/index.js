import fetch from "node-fetch"
import fs from "fs";

fetch('https://digimoncard.io/api-public/search.php?color=purple')
    .then((response) => response.json())
    .then((json) => {
        fs.appendFile('purple.json', JSON.stringify(json), (err) => {
            if (err) {
                throw new Error('Something went wrong writing the file.')
            }
            console.log(json)
            console.log('JSON written to file. Contents:', JSON.stringify(json));
        })
    })