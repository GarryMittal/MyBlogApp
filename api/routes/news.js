const express = require("express");
const router = express.Router();
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
// Replace with your actual NewsAPI key
const NEWS_API_KEY = process.env.NEWS_API;
const NEWS_API_URL = 'https://newsapi.org/v2/';

// GET TOP NEWS
router.get("/", async (req, res) => {
  try {
    // Construct the URL for the API call
    const url = `${NEWS_API_URL}top-headlines?apiKey=${NEWS_API_KEY}&language=en`;

    // Fetch data from the News API
    const response = await axios.get(url);

    // Get the first article from the response
    const topArticle = response.data.articles[0];

    // Send the top article as the response
    res.status(200).json(topArticle);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching news data" });
  }
});

module.exports = router;
