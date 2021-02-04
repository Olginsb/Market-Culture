let btn = document.querySelector('.submit');
let dataJson1 = [];
let dataJson2 = [];
let opacity = dataJson1.map(dataName => dataName.value)/100;

function addChartValue() {
    let data1 = this.dataJson1;
    let list = this.getChartVal();
    localStorage.setItem('chartVal', JSON.stringify(list));
}

function getChartVal (){
    const chartData = localStorage.getItem('chartVal');
    let list = [];
    if (chartData) {
        try {
            list = JSON.parse(chartData) || [];
        } catch (error){}
    }
    return list;
}
btn.onclick =  (event) => {
    event.preventDefault();
    let form = document.querySelector('form');
    let obj = {};
    let obj2 = {};

    let color = form.elements.inputColor.value;
    let rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + '0.5' + ')';

    obj.name = form.elements.inputName.value;
    obj.value = form.elements.inputValue.value;
    obj.color = 'rgba(' + parseInt(form.elements.inputColor.value.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + '0.5' + ')';

    obj2.name = form.elements.inputName.value;
    obj2.value = '100';
    obj2.color = 'rgba(' + parseInt(form.elements.inputColor.value.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + '0.8' + ')';

    this.dataJson1 += dataJson1.push(obj);
    this.dataJson2 +=dataJson2.push(obj2);

    form.elements.inputName.value = '';
    form.elements.inputValue.value = '';
    updateChart();
    // addChartValue();

}


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
                pointRadius:20,
                pointBorderWidth: 1,
                borderWidth: 1,
                data: dataJson2.map(dataName => dataName.value)
            },
            {
                label: '',
                fill: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: dataJson1.map(dataName => dataName.color),
                pointBorderColor: "#fff",
                borderWidth: 1,
                pointRadius: 10,
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
function updateChart() {
    chart.data.datasets[0].data = dataJson2.map(dataName => dataName.value);
    chart.data.datasets[1].data = dataJson1.map(dataName => dataName.value);
    chart.data.labels = dataJson2.map(dataName => dataName.name);
    chart.data.datasets[0].pointBackgroundColor = dataJson2.map(dataName => dataName.color);
    chart.data.datasets[1].pointBackgroundColor = dataJson1.map(dataName => dataName.color);

    //This is an implementation of resizing for circles, but this does not work in this library.
    //chart.data.datasets[1].pointRadius = dataJson1.map(dataName => dataName.value)*25/100;

    chart.update();
}
