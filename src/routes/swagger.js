const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
//segun tuto
const swaggerJsDoc = require("swagger-jsdoc");
const path = require('path');

const swaggerSpec = {
    definition:{
        openapi:"3.0.0",
        info:{
            title: "Node MongoDB API",
            version: "1.0.0"
        },
        server:[
            {
                url:"http://localhost:8080"
            }
        ]
    },
    apis:[`${path.join(__dirname,"./routes/*.js")}`],
}

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
//router.use('/api-docs-ser', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)));

module.exports = router;