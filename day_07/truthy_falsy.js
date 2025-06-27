const x = [null];

if(x){
   // console.log("Awesome");

}
else{
   // console.log("super");
}


const csk = {
    captain : "MSD",
    color : "Yellow",
    stats : {
        win : 5,
        loss : 11,
    },

};
//console.log(csk.stats.win);

const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    loss: 11,
  },
};

//console.log(csk2.stats.win);

const csk3 = {
  captain: "MSD",
  color: "yellow",
};

//const csk = null;

 function getWinStat(team){

  if(team?.stats?.win) // falsy case  -> undefined -> it will skip if.
  {
    return team.stats.win;
  }

  else{
     return "does not found";
  }
  
  }




// console.log(getWinStat((csk1.stats.win)));//5
// console.log(getWinStat(csk2));// data not found.
// console.log(getWinStat(csk3));// data not found.
// console.log(getWinStat(csk));// data not found.
const getWinStat2 = (team) => team?.stats?.win ?? "data not found";
  
  

  console.log(getWinStat2((csk1.stats.win)));//5
console.log(getWinStat2(csk2));// data not found.
console.log(getWinStat2(csk3));// data not found.
console.log(getWinStat2(csk));// data not found.
