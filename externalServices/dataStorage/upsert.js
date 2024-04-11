const fs = require('fs');

const upsertSpreadFile = (content) => {
    const path = 'externalServices/dataStorage/spread.json';
    fs.writeFileSync(path, content, 'utf8');
}

module.exports = upsertSpreadFile;
