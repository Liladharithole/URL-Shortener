import { createShortUrlWithoutUser } from "../services/short_url.services.js";
import urlSchema from "../models/short_url.model.js";


export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  res.status(201).json({
    message: "URL created successfully",
    short_url: process.env.APP_URL + shortUrl,
  });
};

export const redirectFromShortUrl = async (req, res) => {
  const { id } = req.params;
  const url = await urlSchema.findOneAndUpdate({ short_url: id },{ $inc: { clicks: 1 } });
  if (url) {
    res.redirect(url.full_url);
  } else {
    return res.status(404).json({ message: "URL not found" });
  }
};


export const customShortUrl = async (req, res) => {
  const { url, slug } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  res.status(201).json({
    message: "URL created successfully",
    short_url: process.env.APP_URL + shortUrl,
  });
};

