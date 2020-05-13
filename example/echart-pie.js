var chart = document.getElementById('piechart');
var myChart = echarts.init(chart);

var option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'horizontal',
            top: 10,
            data: ['a', 'b', 'c', 'd', 'e']
        },
        series: [
            {
                name: 'pie chart',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 335, name: 'a'},
                    {value: 310, name: 'b'},
                    {value: 234, name: 'c'},
                    {value: 135, name: 'd'},
                    {value: 1548, name: 'e'}
                ]
            }
        ]
    };

myChart.setOption(option);
    