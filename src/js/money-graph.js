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
    { date: date, count: 10000 },
    { date: date, count: 15000 },
    { date: date, count: 25000 },
    { date: date, count: 22000 },
    { date: date, count: 80000 },
    { date: date, count: 28000 },
  ];

  new Chart(document.getElementById('money-graph'), {
    type: 'line',
    data: {
      labels: data.map((row) => row.date),
      datasets: [
        {
          label: 'Сумма накопления',
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
