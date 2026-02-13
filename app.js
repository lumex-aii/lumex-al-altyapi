let orderNumber = 1;
let totalMoney = 0;

const menuItems = [
  {name: "Margherita Pizza", price: 120},
  {name: "Sucuklu Pizza", price: 140},
  {name: "Karışık Pizza", price: 160}
];

const menuDiv = document.getElementById("menu");
const ordersList = document.getElementById("orders");
const totalSpan = document.getElementById("total");

// Menü butonları
menuItems.forEach(item => {
  const btn = document.createElement("button");
  btn.innerText = item.name + " - " + item.price + "₺";
  btn.onclick = () => order(item.name);
  menuDiv.appendChild(btn);
});

// Sipariş
function order(itemName) {
  const pizza = menuItems.find(p => p.name === itemName);

  const li = document.createElement("li");
  li.innerText = "Sipariş #" + orderNumber + " → " + itemName + " (" + pizza.price + "₺)";
  ordersList.appendChild(li);

  totalMoney += pizza.price;
  totalSpan.innerText = totalMoney;

  aiLogOrder({ item: itemName, price: pizza.price, time: new Date() });

  orderNumber++;
}

// AI güncelle
setInterval(()=>{
  document.getElementById("aiStatus").innerText = aiDecision();
  document.getElementById("courierAI").innerText = aiCourierDecision();
}, 2000);
