console.log("✅ script.js loaded");

// Your quote data
const quotes = [
  { text: "In the midst of chaos, there is also opportunity.", author: "Sun Tzu", topic: "war" },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt", topic: "motivation" },
  { text: "Never think that war, no matter how necessary, nor how justified, is not a crime.", author: "Ernest Hemingway", topic: "WW1" }
];

// Get elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const searchQuoteButton = document.getElementById("searchQuote");
const topicInput = document.getElementById("topicInput");

// New Quote Button — Random
newQuoteButton.addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${random.text}"`;
  authorText.textContent = `— ${random.author}`;
});

// Search Quote Button — Filter by topic
searchQuoteButton.addEventListener("click", () => {
  const topic = topicInput.value.trim().toLowerCase();
  const found = quotes.find(q => q.topic.toLowerCase() === topic);

  if (found) {
    quoteText.textContent = `"${found.text}"`;
    authorText.textContent = `— ${found.author}`;
  } else {
    quoteText.textContent = "No quote found for that topic 😕";
    authorText.textContent = "";
  }
});
