import "dotenv/config";
import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import AppError from "./utils/errors/AppError";
import cors from "cors";
import { routes } from "./routes";
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.get("/", (req, res) => res.send("Works"));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
