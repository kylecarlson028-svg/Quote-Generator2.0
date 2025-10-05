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
