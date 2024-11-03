//define chart options
const chartOptions ={
    chart:{
        type:'area',
        height:180,
        toolbar:{show:false},//hide chart toolbar
        zoom:{enabled:false},//disable chart zooming
    },
    colors: ['#FFA1F5'], // Set chart color
    series: [{ name: 'Improvement', data: [10, 20, 40, 60, 80, 100] }], // Set chart data
    dataLabels: { enabled: false }, // Hide chart data labels
    stroke: { width: 3, curve: 'smooth' }, // Set chart stroke properties
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100] // Set chart fill gradient stops
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Set x-axis categories
        axisBorder: { show: false }, // Hide x-axis border
        labels: { style: { colors: '#1D2B53', fontFamily: 'Poppins' } } // Set x-axis label properties
    },
    yaxis: { show: false }, // Hide y-axis
    grid: {
        borderColor: 'rgba(0, 0, 0, 0)', // Set grid border color
        padding: { top: -30, bottom: -8, left: 12, right: 12 } // Set grid padding
    },
    tooltip: {
        enabled: true, // Enable chart tooltip
        y: { formatter: value => `${value}+` }, // Set y-axis tooltip label formatter
        style: { fontFamily: 'Poppins' } // Set tooltip font family
    },
    markers: { show: false } // Hide chart markers
};
// Create new ApexCharts instance with chart options and render it
const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();