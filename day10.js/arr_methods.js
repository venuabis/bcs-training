// const marks = [90,84,82,95,30];

//  var res=marks.reduce((acc , curr) => acc > curr ? acc : curr);
//  console.log(res);

//  const scores =[
//   {
//     marks: 32,
//     name: "Yvette Merritt",
//   },
//   {
//     marks: 57,
//     name: "Lillian Ellis",
//   },
//   {
//     marks: 22,
//     name: "Mccall Carter",
//   },
//   {
//     marks: 21,
//     name: "Pate Collier",
//   },
//   {
//     marks: 91,
//     name: "Debra Beard",
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock",
//   },
//   {
//     marks: 20,
//     name: "Hatfield Hodge",
//   },
// ];
// var topperName = scores.reduce((acc, curr) => acc.marks > curr.marks ? acc: curr);
// console.log(topperName);

// // Task 1.2
// // Use Reduce
// // Find the top scorer name
// // Output
// // Debra Beard

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that formats movie titles with their ratings
const getTitlesAndRatings = (movies) => 
    movies .map((movie) => movie.title + ": "+ movie.ratings.join(", " )).join( " | ");

console.log(getTitlesAndRatings(movies));

///----------------------------------------------------------------------------------------------------
const movies1= [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => 
  // Your code here
 movies.reduce((acc,curr) => [...acc,...curr.ratings],[]);


console.log(JSON.stringify(getAllRatings(movies)));


