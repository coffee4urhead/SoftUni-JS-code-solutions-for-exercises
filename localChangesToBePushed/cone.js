function cones(radius, height){
    let volume = Math.PI * Math.pow(radius, 2) * height * 0.333333333;
    let surf = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surf.toFixed(4)}`);
}