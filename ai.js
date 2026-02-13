// Lumex AI Brain v0.1
let aiData = {
  couriers: []
};

function aiLogCourier(name, status, distance) {
  aiData.couriers.push({name, status, distance});
}

function aiCourierDecision() {
  if (aiData.couriers.length == 0) return "Kurye yok";

  let nearest = aiData.couriers.sort((a,b)=>a.distance-b.distance)[0];
  return "En yakın kurye: " + nearest.name;
}

// Fake kuryeler
aiLogCourier("Ali", "online", 2);
aiLogCourier("Mehmet", "online", 5);
aiLogCourier("Can", "offline", 1);
let aiData = {
  orders: [],
  couriers: [],
  restaurantSpeed: 1 // 1 normal, 0.5 yavaş, 2 hızlı
};

// Sipariş kaydet
function aiLogOrder(order) {
  aiData.orders.push(order);
  console.log("AI Order Logged:", order);
}
function aiCourierDecision() {
  if (aiData.couriers.length == 0) return "Kurye yok!";

  let nearest = aiData.couriers.sort((a,b)=>a.distance-b.distance)[0];
  return "En yakın kurye: " + nearest.name;
}
// Kurye durumu
function aiLogCourier(name, status, distance) {
  aiData.couriers.push({name, status, distance});
  console.log("AI Courier Logged:", name);
}

// Basit AI karar sistemi
function aiDecision() {
  if (aiData.orders.length > 5) {
    return "Yoğunluk yüksek! Kurye ekle!";
  }
  if (aiData.restaurantSpeed < 1) {
    return "Restoran yavaş! Menü azalt.";
  }
  return "Sistem normal çalışıyor.";
}
aiLogCourier("Ali", "online", 2);
aiLogCourier("Mehmet", "online", 5);
aiLogCourier("Can", "offline", 1);
