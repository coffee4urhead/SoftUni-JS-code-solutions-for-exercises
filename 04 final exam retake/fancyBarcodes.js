function barcodes(input){
    function getProductGroup(barcode, regexToFindTheDigits, prodGroup){
        if(!regexToFindTheDigits.test(barcode)){
            prodGroup = "00";
            return prodGroup;
        }else{
            let allMatches = barcode.match(regexToFindTheDigits);
            prodGroup = allMatches.join("");
            return prodGroup;
        }
    }

    let countOfBarcodesExpected = Number(input[0]);
    let barcodeReg = /(?<splt>[@][#]{1,})(?<barcode>[A-Z]+[a-zA-Z0-9]{4,}[A-Z]+)\1/gm;
    let digsReg = /(?:\d{1})/gm;
    // I need to modify This problem cuz of an untipical error that is not expectd but occurs

    for(let i = 1; i <= countOfBarcodesExpected; i++){
        let expectableBarCode = String(input[i]);
        let productGroup = "";
        let test = barcodeReg.test(expectableBarCode);
        if(test){
            productGroup = getProductGroup(expectableBarCode, digsReg, productGroup);
            console.log(`Product group: ${productGroup}`);
        }else{
            console.log("Invalid barcode");
        }
    }
    // Special regards and thank to SoftUni for providing efficient problems
}
barcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

