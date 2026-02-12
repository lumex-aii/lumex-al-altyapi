let totalMoney = 0;
const totalSpan = document.getElementById("total");
let orderNumber = 1;

const menuItems = [
  {name: "Margherita Pizza", price: 120},
  {name: "Sucuklu Pizza", price: 140},
  {name: "Karışık Pizza", price: 160}
];

const menuDiv = document.getElementById("menu");
const ordersList = document.getElementById("orders");

// Menü oluştur
menuItems.forEach(item => {
  const btn = document.createElement("button");
  btn.innerText = item.name + " - " + item.price + "₺";
  btn.onclick = () => order(item.name);
  menuDiv.appendChild(btn);
});

// Sipariş fonksiyonu
function order(item) {
  const pizza = menuItems.find(p => p.name === item);

  const li = document.createElement("li");
  li.innerText = "Sipariş #" + orderNumber + " → " + item + " (" + pizza.price + "₺)";
  ordersList.appendChild(li);

  // Toplam kazanç
  totalMoney += pizza.price;
  totalSpan.innerText = totalMoney;

  orderNumber++;
}
