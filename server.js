import cors from 'cors'; 
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import mongoSanitize from "express-mongo-sanitize";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
// hello
// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
import contactRoutes from './routes/contactRoutes.js'
// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

app.use(cors());
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());

app.use(mongoSanitize());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
app.use("/api/v1/contacts", authenticateUser, contactRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
