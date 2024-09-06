import express from "express";
import cors from "cors"
import router from "./routes/authRoutes.js";
const port =3000;
const app =express();

app.use(cors());
app.use(express.json());

app.use('/api', router);
app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
});