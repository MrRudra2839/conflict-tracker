const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const secret = process.env.RSS_PROXY_SECRET;
  if (req.query.secret !== secret) return res.status(403).send('Forbidden');

  const feedUrl = req.query.feed;
  if (!feedUrl) return res.status(400).send('Feed URL missing');

  try {
    const response = await fetch(feedUrl);
    const data = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    res.send(data);
  } catch (err) {
    res.status(500).send('Error fetching feed');
  }
};
