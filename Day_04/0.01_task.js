var name = "vEnU";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

var quote = " Do Good Be Good ";
console.log(quote.trim());


//////////////////////////////////////////////////////////////////////////
var stock1="vanila";
var stock2="choclate";
var stock3 ="butterscotch";
var stock4="candy";
var stockname=prompt("please enter your favourite").trim().toLowerCase();
if(stockname==stock1|| stockname==stock2||stockname==stock3||stockname==stock4)
{
    console.log(`yes we have  ${stockname} stock`)
}
else{
    console.log(`we have no ${stockname} stock`)
}


/// undefined vs not defined
//      undefined is a value
//      not defined is error



/// array - group of same data
/// index - value
var student = {name :"abi",age : 23,collage : "NMC", isRich : true,
    "personl hobbies":["hockey","travelling","cricke"]};



/// object - group of different data values
/// key - value pairs

/// access the values
/// 1.dot syntax
/// 2.box syntax
console.log(student);
console.log(student.collage);// dot syntax
console.log(student["collage"]);//box syntax
console.log(student["personal hobbies"]);



///////////////////////////////
const r1=[100,200];
const r2=[700,900];
const r3=r1;

console.log(r3);