// External Import
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Internal Imports
const connectDB = require('./src/config/db');
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware');
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");

const port = process.env.PORT || 5000

const app = express();
app.use(express.json());
app.use(morgan('dev'));
dotenv.config();
app.use(cors({
   origin: ["https://advisoropedia.netlify.app", "http://localhost:5173"]
}));

app.get("/", (req, res) => {
   res.send("Api is Running");
});

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const main = () => {
   connectDB();
   app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
   });
};

main();