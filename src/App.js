
import './App.css';
import QuoteC from './QuoteC';
import { useEffect,useState } from "react";

function App() {
const [quote,setQuote]=useState('');
 

const getQuote=() => {
 fetch("https://api.quotable.io/random")
 .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setQuote(`${data.content} — ${data.author}`);
      })
      .catch(error => {
        console.error("Error fetching quote:", error);
      });
  };



useEffect( () => { 
//  get random quote from quotes api :
getQuote();
},[])

  return (
    <div className="App">
      <QuoteC></QuoteC>
    </div>
  );
}

export default App;
