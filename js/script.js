/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/

//Array of all quotes
//Tags include Emotion, History, Motivation, Relationships, and Culture
let quotes = [
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller",
    year: 1891,
    tags: ["Emotion"]
  },
  {
    quote: "To live under the American Constitution is the greatest political privilege that was ever accorded to the human race.",
    source: "Calvin Coolidge",
    year: 1924,
    tags: ["History"]
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle",
    tags: ["Motivation"]
  },
  {
   quote: "One of the most beautiful qualities of true friendship is to understand and to be understood.",
   source: "Lucius Annaeus Seneca",
   tags: ["Relationships"]
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    source: "Aristotle",
    tags: ["Relationships"]
  },
  {
    quote: "Now I will have to arrange another marriage! Allah knows I have enough marriages to do already.",
    source: "Zehrunisa Husain",
    tags: ["Culture"]
  },
  {
    quote: "Our culture is more shaped by the arts and humanities than it often is by politics.",
    source: "Jim Leach",
    tags: ["Culture"]
  },
  {
    quote: "You have died of dysentery",
    source: "Oregon Trail",
    year: 1971,
    tags: ["History"]
  }
];
console.log(quotes.toString());
let lastq = [0];
let randnum = 0;

//getrandomquote
function getRandomQuote(){
  lastq.push(Math.floor(randnum));
  randnum = Math.random() * quotes.length;
  //checks to see if it is a different quote from current one
  while(Math.floor(randnum) === lastq){
    randnum = Math.random() * quotes.length;
  }
  //sets current quote to check when getting a new quote
  return quotes[Math.floor(randnum)];
}

//printquote function
function printQuote(){
  let quote = getRandomQuote();
  let htmlstring = "";
  //adds quote and source to string
  htmlstring += `<p class="quote">${quote["quote"]}</p><p class = "source">${quote["source"]}`;
  //year
  if(quote.year != null){
    htmlstring += `<span class="year">${quote["year"]} </span>`;
  }
  //tags
  htmlstring+= `<p class = "tags">${quote["tags"]}</p>`;
  htmlstring+= '</p>';
  //applying changes
  document.getElementById("quote-box").innerHTML = htmlstring;
  //setting random color every time button clicked
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("loadQuote").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("lastQuote").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

}
function printLast(){
  let quote = quotes[0];
  if(lastq.length > 0){
    quote = quotes[lastq.pop()];
  }
  else{
    return 0;
  }
  console.log(quote);
  document.getElementById("quote-box").innerHTML = "";
  let htmlstring2 = "";
  //adds quote and source to string
  htmlstring2 += `<p class="quote">${quote["quote"]}</p><p class = "source">${quote["source"]}`;
  //year
  if(quote.year != null){
    htmlstring2 += `<span class="year">${quote["year"]} </span>`;
  }
  //tags
  htmlstring2+= `<p class = "tags">${quote["tags"]}</p>`;
  htmlstring2+= '</p>';
  //applying changes
  document.getElementById("quote-box").innerHTML = htmlstring2;
  //random color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("loadQuote").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("lastQuote").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
console.log(printQuote());
setInterval(printQuote, 8000);
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('lastQuote').addEventListener("click", printLast, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.