//function moodReport(emoji="🙂",timeOfTheDay="morning 🌅."){
   //return `Feeling ${emoji} this ${timeOfTheDay}`;

//}

 ///console.log(moodReport());
///console.log(moodReport("😎", "afternoon ☀️")); 
//console.log(moodReport("😎")); 
///Feeling 🙂 this morning 🌅.
///Feeling 😎 this afternoon ☀️.

//------------------------------------------------------------//

function checkAgeCategory(age)

{
    if(age >= 18)
   {
       return "You are a adult";
    }
    else if(age >= 60)
    {
        return "You are an senior";
    }
    else 
    {
       return "You are a minor";
    }
}
//console.log(checkAgeCategory());
//console.log(checkAgeCategory(12));
//console.log(checkAgeCategory(65));
//console.log(checkAgeCategory(19)); 

//------------------------------------------------------------//


function introduceWizard(wz){
    const{
        title,
        name,
        wand: { core },
    }=wz
    //return (`${title} ${name} wields a wand with ${core} core.`);
}
const wizard ={
 name: "Merlin",
  title: "Archmage", 
  wand: { core: "Phoenix Feather" } 
}

//console.log(introduceWizard(wizard));
//Archmage Merlin wields a wand with Phoenix Feather core.

///TASK 1.4;
//["🍎", "🥪", "🍫", "🍇", "🧃"]


function mergeInventory(shelf, delivery){
   return [...shelf,...delivery,..."🧃"];
    
}

const shelf = ["🍎", "🥪"];
const delivery = ["🍫", "🍇"];
//console.log(mergeInventory(shelf, delivery));
function packBag(owner="anon",...items)
{
if(items.length ===0)
{
    return `${owner}'s bag is empty.`;
}else{
    return `${owner}'s bag contains :${items}.`;
}
}
//console.log(packBag("Natasha", "💄", "🔫"));
//console.log(packBag());
function whereAreYou({user="someone",
    location:{city="unknown", planet="Earth"}={}}) {
    return `${user} is currently in ${city}, ${planet} 🌍`;

}

//console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
//console.log(whereAreYou({}));


//Thor is currently in Asgard, Yggdrasil 🌍
//Someone is currently in Unknown, Earth 🌍
