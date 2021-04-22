function getTruncatedLabel(text) {
    return text.length < 10 ? text : text.slice(0, 9) + '...';
}

function layout(data) {
    var labelHeight = 20;
    var cellWidth = config.width / config.numColumns;
    var cellHeight = cellWidth + labelHeight;

    var maxRadius = 0.35 * cellWidth;

    // var radiusScale = d3.scaleSqrt()
    //     .domain([0, 100])
    //     .range([0, maxRadius]);

    var layoutData = data.map(function(d, i) {
        var item = {};

        var column = i % config.numColumns;
        var row = Math.floor(i / config.numColumns);

        item.x = column * cellWidth + 0.5 * cellWidth;
        item.y = row * cellHeight + 0.5 * cellHeight;
        item.radius = 50;

        item.labelText = getTruncatedLabel(d.name);
        item.labelOffset = maxRadius + labelHeight;
        item.code = d.code;

        return item;
    });

    return layoutData;
}
