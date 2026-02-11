// ======================
// LUMEX MINI OS SCRIPT
// ======================

// Dashboard counters
let activeOrders = 0;
let couriersOnline = 2;

// Elements
const activeOrdersEl = document.getElementById("activeOrders");
const couriersOnlineEl = document.getElementById("couriersOnline");
const orderListEl = document.getElementById("orderList");
const courierBox = document.getElementById("courierBox");
const aiResponse = document.getElementById("aiResponse");

// ======================
// ADD ORDER
// ======================
function addOrder() {
  const input = document.getElementById("orderInput");
  const orderName = input.value.trim();

  if (orderName === "") return alert("Order name required!");

  const li = document.createElement("li");
  li.textContent = orderName;

  // Remove button
  const btn = document.createElement("button");
  btn.textContent = "Complete";
  btn.onclick = () => {
    li.remove();
    activeOrders--;
    updateDashboard();
  };

  li.appendChild(btn);
  orderListEl.appendChild(li);

  activeOrders++;
  updateDashboard();
  input.value = "";
}

// ======================
// DASHBOARD UPDATE
// ======================
function updateDashboard() {
  activeOrdersEl.textContent = activeOrders;
  couriersOnlineEl.textContent = couriersOnline;
}

// ======================
// COURIER SIMULATION
// ======================
function simulateCouriers() {
  const names = ["Ali", "Mehmet", "Ivan", "Marko", "John"];
  courierBox.innerHTML = "";

  for (let i = 0; i < couriersOnline; i++) {
    const div = document.createElement("div");
    const name = names[Math.floor(Math.random() * names.length)];
    const distance = (Math.random() * 5).toFixed(2);

    div.textContent = `🚴 Courier ${name} - ${distance} km away`;
    courierBox.appendChild(div);
  }
}

// Change courier count randomly
setInterval(() => {
  couriersOnline = Math.floor(Math.random() * 5) + 1;
  updateDashboard();
  simulateCouriers();
}, 5000);

// ======================
// FAKE AI ASSISTANT
// ======================
function askAI() {
  const input = document.getElementById("aiInput").value.toLowerCase();
  let reply = "I am analyzing your restaurant data...";

  if (input.includes("profit")) reply = "Tip: Increase upsell items like drinks.";
  if (input.includes("order")) reply = "Peak orders detected between 19:00 - 21:00.";
  if (input.includes("courier")) reply = "Courier speed below optimal. Consider bonuses.";
  if (input.includes("menu")) reply = "Remove low-selling menu items to increase margin.";

  aiResponse.innerText = "🤖 Lumex AI: " + reply;
}

// ======================
// AUTO FAKE ORDERS DEMO
// ======================
const demoOrders = [
  "Burger + Cola",
  "Pizza Margherita",
  "Döner Menü",
  "Sushi Set",
  "Tavuk Wrap"
];

setInterval(() => {
  if (Math.random() > 0.6) {
    const order = demoOrders[Math.floor(Math.random() * demoOrders.length)];
    document.getElementById("orderInput").value = order;
    addOrder();
  }
}, 8000);

// Initial load
updateDashboard();
simulateCouriers();
