function solve(data) {

    let heroesData = [];

    data.forEach(x => {
        const [name, level, items] = x.split("/")
        heroesData.push({
            name,
            level: Number(level),
            items: items
                .split(", ")
                .map(x => x.trim())
                .join(", "),
        });
    });

    heroesData
        .sort((x, y) => x.level - y.level)
        .forEach(x =>
            console.log(`Hero: ${x.name}
level => ${x.level}
items => ${x.items}`)
        );
}