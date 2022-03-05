function solve(params) {
    let str = params.split(' ');
    const materials = {};

    const legendaryItems = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath',
    };

    let result = '';

    for (let i = 0; i < str.length; i += 2) {
        let quantity = Number(str[i]);
        let material = str[i + 1].toLowerCase();

        if (!materials.hasOwnProperty(material)) {
            materials[material] = 0;
        }
        materials[material] += quantity;

        if (materials[material] >= 250 && material in legendaryItems) {
            result += `${legendaryItems[material]} obtained!\n`;
            materials[material] -= 250;
            break;
        }
    }

    for (let item in legendaryItems) {
        if (!materials.hasOwnProperty(item)) {
            materials[item] = 0;
        }
    }

    const legendaryItemsCollected = Object.entries(materials)
        .filter((item) => hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortDescending(a[1], b[1]) || sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');

    const junkItemsCollected = Object.entries(materials)
        .filter((item) => !hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');

    result += legendaryItemsCollected + '\n' + junkItemsCollected;

    function hasLegendaryItems(items, item) {
        return items.hasOwnProperty(item);
    }

    function formatText(textArr) {
        return `${textArr[0]}: ${textArr[1]}`;
    }

    function sortAlphabetically(a, b) {
        return a.localeCompare(b);
    }

    function sortDescending(a, b) {
        return b - a;
    }

    return result;
}