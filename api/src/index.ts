import express from "express";
import getItems from "./routes/getItems";


const app = express();
app.use(express.json()); //middleware que transforma la req.body a un json

const PORT = 3008;

app.use("/api/items", getItems)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
