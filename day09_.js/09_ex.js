const y1="present";
const y2="absent";
const y3="present";

if([y1,y2,y3].every(n=>n==="present")){
   // console.log("class started");

}
else{
    //console.log("waiting for student");
}
// task 1.2.2 with every();
const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "absent" },
  { name: "Rohan", status: "present" },
];
if(students.every(n=>n.status=="present")){
    //console.log("class started");

}else{
   // console.log("waiting for student");
}
// task 1.2.1 with && ;
if(students[0].status =="present" && students[1].status =="present" && students[2].status =="present"){
    //console.log("class started");
}else{
    //console.log("waiting for student");
}
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
  // Your code here
  return numbers.map((n)=> n * 2);
};

console.log(JSON.stringify(doubleNumbers(numbers)));



