var testdata = [
        {label: "60", key: 60},
        {label: "30", key: 30},
        {label: "15", key: 15},
        {label: "45", key: 45},
        {label: "20", key: 20},
        {label: "10", key: 10}
    ];

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var color = d3.scaleOrdinal()
        .domain(["60","30","15","45","20","10"])
        .range(["#d870ad", "#35c2cf", "#5d7eec", "#61a45d", "#f2994a", "#4daf4a"]);

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);

   
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#d3bar").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 // Scale the range of the data in the domains
 x.domain(testdata.map(function(d) { return d.label; }));
 y.domain([0, d3.max(testdata, function(d) { return d.key; })]);

 var tooltip1 = d3.select("#d3bar")
                .append("div")
                .attr("class", "tooltip");


 //append the rectangles for the bar chart
 svg.selectAll(".bar")
     .data(testdata)
     .enter().append("rect")
     .attr("class", "bar")
     .attr("x", function(d) { return x(d.label); })
     .attr("width", x.bandwidth())
     .attr("y", function(d) { return y(d.key); })
     .attr("height", function(d) { return height - y(d.key); })
     .style("fill", function(d) {
        return color(d.label);
    })
    .on("mousemove", function(d){
        tooltip1
          .style("left", d3.event.pageX - 50 + "px")
          .style("top", d3.event.pageY - 70 + "px")
          .style("display", "inline-block")
          .html((d.label))

    })
    .on("mouseout", function(d){ tooltip1.style("display", "none");});;


 // add the x Axis
 svg.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x));

 // add the y Axis
 svg.append("g")
     .call(d3.axisLeft(y));


