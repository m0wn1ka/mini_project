module.exports.current_date=()=>{
    const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const Date = `${day}-${month}-${year}`;
return Date
}