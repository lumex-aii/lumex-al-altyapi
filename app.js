let orderNumber = 1;
let totalMoney = 0;

const menuItems = [
  {name:"Margherita", price:120},
  {name:"Sucuklu", price:140},
  {name:"Karışık", price:160}
];

const menuDiv = document.getElementById("menu");
const ordersList = document.getElementById("orders");
const totalSpan = document.getElementById("total");

menuItems.forEach(item=>{
  let btn = document.createElement("button");
  btn.innerText = item.name + " - " + item.price + "₺";
  btn.onclick = ()=>order(item);
  menuDiv.appendChild(btn);
});

function order(item){
  let li = document.createElement("li");
  li.innerText = "#" + orderNumber + " " + item.name + " " + item.price + "₺";
  ordersList.appendChild(li);

  totalMoney += item.price;
  totalSpan.innerText = totalMoney;

  let data = {item:item.name, price:item.price, time:Date.now()};
  aiLogOrder(data);
  logOrderTime();

  orderNumber++;
}

setInterval(()=>{
  document.getElementById("aiStatus").innerText = aiSystemStatus();
  document.getElementById("courierDecision").innerText = dispatchCourier();
  document.getElementById("prediction").innerText = predictNextOrders();
  document.getElementById("orderRate").innerText =
    "⏱ Son 1 dakikadaki sipariş: " + orderRatePerMinute();
}, 2000);
