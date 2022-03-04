function solve(arr) {

    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = arr.shift();
    let typeOfSong = arr.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = arr[i].split('_');
        songs.push(new Song(typeList, name, time));
    }

    if (typeOfSong === 'all') {
        songs.forEach((song) => console.log(song.name));
    } else {
        let filteredSongs = songs.filter((song) => song.typeList === typeOfSong);
        filteredSongs.forEach((song) => console.log(song.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);