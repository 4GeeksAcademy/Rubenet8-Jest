// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//This is my function from Euro to Dollar
const EuroToDollar = (euros) => {
    return euros * 1.07
}

console.log(EuroToDollar(200))

//This is my function from Dollar to Yen
const dollarToYen = (dollar) => {
    return dollar * 130
}

dollarToYen(oneEuroIs.USD)

//This is my function from Yen to Pound
const yenToPound = (yen) => {
    return yen * 0.0052
}

yenToPound(oneEuroIs.JPY)

module.exports = {dollarToYen, EuroToDollar, yenToPound}