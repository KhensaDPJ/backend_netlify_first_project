import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerJson from './swagger.json' assert { type: 'json' }; 
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Manually define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000;
const app = express();

const swaggerOptions = {
  definition: swaggerJson,
  apis: ['./routes/*.js'], // Include both server.js and all files in routes
};

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'https://example.com', // Replace with your allowed origin(s)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies
};

app.use(cors(corsOptions));

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Serve static files for Swagger UI
app.use(express.static(join(__dirname, 'node_modules/swagger-ui-dist')));

app.use(authRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log('API docs available at http://localhost:3000/api-docs');
});
