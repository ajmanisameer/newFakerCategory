var CreditCard = function(faker) {
  var self = this;

  self.number = function() {
    //15 digit random number
    var num = Math.floor(Math.random() * 1000000000000000) + 1;

    //first random number from the array
    var arr = [3, 4, 5, 6, 7, 8, 9];
    var num1 = arr[Math.floor(Math.random() * arr.length)];
    var concatinate = "" + num1 + num;

    var slic = concatinate.slice(0, 4);
    var slic1 = concatinate.slice(4, 8);
    var slic2 = concatinate.slice(8, 12);
    var slic3 = concatinate.slice(12, 16);

    var concat = slic + " " + slic1 + " " + slic2 + " " + slic3;

    //Checking first number and concatinating the name
    if (num1 === 3) {
      return concat + " " + "American Express";
    } else if (num1 === 5) {
      console.log(concat + " " + "Health");
    } else if (num1 === 4) {
      console.log(concat + " " + "Airline");
    } else if (num1 === 6) {
      console.log(concat + " " + "Banking");
    } else if (num1 === 7) {
      console.log(concat + " " + "Visa");
    } else if (num1 === 8) {
      console.log(concat + " " + "Petrolium");
    } else {
      console.log(concat + " " + "ISO");
    }

    //Credit Card exp month
    var months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    var month = months[Math.floor(Math.random() * months.length)];

    //Credit Card exp year
    var expYears = [20, 21, 22, 23, 24, 25, 26];
    var expYear = expYears[Math.floor(Math.random() * expYears.length)];

    //CVV
    var cvv = Math.floor(Math.random() * 1000) + 1;
    console.log(month + "/" + expYear + "  " + cvv);
  };
  return self;
};

module["exports"] = CreditCard;
