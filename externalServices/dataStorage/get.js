const fs = require('fs');

const getSpreadFile = () => {
    const path = 'externalServices/dataStorage/spread.json';
    const file = fs.readFileSync(path, 'utf-8');

    const content = JSON.parse(file);

    return content;

}

module.exports = getSpreadFile;
