import app from "./src/app.js";
import swaggerDocument from './swagger.json' assert { type: "json" };
import swaggerUi from 'swagger-ui-express';

const port = process.env.PORT || 3000;

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
});