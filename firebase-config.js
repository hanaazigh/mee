// Firebase configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
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
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyC_btqLjglHoKJOxZphBZ4lpvlyNyTdLG8",
  authDomain: "portfolio-42f1f.firebaseapp.com",
  projectId: "portfolio-42f1f",
  storageBucket: "portfolio-42f1f.firebasestorage.app",
  messagingSenderId: "565461051369",
  appId: "1:565461051369:web:eb5b27532055f5987ecd78",
  measurementId: "G-12XTX9SPZ3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection references
const SERVICE_REQUESTS = 'service_requests';
const CONTACT_MESSAGES = 'contact_messages';

// Export for use in other files
export { 
    db, 
    SERVICE_REQUESTS, 
    CONTACT_MESSAGES,
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