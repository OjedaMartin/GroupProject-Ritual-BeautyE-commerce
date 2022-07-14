const express = require('express');
const Stripe = require('stripe');

const router = express.Router();

// Vamos a configurar el backend de modo que podamos requerir a Stripe
// Primero creamos un nuevo servidor:


// Una vez confirmado que los datos los recibimos por body, vamos a mandarlos
// a Stripe!
const stripe = new Stripe('sk_test_51LL7tkB5ICzkw2FVn6lyuj4azv49o6xl4iclXOyRfQrAFEXtpVhvJrZEAWa864Whl13gwLxQoPD0YpgT0GMdvCnp00JTwR0GWM')

// Configuramos el cors para que no haya problemas con el front

// configuramos express para que pueda leer objetos JSON


// Ahora creamos la ruta a la que vamos a recibir los datos del post en el 
// frontend
router.post('/api/checkout', async (req, res) => {
	const { id, amount } = req.body;
	console.log("detalle compra: ", amount,"id: " ,id)
	try {
		const payment = await stripe.paymentIntents.create({
			currency: "USD",
			amount,
			description: "Keyboard Gaming",
			payment_method: id,
			confirm: true
		});
		console.log("payment", payment)
		res.json({ msg: "Successful payment" })
	} catch(error) {
		console.log(error)
		res.json({ message: error.row.message })
	}
});

module.exports= router
