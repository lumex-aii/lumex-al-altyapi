// Lumex AI Brain v1.0

let aiData = {
  orders: [],
  couriers: [],
  restaurantSpeed: 1 // 1 normal, <1 yavaş, >1 hızlı
};

// ================= ORDERS =================

// Sipariş kaydet
function aiLogOrder(item) {
  aiData.orders.push({
    item: item,
    time: Date.now()
  });
  console.log("AI Order Logged:", item);
}

// ================= COURIERS =================

// Kurye ekle
function aiLogCourier(name, status, distance) {
  aiData.couriers.push({name, status, distance});
  console.log("AI Courier Logged:", name);
}

// En yakın kurye AI
function aiCourierDecision() {
  if (aiData.couriers.length == 0) return "Kurye yok!";

  let onlineCouriers = aiData.couriers.filter(c => c.status === "online");
  if (onlineCouriers.length == 0) return "Online kurye yok!";

  let nearest = onlineCouriers.sort((a,b)=>a.distance-b.distance)[0];
  return "En yakın kurye: " + nearest.name + " (" + nearest.distance + "km)";
}

// ================= RESTAURANT AI =================

// Restoran AI karar sistemi
function aiDecision() {
  if (aiData.orders.length > 5) {
    return "🔥 Yoğunluk yüksek! Kurye ekle!";
  }
  if (aiData.restaurantSpeed < 1) {
    return "🐢 Restoran yavaş! Menü azalt.";
  }
  return "✅ Sistem normal çalışıyor.";
}

// ================= FAKE DATA (SIMULASYON) =================
aiLogCourier("Ali", "online", 2);
aiLogCourier("Mehmet", "online", 5);
aiLogCourier("Can", "offline", 1);
