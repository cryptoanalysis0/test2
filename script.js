const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

async function fetchCryptoData() {
  const response = await fetch(apiURL);
  const data = await response.json();
  const tableBody = document.getElementById('crypto-table-body');

  tableBody.innerHTML = ''; // تفريغ الجدول أولاً

  data.forEach((coin, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td><img src="${coin.image}" alt="${coin.name}"/> ${coin.name}</td>
      <td>$${coin.current_price.toLocaleString()}</td>
      <td>$${coin.market_cap.toLocaleString()}</td>
    `;

    tableBody.appendChild(row);
  });
}

// تحميل البيانات عند فتح الصفحة
fetchCryptoData();
