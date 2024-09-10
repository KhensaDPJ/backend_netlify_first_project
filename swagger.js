import swaggerAutogen from 'swagger-autogen';

const swagger = swaggerAutogen({openapi: '3.0.0'});

const doc = {
    info: {
      version: '1.0.0',            // Version of the API
      title: 'My API',             // API title
      description: 'This is the API documentation for My API, which provides endpoints.'  // Short description
    },
    servers: [
      {
        url: 'http://localhost:3000',    // URL of the local development server
        description: 'Local development server' // Description of the server
      },
    ],
  };
  

const outputFile = './swagger.json';
const routes = ['./routes/*.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swagger(outputFile, routes, doc);
