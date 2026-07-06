const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// CORS middleware
const cors = require('cors')({ origin: true });

/**
 * Get all service requests
 */
exports.getRequests = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== 'GET') {
            res.status(405).json({ error: 'Method not allowed' });
            return;
        }

        try {
            const snapshot = await db.collection('service_requests')
                .orderBy('created_at', 'desc')
                .get();
            
            const requests = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                requests.push({
                    id: doc.id,
                    ...data,
                    created_at: data.created_at?.toDate?.()?.toISOString() || null
                });
            });
            
            res.status(200).json(requests);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: error.message });
        }
    });
});

/**
 * Save a service request
 */
exports.saveRequest = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== 'POST') {
            res.status(405).json({ error: 'Method not allowed' });
            return;
        }

        try {
            const data = req.body;
            
            // Validate required fields
            const required = ['name', 'email', 'service', 'description', 'total', 'complexity', 'timeline'];
            const missing = required.filter(field => !data[field]);
            if (missing.length > 0) {
                res.status(422).json({ 
                    error: `Missing required field(s): ${missing.join(', ')}` 
                });
                return;
            }

            // Create document
            const docRef = await db.collection('service_requests').add({
                client_name: data.name,
                client_email: data.email,
                client_phone: data.phone || '',
                company_name: data.company || '',
                service_type: data.service,
                project_description: data.description,
                pages: data.pages || 1,
                features: data.features || [],
                deadline: data.deadline || null,
                total_quote: data.total,
                complexity: data.complexity,
                timeline: data.timeline,
                status: 'new',
                created_at: admin.firestore.FieldValue.serverTimestamp()
            });

            res.status(200).json({
                success: true,
                message: 'Request saved successfully',
                id: docRef.id
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: error.message });
        }
    });
});

/**
 * Get stats
 */
exports.getStats = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== 'GET') {
            res.status(405).json({ error: 'Method not allowed' });
            return;
        }

        try {
            const snapshot = await db.collection('service_requests').get();
            const requests = snapshot.docs.map(doc => doc.data());
            
            const total = requests.length;
            const totalQuote = requests.reduce((sum, r) => sum + (r.total_quote || 0), 0);
            const avg = total > 0 ? totalQuote / total : 0;
            const high = requests.filter(r => r.complexity === 'High').length;
            
            // Get top service
            const serviceCount = {};
            requests.forEach(r => {
                const service = r.service_type || 'Unknown';
                serviceCount[service] = (serviceCount[service] || 0) + 1;
            });
            let topService = '—';
            let maxCount = 0;
            Object.entries(serviceCount).forEach(([service, count]) => {
                if (count > maxCount) {
                    maxCount = count;
                    topService = service;
                }
            });
            
            res.status(200).json({
                total,
                avg: Math.round(avg),
                high,
                top: topService
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: error.message });
        }
    });
});
