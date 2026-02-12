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
  menuDiv.appendChild(document.createElement("br"));
});

// Sipariş fonksiyonu
function order(item) {
  const li = document.createElement("li");
  li.innerText = item + " sipariş edildi";
  ordersList.appendChild(li);
}
