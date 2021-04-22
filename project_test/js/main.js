var data;

function dataIsReady(csv) {
    data = csv;
    update();
}

function parseNumber(d) {
    return d === "" ? null : +d;
}

function transformRow(d) {
    return {
        name: d.birdName,
        code: d.birdCode
        // id: d.id,
        // hydroelectric: parseNumber(d.hydroelectric),
        // nuclear: parseNumber(d.nuclear),
        // oilgascoal: parseNumber(d.oilgascoal),
        // renewable: parseNumber(d.renewable)
    };
    console.log(name);
}

d3.csv('data/birds.csv', transformRow)
    .then(dataIsReady);
