module.exports.current_date=()=>{
    console.log("curren tdate called")
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const Date1 = `${day}-${month}-${year}`;
console.log("just before rugn of current date")
return Date1
}