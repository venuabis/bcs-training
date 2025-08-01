const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

const userWithoutSettings = { id: 2, name: "Adam" };

// ===== YOUR CODE BELOW =====
// Write a function that extracts the user's name and theme with default values
// const getUserSettings = (user) => {
// Your code here - use destructuring with default values
//   const {
//     id,
//     name,
//     settings: {theme}=user,
// }
// return (name,theme);
// };

console.log(getUserSettings(userProfile));
console.log(getUserSettings(userWithoutSettings));
