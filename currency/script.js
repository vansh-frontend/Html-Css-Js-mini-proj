function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var targetCurrency = document.getElementById("currency").value;

    // Fixed exchange rates (example rates)
    var exchangeRates = {
        dollar: 1,     // Base currency: Dollar
        rupees: 83.15, // 1 Dollar = 83.15 Rupees
        euro: 0.91     // 1 Dollar = 0.91 Euro
    };

    // Initialize variable for the converted amount
    var convertedAmount;

    // Perform conversion based on the target currency
    if (targetCurrency === "dollar") {
        convertedAmount = amount * exchangeRates.dollar;
        displayResult("Dollars", "$", convertedAmount);
    } else if (targetCurrency === "rupees") {
        convertedAmount = amount * exchangeRates.rupees;
        displayResult("Rupees", "₹", convertedAmount);
    } else if (targetCurrency === "euro") {
        convertedAmount = amount * exchangeRates.euro;
        displayResult("Euros", "€", convertedAmount);
    } else {
        document.getElementById("result").textContent = "Invalid currency. Please select Dollar, Rupees, or Euro.";
    }
}

function displayResult(currencyName, symbol, amount) {
    document.getElementById("result").textContent = `Converted amount in ${currencyName}: ${symbol}${amount.toFixed(2)}`;
}
