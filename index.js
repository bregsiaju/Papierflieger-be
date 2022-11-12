const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const router = require('./app/router');
// const swaggerDocument = require('../docs/swagger.json');
// const { MORGAN_FORMAT } = require('../config/application');
const { PORT = 3000 } = process.env;

const app = express();

// app.use(morgan(MORGAN_FORMAT));
app.use(cors());
app.use(express.json());
app.use(router);
// app.get('/documentation.json', (req, res) => res.send(swaggerDocument));
// app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

