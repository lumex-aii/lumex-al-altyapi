// Lumex AI Brain v0.1

let aiData = {
  orders: [],
  couriers: [],
  restaurantSpeed: 1
};

// Sipariş kaydet
function aiLogOrder(order) {
  aiData.orders.push(order);
  console.log("AI Order Logged:", order);
}

// Kurye ekle
function aiLogCourier(name, status, distance) {
  aiData.couriers.push({ name, status, distance });
  console.log("AI Courier Logged:", name);
}

// En yakın kurye seç
function aiCourierDecision() {
  let onlineCouriers = aiData.couriers.filter(c => c.status === "online");
  if (onlineCouriers.length === 0) return "🚫 Aktif kurye yok";

  let nearest = onlineCouriers.sort((a,b)=>a.distance-b.distance)[0];
  return "🚴 En yakın kurye: " + nearest.name;
}

// AI karar sistemi
function aiDecision() {
  if (aiData.orders.length > 5) return "🔥 Yoğunluk yüksek! Kurye ekle!";
  if (aiData.restaurantSpeed < 1) return "🐢 Restoran yavaş! Menü azalt.";
  return "✅ Sistem normal çalışıyor.";
}

// Fake test kuryeler
aiLogCourier("Ali", "online", 2);
aiLogCourier("Mehmet", "online", 5);
aiLogCourier("Can", "offline", 1);
