let dataJson1 = [
    {'name': 'KE', 'value': '50', 'color': 'rgba(0,255,0, 0.5)'},
    {'name': 'KV', 'value': '35', 'color': 'rgba(0,255,0, 0.5)'},
    {'name': 'WE', 'value': '21', 'color': 'rgba(255,0,0, 0.5)'},
    {'name': 'WdW', 'value': '27', 'color': 'rgba(255,0,0, 0.5)'},
    {'name': 'PS', 'value': '30', 'color': 'rgba(255,0,255, 0.5)'},
    {'name': 'E', 'value': '53', 'color': 'rgba(0,0,128, 0.5)'},
    {'name': 'FZ', 'value': '22', 'color': 'rgba(0,0,128, 0.5)'},
    {'name': 'SA', 'value': '29', 'color': 'rgba(0,0,128, 0.5)'},
]
let dataJson2 = [
    {'name': 'KE', 'value': '100', 'color': 'rgba(0,255,0, 0.5)'},
    {'name': 'KV', 'value': '100', 'color': 'rgba(0,255,0, 0.5)'},
    {'name': 'WE', 'value': '100', 'color': 'rgba(255,0,0, 0.5)'},
    {'name': 'WdW', 'value': '100', 'color': 'rgba(255,0,0, 0.5)'},
    {'name': 'PS', 'value': '100', 'color': 'rgba(255,0,255, 0.5)'},
    {'name': 'E', 'value': '100', 'color': 'rgba(0,0,128, 0.5)'},
    {'name': 'FZ', 'value': '100', 'color': 'rgba(0,0,128, 0.5)'},
    {'name': 'SA', 'value': '100', 'color': 'rgba(0,0,128, 0.5)'},
]

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: dataJson2.map(dataName => dataName.name),
        datasets: [
            {
                label: 'MRI Leustung (Business Name): (OR)%',
                fill: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: dataJson2.map(dataName => dataName.color),
                pointBorderColor: "#fff",
                radius: 5,
                pointRadius: 30,
                pointHoverRadius: 30,
                borderWidth: 3,
                data: dataJson2.map(dataName => dataName.value)
            },
            {
                fill: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: dataJson1.map(dataName => dataName.color),
                pointBorderColor: "#fff",
                radius: 5,
                pointRadius: 15,
                pointHoverRadius: 15,
                borderWidth: 1,
                data: dataJson1.map(dataName => dataName.value)

            },

        ]
    },

    // Configuration options go here
    options: {
        scale: {
            angleLines: {
                display: true,
            },
            legend: {
                display: true
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});
