function extractFiles(filePath){
    let file = filePath.substring(filePath.lastIndexOf("\\") + 1);
    let fileName = file.substring(file[0], file.indexOf("."));
    let rashirenie = file.substring(file.indexOf(".") + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${rashirenie}`);
}
extractFiles('C:\\Internal\\training-internal\\Template.pptx'
)