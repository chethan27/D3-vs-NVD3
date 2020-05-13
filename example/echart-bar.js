var chart = document.getElementById('barchart');
var myChart = echarts.init(chart);
var option = {
        tooltip: { },
        legend: { data: [ 'Sales' ] },
        xAxis: { data: [ "shirt", "cardign", "chiffon shirt", "pants", "heels", "socks" ] },
        yAxis: { },
        series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
        }]
};
myChart.setOption(option);