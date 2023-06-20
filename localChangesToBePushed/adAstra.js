function adAstra(data){
    let regEx = /([|#])(?<item>[a-zA-Z ]*)\1(?<day>[0-9]{2,})\/(?<month>[0-9]{2,})\/(?<year>[0-9]{2,})\1(?<calories>[0-9]{1,5})\1/g
    let allCalories = 0;
    let buff = "";
    for(const line of data){
        let matches = line.matchAll(regEx);
        for(const match of matches){
            allCalories += Number(match.groups.calories);
            let d = match.groups.day;
            let m = match.groups.month;
            let y = match.groups.year;
            buff += `Item: ${match.groups.item}, Best before: ${d}/${m}/${y}, Nutrition: ${match.groups.calories}\n`;
        }
    }
    console.log(`You have food to last you for: ${Math.floor((allCalories / 2000))} days!`);
    console.log(buff);
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )