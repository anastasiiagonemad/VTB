import Chart from 'chart.js/auto';

(async function () {
  const newdate = new Date();
  const day = newdate.getDate();
  const month = newdate.getMonth();
  const yearFull = newdate.getFullYear();
  const year = yearFull.toString().slice(-2);
  const date = `${day}.${month}.${year}`;

  if (localStorage.length) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      let obj = JSON.parse(value);

      const arrPayments = obj.itemPayments;
      arrPayments.forEach((payment) => {
        const data = [
          { date: date, count: payment },
          { date: date, count: payment },
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
      });
    }
  }
})();
