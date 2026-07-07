// firebase-config.js
// ============================================================
// IMPORTATION DES MODULES FIREBASE
// ============================================================
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
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
    limit,
    startAfter,
    Timestamp,
    serverTimestamp,
    writeBatch,
    runTransaction
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// ============================================================
// CONFIGURATION FIREBASE
// ============================================================
// ⚠️ Ces valeurs viennent de votre projet Firebase "portfolio-f73aa" ⚠️
const firebaseConfig = {
    apiKey: "AIzaSyCDClj0y8tnWyOjajqNJOWVdUWal_1gJjE",
    authDomain: "portfolio-f73aa.firebaseapp.com",
    projectId: "portfolio-f73aa",
    storageBucket: "portfolio-f73aa.firebasestorage.app",
    messagingSenderId: "186971924760",
    appId: "1:186971924760:web:852b7d76ce404d44bd566d",
    measurementId: "G-ECBMCCQQ1P"
};

// ============================================================
// INITIALISATION DE FIREBASE
// ============================================================
// Initialiser l'application Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore
const db = getFirestore(app);

// ============================================================
// NOMS DES COLLECTIONS
// ============================================================
const SERVICE_REQUESTS = 'service_requests';
const CONTACT_MESSAGES = 'contact_messages';
const USERS = 'users';
const SETTINGS = 'settings';

// ============================================================
// FONCTIONS UTILITAIRES
// ============================================================

/**
 * Récupère tous les documents d'une collection
 */
async function getAllDocuments(collectionName) {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/**
 * Récupère un document par son ID
 */
async function getDocument(collectionName, docId) {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

/**
 * Crée un nouveau document
 */
async function createDocument(collectionName, data) {
    const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
    });
    return docRef.id;
}

/**
 * Met à jour un document
 */
async function updateDocument(collectionName, docId, data) {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
        ...data,
        updated_at: serverTimestamp()
    });
}

/**
 * Supprime un document
 */
async function deleteDocument(collectionName, docId) {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
}

/**
 * Récupère les documents avec filtres et tri
 */
async function queryDocuments(collectionName, conditions = [], orderByField = null, orderDirection = 'desc', limitCount = null) {
    let q = collection(db, collectionName);
    
    // Ajouter les conditions (where)
    conditions.forEach(cond => {
        q = query(q, where(cond.field, cond.operator, cond.value));
    });
    
    // Ajouter le tri
    if (orderByField) {
        q = query(q, orderBy(orderByField, orderDirection));
    }
    
    // Ajouter la limite
    if (limitCount) {
        q = query(q, limit(limitCount));
    }
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// ============================================================
// EXPORTATIONS
// ============================================================
// Exporter les services Firestore de base
export {
    // App et DB
    app,
    db,
    
    // Collections
    SERVICE_REQUESTS,
    CONTACT_MESSAGES,
    USERS,
    SETTINGS,
    
    // Fonctions Firestore
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
    limit,
    startAfter,
    Timestamp,
    serverTimestamp,
    writeBatch,
    runTransaction,
    
    // Fonctions utilitaires personnalisées
    getAllDocuments,
    getDocument,
    createDocument,
    updateDocument,
    deleteDocument,
    queryDocuments
};

// Export par défaut
export default app;

// ============================================================
// LOG DE VERIFICATION
// ============================================================
console.log('🔥 Firebase configuré avec succès !');
console.log(`📁 Projet: ${firebaseConfig.projectId}`);
console.log(`📊 Collections: ${SERVICE_REQUESTS}, ${CONTACT_MESSAGES}`);