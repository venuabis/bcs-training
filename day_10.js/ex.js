// //const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
//   {
//     id: 4,
//     title: "Eega",
//     director: "S. S. Rajamouli",
//     year: 2012,
//     ratings: [7, 8, 9],
//     genre: "Fantasy",
//   },
//   {
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [9, 9, 8],
//     genre: "Sports",
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that finds a movie by ID and returns formatted details
// const getMovieDetails = (movies, id) => {
//   var details = movies.filter(movie => movie.id == id);
//   if(details.length == 0)
//   {
//     return "movie not found";
//   }else{

  
//   return (`${details[0].title} is a ${details[0].genre} movie`);
//   }
// }
//   // Your code her


// // console.log(getMovieDetails(movies, 1));
// // console.log(getMovieDetails(movies, 5));
// // console.log(getMovieDetails(movies, 6));

// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
//   {
//     id: 4,
//     title: "Eega",
//     director: "S. S. Rajamouli",
//     year: 2012,
//     ratings: [7, 8, 9],
//     genre: "Fantasy",
//   },
//   {
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [9, 9, 8],
//     genre: "Sports",
//   },
// ];

// ===== YOUR CODE BELOW =====
// Write a function that checks if all movies of a genre have high ratings
// const allRatingsAboveForGenre = (movies, rating, genre) => {
//   // Your code here
//   const details= movies.filter(movie => movie.genre == genre);
//   const details1=details.every((movie) => 
//     movie.ratings.every((mov)=> mov>rating));
//   if(details1){
//     return (`yes  ${genre} movies are above ${rating} ratings `); ;
//       }else{
//     return (`no not all ${genre} movies are above ${rating} ratings `);


//   }
  
// };
// console.log(allRatingsAboveForGenre(movies, 7, "Action"));
// console.log(allRatingsAboveForGenre(movies, 8, "Biography"));

// const quote = "Do or Die";

// console.log(quote.split(""));
// console.log(quote.split(" ")); // ["Do", "or", "Die"]

// console.log(quote.split());

const basket = "🍎,🍊|🍓,🍍";
console.log(basket.split(","));
