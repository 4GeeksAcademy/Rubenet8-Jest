//Dollar to Yens

test("One dollar should be 157,53 yens", function(){
const {dollarToYen} = require('./app.js');
const expected = 4 * 157.53;
expect(dollarToYen(4));
});

//Euros to Dollar

test("One euro should be 1.07 dollars", function() {
const {EuroToDollar} = require('./app.js');
const expected = 3.5 * 1.07;
expect(EuroToDollar(3.5));
});

//Yens to Pound

test("One Yen should be 0.0052 Pounds", function() {
const {yenToPound} = require('./app.js');
const expected = 3 * 0.0052;
expect(yenToPound(3));
});