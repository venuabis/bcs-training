var person1Name = window.prompt("enter person1 name:");
var person2Name = window.prompt("enter person2 name:");
var person1Height = +window.prompt("enter person1Height:");
var person2Height = +window.prompt("enter person2Height:"); 

var diff = Math.abs(person1Height - person2Height);

if(person1Height > person2Height)
{
    console.log(`${person1Name} is taller than ${person2Name} by ${diff}cm`);
}
if(person1Height = person2Height)
{
    console.log(`${person1Name} are in same height ${person2Name} `);
}
else{
    console.log(`${person2Name} is taller than ${person1Name} by ${diff}cm`);
}




