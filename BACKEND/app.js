import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";

import { nanoid } from "nanoid";
// Importing the MongoDB connection function
import conectDb from "./src/config/mongo.config.js";
// Connect to MongoDB
conectDb();
// importing urlSchema from the models directory
import urlSchema from "./src/models/short_url.model.js";
// Importing the routes
import short_url from "./src/routes/short_url.route.js";
import { url } from "inspector";
import { errorHandler } from "./src/utils/errorHandler.js";

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//
app.use("/api/create", short_url);

// Endpoint to redirect to the original URL
app.get("/:id", redirectFromShortUrl);


// Error handling middleware
app.use(errorHandler);
//
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
