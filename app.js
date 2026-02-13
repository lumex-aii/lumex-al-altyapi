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

// Menü oluştur
menuItems.forEach(item => {
  const btn = document.createElement("button");
  btn.innerText = item.name + " - " + item.price + "₺";
  btn.onclick = () => order(item.name);
  menuDiv.appendChild(btn);
});

// Sipariş fonksiyonu
aiLogOrder({
  item: item,
  time: new Date().toISOString()
});
function order(item) {
  const pizza = menuItems.find(p => p.name === item);

  const li = document.createElement("li");
  li.innerText = "Sipariş #" + orderNumber + " → " + item + " (" + pizza.price + "₺)";
  ordersList.appendChild(li);

  totalMoney += pizza.price;
  totalSpan.innerText = totalMoney;

  orderNumber++;
}
setInterval(()=>{
  document.getElementById("aiStatus").innerText = aiDecision();
}, 2000);
setInterval(()=>{
  document.getElementById("courierAI").innerText = aiCourierDecision();
}, 2000);

setInterval(()=>{
  document.getElementById("courierAI").innerText = aiCourierDecision();
}, 2000);
