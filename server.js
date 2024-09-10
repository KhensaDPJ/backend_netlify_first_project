// server.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerJson from './swagger.json' assert { type: 'json' }; 

const port = 3000;
const app = express();

const swaggerOptions = {
  definition: swaggerJson,
  apis: ['./routes/*.js'], // Include both server.js and all files in routes
};

app.use(cors());
app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/', authRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log('API docs available at http://localhost:3000/api-docs');
});
