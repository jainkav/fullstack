const express = require('express');
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  res.json({ token: 'dummy-jwt-token', role: 'admin' });
});

module.exports = router;