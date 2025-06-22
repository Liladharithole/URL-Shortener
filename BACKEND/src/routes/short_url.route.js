import express from "express";
import { createShortUrl, customShortUrl } from "../controller/short_url.controller.js";

const router = express.Router();

router.post("/", createShortUrl);
router.post("/", customShortUrl);



export default router;
