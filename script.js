// ─────────────────────────────────────────
// MOCK DATABASE (Acts like an API)
// ─────────────────────────────────────────
var database = {
  "india": {
    name: "India",
    capital: "New Delhi",
    region: "Asia",
    population: "1,380,004,385",
    currency: "Indian Rupee (INR)",
    flag: "https://flagcdn.com/w320/in.png"
  },
  "usa": {
    name: "United States",
    capital: "Washington, D.C.",
    region: "Americas",
    population: "331,002,651",
    currency: "United States Dollar (USD)",
    flag: "https://flagcdn.com/w320/us.png"
  },
  "united states": {
    name: "United States",
    capital: "Washington, D.C.",
    region: "Americas",
    population: "331,002,651",
    currency: "United States Dollar (USD)",
    flag: "https://flagcdn.com/w320/us.png"
  },
  "uk": {
    name: "United Kingdom",
    capital: "London",
    region: "Europe",
    population: "67,886,011",
    currency: "British Pound (GBP)",
    flag: "https://flagcdn.com/w320/gb.png"
  },
  "united kingdom": {
    name: "United Kingdom",
    capital: "London",
    region: "Europe",
    population: "67,886,011",
    currency: "British Pound (GBP)",
    flag: "https://flagcdn.com/w320/gb.png"
  },
  "japan": {
    name: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: "125,836,021",
    currency: "Japanese Yen (JPY)",
    flag: "https://flagcdn.com/w320/jp.png"
  },
  "australia": {
    name: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "25,499,884",
    currency: "Australian Dollar (AUD)",
    flag: "https://flagcdn.com/w320/au.png"
  },
  "canada": {
    name: "Canada",
    capital: "Ottawa",
    region: "Americas",
    population: "37,742,154",
    currency: "Canadian Dollar (CAD)",
    flag: "https://flagcdn.com/w320/ca.png"
  }
};

// ─────────────────────────────────────────
// MAIN FUNCTION
// ─────────────────────────────────────────
function searchCountry() {
  var input = document.getElementById("searchInput").value.trim().toLowerCase();
  var loading = document.getElementById("loading");
  var card = document.getElementById("countryCard");
  var errorBox = document.getElementById("errorBox");

  // 1. Check for empty input
  if (input === "") {
    alert("Please enter a country name (e.g., India, USA, Japan)");
    return;
  }

  // 2. Show loading state, hide others
  loading.style.display = "block";
  card.style.display = "none";
  errorBox.style.display = "none";

  // 3. Simulate a 0.5 second network delay (makes it look like a real API fetch)
  setTimeout(function() {
    loading.style.display = "none";

    // 4. Look up the country in our database
    var country = database[input];

    // 5. If the country doesn't exist in our database
    if (!country) {
      card.style.display = "none";
      errorBox.style.display = "block";
      return;
    }

    // 6. Build the HTML card
    card.innerHTML = 
      '<div class="flag-box">' +
        '<img src="' + country.flag + '" alt="Flag of ' + country.name + '" />' +
      '</div>' +
      '<div class="details-box">' +
        '<h2>' + country.name + '</h2>' +
        '<div class="info-row"><span class="info-label">Capital</span><span class="info-value">' + country.capital + '</span></div>' +
        '<div class="info-row"><span class="info-label">Region</span><span class="info-value">' + country.region + '</span></div>' +
        '<div class="info-row"><span class="info-label">Population</span><span class="info-value">' + country.population + '</span></div>' +
        '<div class="info-row"><span class="info-label">Currency</span><span class="info-value">' + country.currency + '</span></div>' +
      '</div>';

    // 7. Show the card
    card.style.display = "block";

  }, 500); // 500 milliseconds delay
}

// Allow pressing "Enter" to search
document.getElementById("searchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchCountry();
  }
});