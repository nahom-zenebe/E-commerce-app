const stripe=require('stripe')

module.exports.paymentIntent=async (req, res) => {
    try {
      const { amount, currency } = req.body;
      if (!amount || !currency) {
        return res.status(400).json({ error: "Amount and currency are required" });
      }
  
      
      const paymentIntent = { client_secret: "fake_client_secret" };
      res.json(paymentIntent); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }