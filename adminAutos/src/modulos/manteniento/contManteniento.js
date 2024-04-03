const db = require('../../db/mysql');

const TABLA = 'mantenimiento';

function todos() {
    let query = `SELECT * FROM ${TABLA}`;
    return db.todos(query);
}

function uno() {
    
    let query = `SELECT * FROM ${TABLA} WHERE idmantenimiento =${body.id}`;
    return db.uno(TABLA, id);
}

function eliminar(body) {
    let query = `DELETE FROM ${tabla} WHERE idmantenimiento =${body.id}`;
    return db.eliminar(query);
}

function agregar(data) {
    let query;
    let id;
    if (data && data.id == 0){
         id = 0;
         query = `INSERT INTO ${TABLA} (idunidad, idkilometraje, fchManto) VALUES (${data.idunidad}, ${data.idkilometraje}, '${data.fchManto}') `;
     } else {
         id = 1;
         query =`Update ${TABLA} SET idunidad=${data.idunidad}, idkilometraje=${data.idkilometraje}, fchManto= '${data.fchManto}' WHERE idmantenimiento = ${data.id}`;
     }
    return db.agregar(query, id);
}

module.exports = {
    todos, 
    uno, 
    agregar,
    eliminar,
}