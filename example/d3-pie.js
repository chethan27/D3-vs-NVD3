var data = [10, 60, 30, 15, 45, 20];
var leg_data = data;
var margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    },
    width = 400 - margin.right - margin.left,
    height = 400 - margin.top - margin.bottom,
    radius = width / 2;
var legend;
var color = d3.scaleOrdinal()
    .range(["#d870ad", "#35c2cf", "#5d7eec", "#61a45d", "#f2994a", "#4daf4a"]);

function pie_generate() {
    // arc generator
    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    
    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);
    
    // pie generator 
    var pie = d3.pie()
        .sort(null)
        .value(function(d) {
            return d;
        });
    
    
    // append svg 
    var svg = d3.select(".mainCont").append("svg")
        .attr("width", width + 200)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    // append the g element
    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");
    
    // append the path 
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) {
            return color(d.data);
        });
    
    
    //tooltip
    var tooltip = d3.select(".mainCont")
        .append('div')
        .attr('class', 'tooltip');
    
    tooltip.append('div')
        .attr('class', 'label');
    
    // append tooltip 
    g.on('mouseover', function(d) {
        tooltip.select('.label').html(d.data).style('color', 'black');
        tooltip.style('display', 'block');
        tooltip.style('opacity', 2);
    
    });
    
    g.on('mousemove', function() {
        tooltip.style('top', (d3.event.layerY + 10) + 'px')
            .style('left', (d3.event.layerX - 25) + 'px');
    });
    
    g.on('mouseout', function() {
        tooltip.style('display', 'none');
        tooltip.style('opacity', 0);
    });
    
    // append the text labels
    g.append("text")
        .attr("transform", function(d) {
            return "translate(" + labelArc.centroid(d) + ")";
        })
        .attr("dy", ".35em")
        .text(function(d) {
            return d.data;
        });
    
    var size = 30;
    legend = svg.selectAll("circle1")
            .data(leg_data)
            .enter()
            .append("circle")
            .attr("cx", 300)
            .attr("cy", function(d, i) {
                return -60 + i * (size)
            }) 
            .attr("r", 6)
            .style("fill", function(d) {
                return color(d)
            });
        
            svg.selectAll("mylabels")
            .data(leg_data)
            .enter()
            .append("text")
            .attr("x", 300 + size)
            .attr("y", function(d, i) {
                return -60 + i * (size)
            }) 
            .style("fill", function(d) {
                return color(d)
            })
            .text(function(d) {
                return d
            })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")
        
            legend.on('click', function(d) { 
                const index = data.indexOf(d); 
                if (index > -1) { 
                    data.splice(index, 1); 
                } else if (index === -1) { 
                    data.push(d); 
                } 
                d3.select("svg").remove(); // append svg 
                pie_generate(); 
                console.log("d",d) 
            })
} 

pie_generate()





