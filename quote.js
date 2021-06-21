const quote = document.querySelector("blockquote");
const author = document.querySelector("p");
const changeQuote = document.querySelector("button")
function generateRandomColor(){
   var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
   return randomColor;
   //random color will be freshly served
}
changeQuote.addEventListener("click",generateQuote)

function generateQuote(){
   const url = "https://api.quotable.io/random";
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
      quote.innerHTML = data.content; 
      quote.style.color = generateRandomColor()
     author.innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }