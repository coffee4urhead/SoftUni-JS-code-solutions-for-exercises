function centuryToMins(centuries){
    let yearsOfCentury = centuries * 100;
    let daysOfCentury = Math.trunc(yearsOfCentury * 365.2422);
    let hoursOfCentury = daysOfCentury * 24;
    let minutesOfCentury = hoursOfCentury * 60;
    console.log(`${centuries} centuries = ${yearsOfCentury} years = ${daysOfCentury} days = ${hoursOfCentury} hours = ${minutesOfCentury} minutes`);
}