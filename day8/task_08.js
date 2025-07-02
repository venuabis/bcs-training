const books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]



// ### Expected Output

//["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

// function getData(books){
//     var arr = [];
//     for(let book of books){
//         arr.push(book["title"]);
//  }
//     return arr;
// }
//  console.log (getData(books));
// ###----------------------------------------------------------
// function getData(books){
//     var arr = [];
//     for(let book of books){
//         if(book.genre == "Fiction"){
//             arr.push(book.title);
//         }
//     }
//     return arr;
// }
// console.log(getData(books));


const getData=(books) =>  books.map(book=>book.title);
   

console.log(getData(books));

const getFictionData=(books) =>(books.filter((book)=>book.genre=="Fiction")).map ((book)=>book.title);

console.log(getFictionData(books));
// ###----------------------------------------------------------
//### join () array to String
//### split () string to array.

//## MAP
//##.three rules of map
   // 1.it always returns copy of Array.
    // 2.sourceArray.lenght === outputArray.length -> true
    // 3. transforms data type.