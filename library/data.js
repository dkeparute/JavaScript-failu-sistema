/*
Failu sistemos CRUD
C - create (sukurti)
R - read (perksaityti)
U - update (atnaujinti)
D - delete (istrinti)
*/


/**
 * Darbiniu funkciju su failu sistema objektas
 */
const data = {};


/**
 * APRASAS KA DARO FUNKCIJA: Absoliutaus kelio kontravimas iki nurodyto failo esancio .data folder'yje.
 * @param {string} dir sub-folder'is esantis .data folder'yje.
 * @param {string} fileName kuriamo failo pavadinimas be failo pletinio.
 * @param {Object} content absoliutus kelias iki failo, pvz. {name: 'Marsietis'}
 * @returns {boolean} pozymis, ar funkcija sekmingai sukure nurodyta faila
 */
data.create = (dir, fileName, content) => {
    console.log('kuriamas failas');
    return true;
}



/**
 * JSON failo rodymas .data folder'yje.
* @param {string} dir sub-folder'is esantis .data folder'yje.
 * @param {string} fileName kuriamo failo pavadinimas be failo pletinio.
 * @returns {Object} isparsintas failo turinys
 */
data.read = (dir, fileName) => {
    console.log('skaitomas failas');

}


/**
 * APRASAS KA DARO FUNKCIJA: Absoliutaus kelio kontravimas iki nurodyto failo esancio .data folder'yje.
 * @param {string} dir sub-folder'is esantis .data folder'yje.
 * @param {string} fileName kuriamo failo pavadinimas be failo pletinio.
 * @param {object} content absoliutus kelias iki failo, pvz. {name: 'Marsietis'}
 * @returns {boolean} pozymis, ar funkcija sekmingai atnaujino nurodyta faila
 */
data.update = (dir, fileName, content) => {
    console.log('atnaujinamas failas');
    return true;
}


/**
 * JSON failo trynimas .data folder'yje.
* @param {string} dir sub-folder'is esantis .data folder'yje.
 * @param {string} fileName kuriamo failo pavadinimas be failo pletinio.
 * @returns {boolean} istrintas failas
 */
data.delete = (dir, fileName) => {
    console.log('trinamas failas');
    return true
}



module.exports = data;