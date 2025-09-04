const express = require('express');
const path = require('path');
const { crawlPage } = require('./crawl.js');
const { sortPages } = require('./report.js');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to crawl
app.post('/crawl', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    console.log(`Starting crawl of: ${url}...`);
    const pages = await crawlPage(url, url, {});
    const sortedPages = sortPages(pages);
    res.json({ pages: sortedPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Crawling failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
