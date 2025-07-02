// for(let i=1; i<=10; i++)
// {
//     //console.log("hi");
// }

// const codes = ["alpha","beta","gamma","delta"];
// for(let i=0; i<=10; i++)
// {
//  //   console.log(i, codes[i]);
// }

//for
//for.off
//for...in
// OutputAdd commentMore actions
// Hulk contains 4 letters
// Iron man contains 8 letters
// ...
// Thor contains 4 letters

// const avengers = [
//   "Hulk",
//   "Iron man",
//   "Black widow",
//   "Captain america",
//   "Spider man",
//   "Thor",
// ];
// function movies(avenger){
// for(var avenger of avengers)
//     console.log(`${avenger} contains ${avenger.length} letters`);

// }
// movies(avengers)

function printPattern(pattern = "❤️", number = 5) {
  for (var i = 1; i <= number; i++) {
    console.log(pattern.repeat(i));
  }
}
printPattern("❤️", 5);

//const nums = [80, 43, 72, 47, 20, 21];Add commentMore actions
//getEvenNumbers(nums);

// Output
// [80, 72, 20];
function getEvenNumbers(nums) {
  let ans = [];
  for (let even of nums) {
    if (even % 2 == 0){
      ans.push(even);
    }
  }
  console.log(ans);
}
const num = [80, 43, 72, 47, 20, 21];
getEvenNumbers(num);
