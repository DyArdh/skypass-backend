require('dotenv').config();

// modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const cookieparser = require('cookie-parser');

// local
const { notFoundHandler, errorHandler, limiterHandler } = require('./middleware');
const indexRouter = require('./routes');

const app = express();
const { PORT } = process.env;

// middlewares
app.use(rateLimit(limiterHandler));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(morgan('dev'));
app.set('view engine', 'ejs');

// router
app.use(indexRouter);

// server error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT || 3000, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${PORT || 3000}`);
});
