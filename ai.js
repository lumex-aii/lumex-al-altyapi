// LUMEX AI Brain v0.1

let aiData = {
  orders: [],
  couriers: [],
  restaurantSpeed: 1
};

// Sipariş kaydet
function aiLogOrder(order) {
  aiData.orders.push(order);
  console.log("AI Order:", order);
}

// Kurye ekle
function aiLogCourier(name, status, distance) {
  aiData.couriers.push({name, status, distance});
}

// Kurye AI karar
function aiCourierDecision() {
  if (aiData.couriers.length == 0) return "Kurye yok";

  let online = aiData.couriers.filter(c=>c.status=="online");
  if (online.length == 0) return "Online kurye yok";

  let nearest = online.sort((a,b)=>a.distance-b.distance)[0];
  return "En yakın kurye: " + nearest.name + " ("+nearest.distance+"km)";
}

// Restoran AI karar
function aiDecision() {
  if (aiData.orders.length > 5) return "Yoğunluk yüksek! Kurye ekle!";
  if (aiData.restaurantSpeed < 1) return "Restoran yavaş!";
  return "Sistem normal çalışıyor.";
}

// Fake kuryeler
aiLogCourier("Ali", "online", 2);
aiLogCourier("Mehmet", "online", 5);
aiLogCourier("Can", "offline", 1);
