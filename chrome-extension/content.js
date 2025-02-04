const motivationalQuotes = [
    "Believe in yourself!",
    "Keep pushing forward!",
    "You're stronger than you think!"
];

const activityReminders = [
    "Time for a stretch!",
    "Hydrate yourself!",
    "Have you done 10 squats today?"
];

// Function to replace ads
function replaceAds() {
    const adElements = document.querySelectorAll('iframe, .ad, [id*="ad"], [class*="ad"]');

    // Get stored message first before modifying elements
    chrome.storage.sync.get('message', (data) => {
        if (data.message) {
            motivationalQuotes.push(data.message);
        }

        adElements.forEach(ad => {
            const replacement = document.createElement("div");

            // Pick a random quote AFTER retrieving storage data
            replacement.textContent = Math.random() > 0.5
                ? motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
                : activityReminders[Math.floor(Math.random() * activityReminders.length)];

            // Styling
            replacement.style.cssText = "padding: 10px; background: #f39c12; color: white; font-weight: bold; text-align: center;";

            // Replace ad element
            ad.replaceWith(replacement);
        });
    });
}

// Run function when page fully loads
window.addEventListener("load", replaceAds);
