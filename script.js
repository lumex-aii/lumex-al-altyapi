let orders = ["Pizza Order #101","Burger Order #102","Sushi Order #103"];

const orderList = document.getElementById("orders");
const orderCount = document.getElementById("orderCount");

function loadOrders() {
  orderList.innerHTML = "";
  orders.forEach(o => {
    let li = document.createElement("li");
    li.innerText = o;
    orderList.appendChild(li);
  });
  orderCount.innerText = orders.length;
}

loadOrders();

const map = document.getElementById("map");
const courier = document.createElement("div");
courier.className = "courier";
map.appendChild(courier);

let x = 0;
let y = 0;

setInterval(() => {
  x += 5;
  y += 3;
  if (x > 290) x = 0;
  if (y > 190) y = 0;
  courier.style.left = x + "px";
  courier.style.top = y + "px";
}, 500);
