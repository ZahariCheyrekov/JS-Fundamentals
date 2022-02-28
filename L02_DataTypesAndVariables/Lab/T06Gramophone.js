function solve(band, album, song) {
    let duration = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');
solve('Rammstein', 'Sehnsucht', 'Engel');