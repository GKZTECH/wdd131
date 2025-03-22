function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

// Get elements and update wind chill
document.addEventListener("DOMContentLoaded", function () {
    let temp = 10; // Example temperature in °C
    let windSpeed = 5; // Example wind speed in km/h
    let windChill = calculateWindChill(temp, windSpeed);

    document.getElementById("windChill").textContent = windChill + " °C";
});
