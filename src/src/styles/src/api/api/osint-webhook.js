module.exports = (req, res) => {
  const secret = process.env.OSINT_WEBHOOK_SECRET;
  if (req.query.secret !== secret) return res.status(403).send('Forbidden');

  // Example: accept JSON POST
  const alert = req.body;
  console.log('New OSINT Alert:', alert);
  res.status(200).send('Alert received');
};
