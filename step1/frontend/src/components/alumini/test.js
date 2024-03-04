
// let a={ name: "radh", branch: "cse", "year of passowut": "2025" }
// console.log(a,typeof(a))
// for (let key in a){
//     console.log(key,":",a[key])
// }
// console.log("keys are",Object.keys(a))
// a=[1,2,3]
// a.map(x=>console.log(x))

let a={ name: "radh", branch: "cse", "year of passowut": "2025" }
let get_data=Object.keys(a)
let data=()=>{get_data.map(x=>{
  console.log(x,":",a[x])

})
}
data()