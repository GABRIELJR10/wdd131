
// Static weather data
const temperature = 25;
const windSpeed = 10;

// Calculate wind chill using the Celsius formula
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Check if wind chill conditions are valid
if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#windchill").textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    document.querySelector("#windchill").textContent = "N/A";
}

// Display the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display the last modified date
document.querySelector("#lastmodified").textContent =
    document.lastModified;