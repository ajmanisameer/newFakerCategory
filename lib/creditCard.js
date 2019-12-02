var CreditCard = function(faker) {
  var self = this;

  self.number = function() {
    //15 digit random number
    var num = Math.floor(Math.random() * 1000000000000000) + 1;

    //first random number from the array
    var arr = [3, 4, 5, 6, 7, 8, 9];
    var num1 = arr[Math.floor(Math.random() * arr.length)];
    var concat = "" + num1 + num;
    console.log(concat);

    //Credit Card exp month
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var month = months[Math.floor(Math.random() * months.length)];

    //Credit Card exp year
    var expYears = [
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
      2028,
      2029,
      2030
    ];
    var expYear = expYears[Math.floor(Math.random() * expYears.length)];

    //CVV
    var cvv = Math.floor(Math.random() * 1000) + 1;
    console.log(month + "/" + expYear + "  " + cvv);
  };
  return self;
};

module["exports"] = CreditCard;
