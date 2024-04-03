const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion ;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(conMysql, 200);
        } else {
            console.log('DB Conectada!!');
        }
    });

    conexion.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMysql();
        } else {
            throw err;
        }
    });

    
}

conMysql();

function todos(query){
    return new Promise((resolve, reject) => { 
        conexion.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function uno(query){
    return new Promise((resolve, reject) => {
        
        conexion.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function agregar(query, id){
    
   if (id == 0){
      return insertar(query);
   } else {
      return actualizar(query);
   } 
}

function insertar(query){
    
    return new Promise((resolve, reject) => { 
        conexion.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function actualizar(query){
    console.log(query);
    return new Promise((resolve, reject) => { 
        conexion.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function eliminar(tabla, data){
    return new Promise((resolve, reject) => { 
        conexion.query(`DELETE FROM ${tabla} WHERE idunidad = ?`, data.id, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports = {
    todos, uno, agregar, eliminar, 
}