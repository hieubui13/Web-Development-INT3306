// Select HTML elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuoteButton");

// Array of NBA quotes
const quotes = [
  "“I’ve failed over and over and over again in my life. And that is why I succeed.” – Michael Jordan",
  "“You can’t be afraid to fail. It’s the only way you succeed — you’re not gonna succeed all the time.” – LeBron James",
  "“Hard work beats talent when talent fails to work hard.” – Kevin Durant",
  "“Every time I rise up, I have confidence that I’m going to make it.” – Stephen Curry",
  "“You miss 100% of the shots you don’t take.” – Kobe Bryant",
  "“I play to win, whether during practice or a real game.” – Kobe Bryant",
 ];

// Event listener to display a random NBA quote
newQuoteButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
