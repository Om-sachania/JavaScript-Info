let date1 = new Date("2018/07/01");
let date2 = new Date("2020/05/03");

function getDateDifference(startDate,endDate) {
    let dateDiff=endDate-startDate;
    let seconds=dateDiff/1000;
    let minutes=seconds/60;
    let hours=minutes/60;
    let days=hours/24;
    let weeks=days/7;
    let months=Math.floor(days/30.44);
    let years=Math.floor(months/12);

    let differenceInYears ={
        years,
        months : months%12,
        days : Math.floor(days%30.44)
    };

    let differenceInMonths = {
        months,
        days : Math.floor(days%30.44)
    };

    let differenceInWeeks = {
        weeks,
        days : Math.floor(days%7)
    };  

    let differenceInHours = {
        hours
    };

    let differenceInMinutes = {
        minutes
    }
    return [differenceInYears,differenceInMonths,differenceInWeeks,differenceInHours,differenceInMinutes]
}

let dateDiffence=getDateDifference(date1,date2);
let differenceInYears=dateDiffence[0];
let differenceInMonths=dateDiffence[1];
let differenceInWeeks=dateDiffence[2];
let differenceInHours=dateDiffence[3];
let differenceInMinutes=dateDiffence[4];
console.log("Date Differnece in Years : ",differenceInYears);
console.log("Date Differnece in Months : ",differenceInMonths);
console.log("Date Differnece in Weeks : ",differenceInWeeks);
console.log("Date Differnece in Hours : ",differenceInHours);
console.log("Date Differnece in Minutes : ",differenceInMinutes);