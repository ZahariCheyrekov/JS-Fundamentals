function sovle(arr) {

    let objects = [];

    arr.forEach(x => {
        const [town, latitude, longitude] = x.split(' | ');

        objects.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        });
    });

    objects.forEach(x => console.log(x));
}

sovle(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

sovle(['Plovdiv | 136.45 | 812.575']);