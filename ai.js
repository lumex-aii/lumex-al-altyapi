let aiData = {
  orders: [],
  couriers: []
};

function aiLogOrder(order) {
  aiData.orders.push(order);
}

function aiLogCourier(name, status, distance) {
  aiData.couriers.push({name, status, distance});
}

function aiCourierDecision() {
  if (aiData.couriers.length == 0) return "Kurye yok";

  let nearest = aiData.couriers.sort((a,b)=>a.distance-b.distance)[0];
  return nearest.name + " (" + nearest.distance + "km)";
}

function aiDecision() {
  if (aiData.orders.length > 5) return "⚠️ Yoğunluk yüksek!";
  return "Sistem stabil";
}

// Fake kuryeler
aiLogCourier("Ali", "online", 2);
aiLogCourier("Mehmet", "online", 5);
