const quotes = [
  { text: "In the midst of chaos, there is also opportunity.", author: "Sun Tzu", topic: "war" },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt", topic: "motivation" },
  { text: "Never think that war, no matter how necessary, nor how justified, is not a crime.", author: "Ernest Hemingway", topic: "WW1" }
];
console.log("Script loaded!");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${random.text}"`;
  authorText.textContent = `— ${random.author}`;
});
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quote Generator</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>✨ Random Quote Generator ✨</h1>
    <p id="quote">Click the button to get inspired!</p>
    <p id="author"></p>
    <input type="text" id="topicInput" placeholder="Enter a topic (e.g. WW1)" />
    <button id="searchQuote">Search Quote</button>
    <button id="new-quote">New Quote</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
