// FAILU SISTEMOS - CRUD
// c - create
// r - read
// u -update
// d- delete

const data = {};

data.create = (dir, fileName, content) => {
    console.log('kuriamas failas');
}
data.read = (dir, fileName) => {
    console.log('skaitomas failas');
}
data.update = (dir, fileName, content) => {
    console.log('atnaujinamas failas');
}
data.delete = (dir, fileName) => {
    console.log('trinamas failas');
}


module.exports = data;