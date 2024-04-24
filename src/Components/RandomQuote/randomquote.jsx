import React, { useState } from "react";

import twitter_icon from "../Assets/Twitter.png";
import reload_icon from "../Assets/reload.png";
import "./randomquote.css";

const Random_Quote = () => {
    let quotes=[]

    async function loadQuotes(){
        const response=await fetch("https://type.fit/api/quotes")
        quotes=await response.json()

    }

    const random = ()=>{
        const select =quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    const twitter=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text}- ${quote.author.split(",")[0]}`)
    }



  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal",
    author: "Johan Wolfgang von Goethe",
  });
  loadQuotes()
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"> </div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img src={reload_icon} alt="" onClick={()=>{
                random()

            }}/>
            <img src={twitter_icon} alt="" onClick={()=>{
                twitter()
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random_Quote;
