






afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1) 


function afterNYears(name, year){
    let natija = {}
    for(let i in name){
        natija[i] = name[i] + year
    }
    console.log(natija);
    
}
afterNYears()
// ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) 
// ➞ {
//   "Baby" : 21,
//   "Child" : 27,
//   "Teenager" : 34,
//   "Adult" : 44,
//   "Elderly" : 90
// }

afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5) 
// ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }




