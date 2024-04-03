const db = require('../../db/mysql');

const TABLA = 'kilometraje';

function todos() {
    let query = `SELECT * FROM ${TABLA}`;
    return db.todos(query);
}

function uno() {
    
    let query = `SELECT * FROM ${TABLA} WHERE idkilometraje =${body.id}`;
    return db.uno(TABLA, id);
}

function eliminar(body) {
    let query = `DELETE FROM ${tabla} WHERE idkilometraje =${body.id}`;
    return db.eliminar(query);
}

function agregar(data) {
    let query;
    let id;
    if (data && data.id == 0){
         id = 0;
         query = `INSERT INTO ${TABLA} (idunidad, kilometraje, fch) VALUES (${data.idunidad},${data.kilometraje}, now()) `;
     } else {
         id = 1;
         query =`Update ${TABLA} SET idunidad=${data.idunidad}, kilometraje=${data.kilometraje}, fch=now() WHERE idkilometraje = ${data.id}`;
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