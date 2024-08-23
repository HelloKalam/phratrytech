const startDate = new Date("2022-02-08T00:00:00Z").getTime();

function formatWithLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}

// Update the count every second
const x = setInterval(function() {
    const now = new Date().getTime();
    const elapsed = now - startDate;

    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // Display the result in the elements with corresponding IDs
    document.getElementById("years").innerHTML = formatWithLeadingZero(years) + " ";
    document.getElementById("months").innerHTML = formatWithLeadingZero(months) + " ";
    document.getElementById("days").innerHTML = formatWithLeadingZero(days) + " ";
}, 1000);

const currentYear = new Date().getFullYear();

// Set the year in the span with id="year"
document.getElementById("year").textContent = currentYear;