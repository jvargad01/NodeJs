const db = require('../../db/mysql');

const TABLA = 'unidad';

function todos() {
    let query = `SELECT * FROM ${TABLA}`;
    return db.todos(query);
}

function uno() {
    
    let query = `SELECT * FROM ${TABLA} WHERE idunidad =${body.id}`;
    return db.uno(TABLA, id);
}

function eliminar(body) {
    let query = `DELETE FROM ${tabla} WHERE idunidad =${body.id}`;
    return db.eliminar(query);
}

function agregar(data) {
    let query;
    let id;
    if (data && data.id == 0){
         id = 0;
         query = `INSERT INTO ${TABLA} (idtipounidad, modelo, nip, color) VALUES (${data.idtipounidad},${data.modelo},'${data.nip}','${data.color}') `;
     } else {
         id = 1;
         query =`Update ${TABLA} SET idtipounidad=${data.idtipounidad}, modelo=${data.modelo}, nip='${data.nip}', color='${data.color}' WHERE idunidad = ${data.id}`;
     }
     console.log(query);
    return db.agregar(query, id);
}

module.exports = {
    todos, 
    uno, 
    agregar,
    eliminar,
}