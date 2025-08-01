# Simple Arrow Function

## Exercise 1:

Create a basic arrow function that adds two numbers. This is your first step into ES6!

### Answer

```js
// Create an arrow function that adds two numbers
const add = (x, y) => {
  return x + y;
};
console.log(add(5, 3));
console.log(add(10, 7));
```

### Execpted output:

```js
8;
17;
```

## Exercise 2:

Use template literals to create a greeting message. Learn the power of string interpolation!

### Answer

```js
const greetUser = (name) => {
  return `Hello ${name}!`;
};

console.log(greetUser("Alice"));
console.log(greetUser("Bob"));
```

### Expected output:

```js
Hello, Alice!
Hello, Bob!
```

## Example 3:

Safely access object properties that might not exist using optional chaining.

### Answer

```js
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

// ===== YOUR CODE BELOW =====
// Create a function that safely gets a user's age
const getUserAge = (user) => {
  // Your code here - use optional chaining
  return user?.age;
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
```

### Expected output

```js
25;
undefined;
undefined;
```

## Example 4:

Provide default values for null or undefined using the nullish coalescing operator.

### Answer

```js
const settings1 = { theme: "dark" };
const settings2 = { theme: null };
const settings3 = { theme: undefined };
const settings4 = {};

// ===== YOUR CODE BELOW =====
// Create a function that gets theme with a default value
const getTheme = (settings) => {
  // Your code here - use nullish coalescing
  return settings.theme ?? "light";
};

console.log(getTheme(settings1));
console.log(getTheme(settings2));
console.log(getTheme(settings3));
console.log(getTheme(settings4));
```

### Expected output:

```js
dark;
light;
light;
light;
```

## Exercise 5:

Implement the getUserAge function to extract the user's age or provide a default message if it's not available using optional chaining and nullish coalescing.

### Answer:

```js
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userWithAge = { user: { profile: { age: 25 } } };
const userWithoutProfile = { user: {} };

// ===== YOUR CODE BELOW =====
// Write a function that safely returns the user's age or a default message
const getUserAge = (data) => {
  return data.user?.profile?.age ?? "Age not provided";
};

console.log(getUserAge(userData));
console.log(getUserAge(userWithAge));
console.log(getUserAge(userWithoutProfile));
```

### Expected output:

```js
Age not provided
25
Age not provided
```

## Example 6:

Calculate the total price of all products in your cart using arrow functions and array methods.

### Answer

```js
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates the total price of all products
const getTotalPrice = (products) => {
  return products.reduce((acc, curr) => acc + curr.price, 0);
};

console.log(getTotalPrice(products));
```

### Expected output:

```js
2200;
```

## Example 7:

Write a function that takes a user object and returns a message indicating their activity status using template literals and ternary operator.

### Answer

```js
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
const user3 = { name: "Alice", active: null };

// ===== YOUR CODE BELOW =====
// Write a function that returns a message indicating if the user is active
const getUserStatus = (user) => {
  return `${user.name} is currently ${
    user.active == true ? "active" : "Inactive"
  } `;
};

console.log(getUserStatus(user1));
console.log(getUserStatus(user2));
console.log(getUserStatus(user3));
```

### Expected Output:

```js
Jane is currently active
John is currently inactive
Alice is currently inactive

```

## Example 8

Create a function that returns a greeting message based on the time of day using Date methods and template literals.

### Answer

```js
// Create a function that returns a greeting message based on time of day
const greet = (name) => {
  // Your code here - use Date methods to determine the current hour
  // Morning: 0-11, Afternoon: 12-17, Evening: 18-23
  const calculate = new Date().getHours();
  return calculate <= 11
    ? `Good Morning ,${name}!`
    : calculate <= 17
    ? `Good Afternoon ,${name}!`
    : `Good Evening, ${name}!`;
};

// Test with different times
console.log(greet("Alice"));
```

### Expected output:

```js
Good morning, Alice!
```

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

## Example 11:

Use the spread operator to combine arrays and copy objects.

### Answer

```js
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];

// ===== YOUR CODE BELOW =====
// Use spread operator to combine arrays
const combineArrays = (arr1, arr2) => {
  // Your code here - use spread operator
  return [...arr1, ...arr2];
};

console.log(JSON.stringify(combineArrays(fruits, vegetables)));
```

### Expected output

```js
["apple", "banana", "carrot", "broccoli"];
```

## Exercise 12:

Write a function that extracts the user's name and theme, providing default values if they are missing using destructuring with default values.

### Answer

```js

```

### Excepted output

```js
Eve prefers the dark theme
Adam prefers the light theme
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
