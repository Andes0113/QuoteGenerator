/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

//Array of all quotes
let quotes = [
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller",
    year: 1891,
    tags: ["Beauty", "Emotion"]
  },
  {
    quote: "Let us not seek the Republican answer or the Democratic answer, but the right answer. Let us not seek to fix the blame for the past. Let us accept our own responsibility for the future.\"",
    source: "John F. Kennedy",
    year: 1960,
    tags: ["Politics"]
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
    quote: "Allah knows I have enough marriages to arrange already",
    source: "Zehrunisa Husain",
    tags: ["Culture"]
  }
]
console.log(quotes.toString());



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
let str = "";
function getRandomQuote(){
  randnum = Math.random() * quotes.length;
  //checks to see if it is a different quote from current one
  while(Math.floor(randnum) == str){
    randnum = Math.random() * quotes.length;
  }
  //sets current quote to check when getting a new quote
  str = quotes[Math.floor(randnum)];
  return quotes[Math.floor(randnum)];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML markup in the index.html file AND the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  let quote = getRandomQuote();
  let htmlstring = "";
  htmlstring += `<p class="quote">${quote["quote"]}<\p><p class = "source">${quote["source"]}`;
  if(quote.year != null){
    htmlstring += `<span class="year">${quote["year"]}, <\span>`;
  }
  htmlstring+= `<p class = "tags">${quote["tags"]}</p>`;
  htmlstring+= '</p>';
  document.getElementById("quote-box").innerHTML = htmlstring;
}
console.log(printQuote());

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.