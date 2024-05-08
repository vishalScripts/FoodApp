import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";

function QuoteComp() {
  const [formattedQuote, setFormattedQuote] = useState("");

  const quotes = [
    {
      id: 1,
      quote:
        'Cooking is love made visible.',
      highlightedWord: "love",
    },
    {
      id: 2,
      quote: "Food is our common ground, a universal experience.",
      highlightedWord: "Food",
    },
    {
      id: 3,
      quote:
        "The only time to eat diet food is while you’re waiting for the steak to cook.",
      highlightedWord: "diet",
    },
    {
      id: 4,
      quote: "People who love to eat are always the best people.",
      highlightedWord: "eat",
    },
    {
      id: 5,
      quote: "Life is uncertain. Eat dessert first.",
      highlightedWord: "dessert",
    },
    {
      id: 6,
      quote: "Food is symbolic of love when words are inadequate.",
      highlightedWord: "symbolic",
    },
    // Add more quotes as needed
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].quote;
    const words = randomQuote.split(" ");
    const formattedWords = words.map((word) => {
      if (word === quotes[randomIndex].highlightedWord) {
        return `<span className="text-customRed  ">${word}</span>`;
      }
      return word;
    });
    setFormattedQuote(formattedWords.join(" "));
  }, []);

  return (
    <div>
      <p className="text-sm text-gray-600  italic">
        {ReactHtmlParser(formattedQuote)}
      </p>
    </div>
  );
}

export default QuoteComp;
