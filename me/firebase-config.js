// ============================
// FIREBASE CONFIGURATION (single source of truth)
// ============================
// This is the ONE place the Firebase app is initialized. Every other file
// (script.js, and the small inline snippet in index.html) imports from
// here instead of calling initializeApp() a second time — calling it
// twice throws "Firebase: Firebase App named '[DEFAULT]' already exists".

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics, isSupported as isAnalyticsSupported } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  where,
  Timestamp,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_btqLjglHoKJOxZphBZ4lpvlyNyTdLG8",
  authDomain: "portfolio-42f1f.firebaseapp.com",
  databaseURL: "https://portfolio-42f1f-default-rtdb.firebaseio.com",
  projectId: "portfolio-42f1f",
  storageBucket: "portfolio-42f1f.firebasestorage.app",
  messagingSenderId: "565461051369",
  appId: "1:565461051369:web:eb5b27532055f5987ecd78",
  measurementId: "G-12XTX9SPZ3"
};

// Initialize the app once.
const app = initializeApp(firebaseConfig);

// Analytics isn't supported in every environment (e.g. some browsers /
// privacy modes), so guard it instead of letting it throw at load time.
isAnalyticsSupported().then((supported) => {
  if (supported) getAnalytics(app);
}).catch(() => { /* analytics optional — safe to ignore */ });

// Firestore instance shared by the whole site.
const db = getFirestore(app);

// Collection name constants used by script.js.
export const SERVICE_REQUESTS = 'service_requests';
export const CONTACT_MESSAGES = 'contact_messages';

export {
  app,
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  where,
  Timestamp,
  serverTimestamp
};