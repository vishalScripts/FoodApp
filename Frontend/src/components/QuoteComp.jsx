import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import { quotes } from "./Quotes";

function QuoteComp() {
  const [formattedQuote, setFormattedQuote] = useState("");

  

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
