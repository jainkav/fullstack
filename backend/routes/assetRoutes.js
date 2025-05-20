const express = require('express');
const router = express.Router();

// Dummy asset routes
router.get('/', (req, res) => {
  res.json({ message: 'Assets retrieved' });
});

module.exports = router;