# Destructuring

## Exercise 9:

Extract properties from an object using destructuring assignment.

### Answer

```js
const person = { name: "Alice", age: 30, city: "New York" };

// ===== YOUR CODE BELOW =====
// Use object destructuring to extract name and age
const extractPersonInfo = (person) => {
  // Your code here - use destructuring
  const { name, age } = person;
  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));
```

### Execpted Output

```js
Alice is 30 years old
```

## Exercise 10:

Extract elements from an array using destructuring assignment.

### Answer

```js
const colors = ["red", "green", "blue", "yellow"];
const coordinates = [10, 20];

// ===== YOUR CODE BELOW =====
// Use array destructuring to extract first two colors
const getFirstTwoColors = (colors) => {
  // Your code here - use array destructuring
  const [first, second] = colors;

  return `First: ${first}, Second: ${second}`;
};

console.log(getFirstTwoColors(colors));
```

### Expected Output

```js
First: red, Second: green
```

### Array

## Exercise 15;

Transform an array of numbers by doubling each value using the map method.

### Answer

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
  // Your code here
  return numbers.map((numbers) => numbers * 2);
};

console.log(JSON.stringify(doubleNumbers(numbers)));
```

### Expected output

```js
[2, 4, 6, 8, 10];
```

## Exercise 16;

Filter an array to keep only even numbers using the filter method.

### Answer

```js
onst numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => {
  // Your code here
  return numbers .filter(n => n %2 == 0)
};

console.log(JSON.stringify(getEvenNumbers(numbers)));
```

## Expected Output:

```js
[2, 4, 6, 8, 10];
```

## Exercise 3.1

Please provide the list of book titles

### Answer

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getData = (books) => books.map((book) => book.title);
console.log(getData(books));
```

### Expected output

```js
[
  "Infinite Jest",
  "The Catcher in the Rye",
  "Sapiens",
  "A Brief History of Time",
  "Clean Code",
];
```

## Exercise 3.2

### Answer

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getFictionData = (books) =>
  books.filter((book) => book.genre == "Fiction").map((book) => book.title);

console.log(getFictionData(books));
```

### Expected output

```js
["Infinite Jest", "The Catcher in the Rye"];
```

## Exercise 5;

Write a function that finds a movie by ID and returns its title and genre in a formatted string using array methods and template literals.

### Answer

```js
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
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds a movie by ID and returns formatted details
const getMovieDetails = (movies, id) => {
  var details = movies.filter((movie) => movie.id == id);
  if (details.length == 0) {
    return "movie not found";
  } else {
    return `${details[0].title} is a ${details[0].genre} movie`;
  }
};
// Your code her

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));
```

### Expected output

```js
Baahubali is an Action movie
Jersey is a Sports movie
Movie not found
```

## Exercise 7;

Write a function that checks if all movies of a certain genre have ratings above a certain value using array methods.

### Answer

```js
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
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that checks if all movies of a genre have high ratings
const allRatingsAboveForGenre = (movies, rating, genre) => {
  // Your code here
  const details = movies.filter((movie) => movie.genre == genre);
  const details1 = details.every((movie) =>
    movie.ratings.every((mov) => mov > rating)
  );
  if (details1) {
    return `yes  ${genre} movies are above ${rating} ratings `;
  } else {
    return `no not all ${genre} movies are above ${rating} ratings `;
  }
};
console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));
```

### Expected output

```js
Yes, all Action movies are above 7 ratings
No, not all Biography movies are above 8 ratings
```
