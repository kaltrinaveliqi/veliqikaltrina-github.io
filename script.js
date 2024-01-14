const quotes = [{
    quote: '"Elegance is an attitude." ',
    writer: '-Diana Vreeland-'
},{
    quote: '"Fashion you can buy, but style you possess." ',
    writer: '-Iris Apfel-'
},{
    quote: '"I like my money right where I can see it: hanging in my closet." ',
    writer: '-Carrie Bradshaw -'
},{
    quote: '"The joy of dressing is an art." ',
    writer: '-John Galliano-'
},{
    quote: '"Fashion is what you buy, style is what you do with it."',
    writer: '-Rachel Zoe-'
},{
    quote: '"Style is an outward expression of the inner face." ',
    writer: '-Coco Chanel-'
},{
    quote: '"The right outfit can change your life. Why not make every day a beautiful intervention?"',
    writer: '-Coco Chanel-'
},{
    quote: '"Dressing is not just a necessity but an expression of freedom."  ',
    writer: '-Karl Lagerfeld-'
},]

let btn = document.querySelector("#Qbtn")
let quote = document.querySelector(".quote")
let writer = document.querySelector(".writer")

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})
