// ==============================
// FINAL dashboard.js (WITH ALERTS + BUZZER)
// ==============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase, ref, onValue, update, get
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase config
// 🔐 Firebase config (DUMMY VALUES)
// Replace these with your own Firebase project credentials to run the app

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database reference
const database = firebase.database();

// ==============================
// BEEP SOUND
// ==============================
function playBeep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.value = 1200;
  gain.gain.value = 0.25;

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  setTimeout(() => osc.stop(), 150);
}

window.playBeep = playBeep;

// Unlock audio on first click
document.addEventListener("click", () => { playBeep(); }, { once: true });

// ==============================
// REALTIME SENSOR DISPLAY
// ==============================

onValue(ref(db, "smartHome/motion"), s => {
  const v = s.val();
  document.getElementById("motionStatus").textContent = v ? "Motion detected" : "No motion";

  if (v === 1) playBeep();
});

onValue(ref(db, "smartHome/temperature"), s => {
  document.getElementById("tempValue").textContent = (s.val() ?? "--") + " °C";
});

onValue(ref(db, "smartHome/humidity"), s => {
  document.getElementById("humValue").textContent = (s.val() ?? "--") + " %";
});

onValue(ref(db, "smartHome/last_update"), s => {
  const v = s.val();
  document.getElementById("lastUpdate").textContent =
    (!v || v === 0) ? "Not updated yet" : new Date(v).toLocaleString();
});

// ==============================
// CONTROL STATE UI
// ==============================
onValue(ref(db, "controls/light"), s => {
  document.getElementById("lightStatus").textContent = s.val() || "AUTO";
});

onValue(ref(db, "controls/fan"), s => {
  document.getElementById("fanStatus").textContent = s.val() || "AUTO";
});

// ==============================
// BUTTON HANDLERS
// ==============================
function setControl(device, value) {
  return update(ref(db, "controls"), { [device]: value });
}

// Light buttons
document.getElementById("lightAuto").onclick = () => setControl("light", "AUTO");
document.getElementById("lightOn").onclick   = () => setControl("light", "ON");
document.getElementById("lightOff").onclick  = () => setControl("light", "OFF");

// Fan buttons
document.getElementById("fanAuto").onclick = () => setControl("fan", "AUTO");
document.getElementById("fanOn").onclick   = () => setControl("fan", "ON");
document.getElementById("fanOff").onclick  = () => setControl("fan", "OFF");

// ==============================
// TODAY USAGE (unchanged)
// ==============================
onValue(ref(db, "smartHome/state_history"), computeTodayUsage);

function computeTodayUsage() {
  const el = document.getElementById("todayUsage");
  if (!el) return;

  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const startTs = start.getTime();
  const nowTs = Date.now();

  get(ref(db, "smartHome/state_history")).then(snap => {
    if (!snap.exists()) {
      el.textContent = "--";
      return;
    }

    const logs = Object.values(snap.val())
      .filter(v => v.timestamp >= startTs && v.timestamp <= nowTs)
      .sort((a, b) => a.timestamp - b.timestamp);

    if (logs.length === 0) {
      el.textContent = "Low";
      return;
    }

    let lightMs = 0, fanMs = 0;

    for (let i = 0; i < logs.length; i++) {
      const cur = logs[i];
      const next = logs[i + 1];
      const end = next ? next.timestamp : nowTs;
      const dur = end - cur.timestamp;

      if (cur.light === 1) lightMs += dur;
      if (cur.fan === 1) fanMs += dur;
    }

    const LIGHT_W = 10;
    const FAN_W = 15;

    const kwh =
      ((lightMs / 3600000) * LIGHT_W +
       (fanMs / 3600000) * FAN_W) / 1000;

    el.textContent =
      kwh > 0.3 ? "High" :
      kwh > 0.05 ? "Medium" : "Low";
  });
}

// ==============================
// ⭐ ALERT LISTENER
// ==============================
const alertBox = document.getElementById("alertBox");

onValue(ref(db, "alerts/latest"), snap => {
  const msg = snap.val();

  alertBox.textContent = msg || "No alerts yet";
  alertBox.style.color = msg ? "red" : "black";

  if (msg) playBeep();
});
