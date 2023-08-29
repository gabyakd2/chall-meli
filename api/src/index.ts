import express from "express";
import getItemsByCateg from "./routes/getItemsByCateg";
import getItemById from "./routes/getItemById";


const app = express();
app.use(express.json()); //middleware que transforma la req.body a un json

const PORT = 3008;

app.use("/api/items", getItemsByCateg)

app.use("/items", getItemById)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
