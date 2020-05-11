var testdata = [
        {key: "60", y: 60, },
        {key: "30", y: 30},
        {key: "15", y: 15},
        {key: "45", y: 45},
        {key: "20", y: 20},
        {key: "10", y: 10}
    ];

    var height = 400;
    var width = 400;

//Donut chart example
nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .width(width)
            .height(height)
            .showLabels(true)     //Display pie labels
            .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
            .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
            .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
            .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
            ;
      
          d3.select("#chart2")
              .datum(testdata)
              .transition().duration(350)
              .attr('width', width)
              .attr('height', height)
              .call(chart);
      
        return chart;
});
      