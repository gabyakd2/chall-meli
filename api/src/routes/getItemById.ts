import express, { Request, Response } from "express";
import axios from "axios";

const route = express.Router();

route.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
    try {
      const apiUrl = `https://api.mercadolibre.com/items/${id}`;
      const response = await axios.get(apiUrl);
      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching item data:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  export default route