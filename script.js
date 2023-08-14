function convertToINR() {
    var usdAmount = document.getElementById("usdInput").value;
    var inrAmount = usdAmount * 74.76; // Conversion rate as of September 2021
    
    document.getElementById("inrInput").value = inrAmount.toFixed(2);
    document.getElementById("convertedAmount").innerText = "Converted Amount: " + inrAmount.toFixed(2) + " INR";
}

function convertToUSD() {
    var inrAmount = document.getElementById("inrInput").value;
    var usdAmount = inrAmount / 74.76; // Conversion rate as of September 2021
    
    document.getElementById("usdInput").value = usdAmount.toFixed(2);
    document.getElementById("convertedAmount").innerText = "Converted Amount: " + usdAmount.toFixed(2) + " USD";
}