
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export const currentDate = ()=>{
    const datatime = new Date();
  
    return (`${datatime.getHours()}:${datatime.getMinutes()} ${month[datatime.getMonth()]} ${datatime.getDate()}, ${datatime.getFullYear()}`)
    
  }