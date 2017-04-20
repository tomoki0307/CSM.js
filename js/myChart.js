(function() {
  "use strict"
  let graphColor = csm.hue(csmSet.chart[0],6)
  let data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: csm.alpha(graphColor,0.5),
      borderColor: graphColor,
      borderWidth: 1
    }]
  }

  let ctx = document.getElementById("mychart");
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}())
