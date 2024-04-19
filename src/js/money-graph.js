import Chart from 'chart.js/auto';

(async function () {
  const newdate = new Date();
  const day = newdate.getDate();
  const month = newdate.getMonth();
  const yearFull = newdate.getFullYear();
  const year = yearFull.toString().slice(-2);
  const date = `${day}.${month}.${year}`;

  if (localStorage.length) {
    const paymentsData = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      let obj = JSON.parse(value);

      const itemPayments = obj.itemPayments;

      //title money-graph
      let totalSum = 0;
      totalSum = itemPayments.reduce((acc, currentValue) => {
        return acc + currentValue;
      }, 0);

      const formattedTotalSum = new Intl.NumberFormat('ru-RU').format(totalSum);

      const moneyGraphTitle = document.querySelector('.start__money-sum');
      moneyGraphTitle.textContent = `${formattedTotalSum} руб.`;

      //take all payments from array
      itemPayments.forEach((payment) => {
        const date = new Date(obj.itemDateStart);
        const formattedDate = date.toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        });

        paymentsData.push({ date: formattedDate, count: payment });
      });
    }
    //add all payments to graph
    if (paymentsData.length > 0) {
      const ctx = document.getElementById('money-graph').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: paymentsData.map((row) => row.date),
          datasets: [
            {
              label: 'Сумма накопления',
              data: paymentsData.map((row) => row.count),
            },
          ],
        },
        options: {
          adaptive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }
})();
