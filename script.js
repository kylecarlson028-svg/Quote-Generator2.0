console.log("✅ script.js loaded");

const quotes = [
  { text: "In the midst of chaos, there is also opportunity.", author: "Sun Tzu", topic: "war" },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt", topic: "motivation" },
  { text: "Never think that war, no matter how necessary, nor how justified, is not a crime.", author: "Ernest Hemingway", topic: "WW1" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const topicInput = document.getElementById("topicInput");
const searchQuoteButton = document.getElementById("searchQuote");

newQuoteButton.addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${random.text}"`;
  authorText.textContent = `— ${random.author}`;
});

searchQuoteButton.addEventListener("click", () => {
  const topic = topicInput.value.toLowerCase();
  const filtered = quotes.filter(q => q.topic.toLowerCase() === topic);

  if (filtered.length > 0) {
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    quoteText.textContent = `"${random.text}"`;
    authorText.textContent = `— ${random.author}`;
  } else {
    quoteText.textContent = "No quotes found for that topic.";
    authorText.textContent = "";
  }
});
