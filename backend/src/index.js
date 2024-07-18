const express = require('express');
const cors = require('cors');
const app = express();

require('./database');
app.use(cors());
app.use(express.json());

const userRouter = require('./routes/index');
const gastoRouter = require('./routes/gasto');
const impuestoRouter = require('./routes/impuesto');
app.use('/impuestos', impuestoRouter);
app.use('/users', userRouter);
app.use('/gastos', gastoRouter);
app.listen(3000, () => {
  console.log('Server on port', 3000);
});