// Funtion to help solve tranfer issues

function balance(deposit) {

    // Deposit greater than 80 can continue
    if (deposit >= 0) {

        // Declared Variables
        let bzdConversionRate, bzdConversion, total, internationalBankDeduction, heritageBankFee; 

        // Heritage Bank Fee of 60 USD
        heritageBankFee = 10;

        // International Great Britain Bank Fee of 20 USD
        internationalBankDeduction = 25;

        // Total Required
        total = Number(deposit) + (heritageBankFee + internationalBankDeduction);
        console.log(total)

        // Conversion Rate Belize Dollar Per 1 USD
        bzdConversionRate = 2;

        // Conversion from USD to BZD
        bzdConversion = total * bzdConversionRate;

        // Sends value to "response" id
        document.getElementById('response').innerHTML = parseFloat(total.toFixed(2)) + " USD " + "/ "+ bzdConversion + " BZD";
        // Sends value to "deduction" id
        document.getElementById('deduction').innerHTML = parseFloat(internationalBankDeduction.toFixed(2)) + " USD";
        // Sends value to "westernUnionFee" id
        document.getElementById('heritageBankFee').innerHTML = parseFloat(heritageBankFee.toFixed(2)) + " USD";
    } else {
        // If deposited value is less than 30 this occurs
        // --
        document.getElementById('response').innerHTML = "Too Little";
        // --
        document.getElementById('deduction').innerHTML = "0 USD";
        // --
        document.getElementById('heritageBankFee').innerHTML = "0 USD";
    };
};