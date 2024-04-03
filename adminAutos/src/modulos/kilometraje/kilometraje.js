const express = require('express');

const router = express.Router();
const repuesta = require('../../red/respustas');
const controlador = require('./ContKilometraje');

router.get('/',  todos);
router.get('/:id', uno); 
router.post('/', agregar); 
router.put('/', eliminar);

async function todos(req, res, next){
   try {
      const items = await controlador.todos();
      repuesta.success(req, res, items, 200);    
   } catch (err){
      next(err);
   }
};

async function uno (req, res, next) {
   try{
      const items = await controlador.uno(req.params.id);
      repuesta.success(req, res, items, 200);    
   } catch (err){
      next(err);
   }
};

async function agregar (req, res, next) {
   console.log("id: ",  req.body.id);
   try{
      const items = await controlador.agregar(req.body);
      if(req.body.id == 0) {
         message = 'item guardo con exito!';
      } else {
         message = 'item actualizado con exito!';
      }
      repuesta.success(req, res, message, 201);    
   } catch (err){
      next(err);
      
   }
};

async function eliminar (req, res, next) {
   try{
      const items = await controlador.eliminar(req.body);
      repuesta.success(req, res, 'Item eliminado', 200);    
   } catch (err){
      next(err);
      
   }
};



module.exports = router;