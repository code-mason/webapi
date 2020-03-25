var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  rate = [
    {
      "baseCurrency": "CMN",
      "price": "67.7709",
      "quoteCurrency": "USD",
      "retrieved": "2020-03-25T02:46:43.525580104Z",
      "source": "Codemason",
      "symbol": "CMN2USD"
    },
    {
      "baseCurrency": "CMN",
      "price": "62.9048",
      "quoteCurrency": "EUR",
      "retrieved": "2020-03-25T02:46:43.610772561Z",
      "source": "Codemason",
      "symbol": "CMN2EUR"
    },
    {
      "baseCurrency": "CMN",
      "price": "482.5483",
      "quoteCurrency": "CNY",
      "retrieved": "2020-03-25T02:46:43.529860565Z",
      "source": "Codemason",
      "symbol": "CMN2CNY"
    },
  ];
  res.send(rate);
});

module.exports = router;
