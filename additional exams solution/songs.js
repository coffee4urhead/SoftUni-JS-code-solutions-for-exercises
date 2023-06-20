function songs(arr){
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numOfSongs = arr.shift();
    let typeOfSong = arr.pop();
    for(let i = 0; i < numOfSongs; i++){
        let [typeList, name, time] = arr[i].split("_");
        let song = new Song(typeList, name, time)
        songs.push(song)
    }
    if(typeOfSong === "all"){
        songs.forEach(el => console.log(el.name));
    }else{
        let filtered = songs.filter(i => i.type === typeOfSong);
        filtered.forEach(el => console.log(el.name));
    }
    
}
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])