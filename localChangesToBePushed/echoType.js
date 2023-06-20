function mama(param){
    let type = typeof param;
    if (type === "string" || type === "number"){
        console.log(type);
        console.log(param);
        
    }else{
        console.log("object");
        console.log('Parameter is not suitable for printing');
    }
}