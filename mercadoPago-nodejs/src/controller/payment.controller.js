
import mercadopago from "mercadopago";
import { HOST, MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder = async (req, res) => {
   try {
     mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
     });

     const result = await mercadopago.preferences.create({
        items: [{
            title: "laptop HP",
            unit_price: 100,
            currency_id: "MXN",           
            quantity: 1,
        }],
        back_urls:{
            success: `${HOST}/success`,
            failure: `${HOST}/failure`,
            pending: `${HOST}/pending`,
        },                 
        notification_url: "https://5847-2806-265-408-9cdb-a9db-2f21-c7f5-2a50.ngrok.io/webhook",
     });
         
     res.json(result.body); 
   } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
   }
    
};


export const recieveWebhook = async (req, res) => {
    const payment = req.query;
 
    try {
        
      if (payment.type === "payment"){
        const data = await mercadopago.payment.findById(payment['data.id']);
        console.log(data);
        res.sendStatus(204).json(data);
      } else {
        res.sendStatus(500).json({message: 'Error en consulta'});
      }  
      
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({error: error.message});
    }
   
};