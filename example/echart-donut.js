var chart = document.getElementById('donutchart');
var myChart = echarts.init(chart);

var option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'vertical',
            right: 50,
            data: ['a', 'b', 'c', 'd', 'e']
        },
        series: [
            {
                name: 'donut chart',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                   //position: 'center'
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
    