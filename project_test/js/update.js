function updateGroup(d, i) {
  var g = d3.select(this);

  if (g.selectAll("*").empty()) {
    defs = g.append("svg:defs");
    g.append("circle");
    // g.append("text").classed("label", true);
  }

  g.classed("country", true).attr(
    "transform",
    "translate(" + d.x + "," + d.y + ")"
  );

  defs.append("pattern")
        .attr("id", function(d) { return d.code; })
        .attr("width", 1)
        .attr("height", 1)
        .attr("patternUnits", "objectBoundingBox")
        .attr("x", 0)
        .attr("y", 0)
    .append("image")
        .attr("xlink:href", function (d) {
        return "pics/" + d.code + ".jpg";
        })
        .attr("width", d.radius * 2)
        .attr("height", d.radius * 2)
        .attr("preserveAspectRatio", "xMidYMid slice");
        

  g.select("circle") //画圆
    .attr("r", d.radius)
    .attr("class", "pic")
         .attr("r", d.radius)    
         .style("stroke", "#00778B")     
         .style("stroke-width", 4)
         .style("fill", function(d){
            return "url(#" + d.code + ")";
         });
         
  g.select(".label").attr("y", d.labelOffset).text(d.labelText);
}

function update() {
  var layoutData = layout(data);

  d3.select("#chart")
    .selectAll("g")
    .data(layoutData)
    .join("g")
    .each(updateGroup);
}
