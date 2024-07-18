import 'express-async-errors';
import * as dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import morgan from "morgan";
import { nanoid } from 'nanoid';
import mongoose from "mongoose";

const app = express();

// Custom Imports
// routers
import jobRouter from "./routers/jobRouters.js";

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
];

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use('/api/v1/jobs', jobRouter);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

// Error middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});

const port = process.env.PORT || 5100;

// Connect to MongoDB and start server
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server running on PORT ${port}....`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
