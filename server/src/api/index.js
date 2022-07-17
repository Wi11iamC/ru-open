const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'RU OPEN API 🔬'
  });
});

module.exports = router;