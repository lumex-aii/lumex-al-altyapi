let AI = {
  orders: [],
  couriers: [
    {name:"Ali", distance:2, speed:30, status:"online"},
    {name:"Mehmet", distance:5, speed:20, status:"online"},
    {name:"Can", distance:1, speed:25, status:"offline"}
  ]
};

function aiLogOrder(order) {
  AI.orders.push(order);
}

function dispatchCourier() {
  let active = AI.couriers.filter(c=>c.status==="online");
  if(active.length === 0) return "🚫 Kurye yok";

  active.forEach(c=>{
    c.score = c.distance / c.speed;
  });

  active.sort((a,b)=>a.score-b.score);
  return "🚴 Dispatch edilen kurye: " + active[0].name;
}

function aiSystemStatus() {
  if(AI.orders.length > 10) return "🔥 Aşırı yoğun! Kurye ekle";
  if(AI.orders.length > 5) return "⚠️ Yoğunluk yüksek";
  return "✅ Sistem stabil";
}

function predictNextOrders() {
  let last10 = AI.orders.slice(-10);
  let rate = last10.length / 10; 
  return "📈 Tahmini sipariş artışı: " + (rate*100).toFixed(1) + "%";
}
