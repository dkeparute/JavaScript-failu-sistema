const data = require('../4-failu-sistema/library/data.js');

data.create('users', 'labas', { name: 'du gaideliai' }, (state, msg) => {
    if (state) {
        console.log(msg);
    } else {
        console.error(msg);
    }
console.log('Sekantys zingsniai po bandymo failo sukurimo....');
});