// Scripts for Big Sky Alpine Retreat

// Initialize HTML5 Canvas Drawing on Contact Page
if (document.getElementById("guestbookCanvas")) {
    const canvas = document.getElementById("guestbookCanvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;
  
    // Start Drawing
    canvas.addEventListener("mousedown", () => (drawing = true));
    canvas.addEventListener("mouseup", () => (drawing = false));
    canvas.addEventListener("mousemove", (event) => {
      if (!drawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fill();
    });
  
    // Clear Canvas
    document.getElementById("clearCanvas").addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
  
  // Weather Widget Fetch (Home Page)
  if (document.getElementById("weatherWidget")) {
    const apiKey = "YOUR_API_KEY"; // Replace with OpenWeatherMap API Key
    const city = "Big Sky";
    const weatherWidget = document.getElementById("weatherWidget");
  
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        weatherWidget.innerHTML = `
          <h5>Weather in ${city}</h5>
          <p>${data.weather[0].description}</p>
          <p>Temp: ${data.main.temp}°F</p>
        `;
      })
      .catch((error) => (weatherWidget.innerHTML = "Unable to fetch weather"));
  }
  
  // Booking Form Validation
  if (document.getElementById("bookingForm")) {
    document.getElementById("bookingForm").addEventListener("submit", (event) => {
      const checkIn = document.getElementById("checkIn").value;
      const checkOut = document.getElementById("checkOut").value;
      const guests = document.getElementById("guestCount").value;
  
      if (!checkIn || !checkOut || guests <= 0) {
        alert("Please complete all fields correctly.");
        event.preventDefault();
      }
    });
  }
  