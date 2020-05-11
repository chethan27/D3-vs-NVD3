var testdata = [
        {key: "60", y: 60, },
        {key: "30", y: 30},
        {key: "15", y: 15},
        {key: "45", y: 45},
        {key: "20", y: 20},
        {key: "10", y: 10}
    ];

    var height = 460;
    var width = 460;

    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .width(width)
            .height(height)
            .showTooltipPercent(true);

            d3.select("#test1")
            .datum(testdata)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        return chart;
    });