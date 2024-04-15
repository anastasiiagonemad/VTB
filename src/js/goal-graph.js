import Chart from 'chart.js/auto';

(async function () {
  const newdate = new Date();
  const day = newdate.getDate();
  const month = newdate.getMonth();
  const yearFull = newdate.getFullYear();
  const year = yearFull.toString().slice(-2);
  const date = `${day}.${month}.${year}`;

  const data = [
    { date: date, count: 0 },
    { date: date, count: 10 },
    { date: date, count: 20 },
    { date: date, count: 30 },
    { date: date, count: 40 },
    { date: date, count: 50 },
  ];

  new Chart(document.getElementById('goal-graph'), {
    type: 'line',
    data: {
      labels: data.map((row) => row.date),
      datasets: [
        {
          label: 'Цели',
          data: data.map((row) => row.count),
        },
      ],
    },
    options: {
      adaptive: true,
      maintainAspectRatio: false,
    },
  });
})();
