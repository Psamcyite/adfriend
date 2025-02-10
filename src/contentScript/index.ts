const replaceAds = () => {
    document.querySelectorAll("div.ad-slot, iframe[src*='ads']").forEach((ad) => {
      const replacement = document.createElement("div");
      replacement.className = "adfriend-widget";
      replacement.innerHTML = `
        <div class="widget-content">
          <h3>✨ Stay Motivated! ✨</h3>
          <p>${getRandomQuote()}</p>
        </div>
      `;
      ad.replaceWith(replacement);
    });
  };
  
  const getRandomQuote = () => {
    const quotes = [
      "Believe in yourself!",
      "You got this! Keep pushing forward.",
      "Stay positive, work hard, and make it happen.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  
  replaceAds();
  