import express from "express";
import axios from "axios";

const route = express.Router();

route.get('/', async (req, res) => {
    try {
      const query = req.query.q as string;
      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
      const response = await axios.get(apiUrl);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  export default route