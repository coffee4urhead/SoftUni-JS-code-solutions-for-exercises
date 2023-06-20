function convertToJson(fname, lname, haircol){
    let obj = {
        name: fname,
        lastName: lname,
        hairColor: haircol
    }
    let convertionToJson = JSON.stringify(obj)
    console.log(convertionToJson);
}
convertToJson('George', 'Jones','Brown')