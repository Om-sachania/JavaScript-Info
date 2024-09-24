let date1 = new Date("2018/07/01");
let date2 = new Date("2020/05/03");

function getDateDifference(startDate,endDate) {
    let dateDiff=endDate-startDate;
    let seconds=dateDiff/1000;
    let minutes=seconds/60;
    let hours=minutes/60;
    let days=hours/24;
    let months=Math.floor(days/30.44);
    let years=Math.floor(months/12);

    let difference ={
        years,
        months : months%12,
        days : Math.floor(days%30.44)
    };
    return difference
}

let dateDiffence=getDateDifference(date1,date2);
console.log(dateDiffence);

