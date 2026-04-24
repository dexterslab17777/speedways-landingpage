const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(/blue/g, 'red');
fs.writeFileSync('src/App.tsx', code);
