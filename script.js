// Firebase CDN bağlantıları
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB59xwz8LUS1IzkEHW_gWjsV4fFVo153qM",
  authDomain: "lumex-2e0d4.firebaseapp.com",
  projectId: "lumex-2e0d4",
  storageBucket: "lumex-2e0d4.firebasestorage.app",
  messagingSenderId: "396645386494",
  appId: "1:396645386494:web:e066d992ba8c7ac988bdaf"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sipariş ekleme fonksiyonu
window.addOrder = async function(name, price) {
  await addDoc(collection(db, "orders"), {
    name: name,
    price: price,
    status: "pending",
    createdAt: new Date()
  });
  alert("Sipariş gönderildi!");
};

// Siparişleri canlı çekme
onSnapshot(collection(db, "orders"), (snapshot) => {
  const list = document.getElementById("orders");
  list.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    list.innerHTML += `<li>${data.name} - ${data.price} TL - ${data.status}</li>`;
  });
});
