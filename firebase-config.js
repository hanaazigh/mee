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

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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