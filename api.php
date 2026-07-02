<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Database configuration
$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'hanaa_dev_solutions';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Get request method and action
$method = $_SERVER['REQUEST_METHOD'];
$action = isset($_GET['action']) ? $_GET['action'] : '';

// Router
switch($action) {
    case 'save_request':
        if ($method === 'POST') {
            saveServiceRequest($pdo);
        }
        break;
    case 'get_requests':
        if ($method === 'GET') {
            getServiceRequests($pdo);
        }
        break;
    case 'get_request':
        if ($method === 'GET') {
            getServiceRequest($pdo);
        }
        break;
    case 'delete_request':
        if ($method === 'DELETE') {
            deleteServiceRequest($pdo);
        }
        break;
    case 'update_status':
        if ($method === 'PUT') {
            updateRequestStatus($pdo);
        }
        break;
    case 'save_contact':
        if ($method === 'POST') {
            saveContactMessage($pdo);
        }
        break;
    case 'get_contacts':
        if ($method === 'GET') {
            getContactMessages($pdo);
        }
        break;
    case 'get_stats':
        if ($method === 'GET') {
            getStats($pdo);
        }
        break;
    case 'clear_requests':
        if ($method === 'DELETE') {
            clearAllRequests($pdo);
        }
        break;
    default:
        echo json_encode(['error' => 'Invalid action']);
        break;
}

function saveServiceRequest($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data) {
        echo json_encode(['error' => 'Invalid data received']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare("
            INSERT INTO service_requests (
                client_name, client_email, client_phone, company_name, 
                service_type, project_description, pages, features, 
                deadline, total_quote, complexity, timeline
            ) VALUES (
                :name, :email, :phone, :company,
                :service, :description, :pages, :features,
                :deadline, :total, :complexity, :timeline
            )
        ");
        
        // Get features as JSON
        $features = isset($data['features']) ? json_encode($data['features']) : null;
        
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':phone' => isset($data['phone']) ? $data['phone'] : null,
            ':company' => isset($data['company']) ? $data['company'] : null,
            ':service' => $data['service'],
            ':description' => $data['description'],
            ':pages' => isset($data['pages']) ? $data['pages'] : 1,
            ':features' => $features,
            ':deadline' => isset($data['deadline']) ? $data['deadline'] : null,
            ':total' => $data['total'],
            ':complexity' => $data['complexity'],
            ':timeline' => $data['timeline']
        ]);
        
        $id = $pdo->lastInsertId();
        echo json_encode([
            'success' => true,
            'message' => 'Request saved successfully',
            'id' => $id
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to save request: ' . $e->getMessage()]);
    }
}

function getServiceRequests($pdo) {
    try {
        $stmt = $pdo->query("
            SELECT * FROM service_requests 
            ORDER BY created_at DESC
        ");
        $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Decode features JSON
        foreach ($requests as &$req) {
            if ($req['features']) {
                $req['features'] = json_decode($req['features'], true);
            }
        }
        
        echo json_encode($requests);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to fetch requests: ' . $e->getMessage()]);
    }
}

function getServiceRequest($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    
    if (!$id) {
        echo json_encode(['error' => 'Request ID required']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare("SELECT * FROM service_requests WHERE id = ?");
        $stmt->execute([$id]);
        $request = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($request) {
            if ($request['features']) {
                $request['features'] = json_decode($request['features'], true);
            }
            echo json_encode($request);
        } else {
            echo json_encode(['error' => 'Request not found']);
        }
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to fetch request: ' . $e->getMessage()]);
    }
}

function deleteServiceRequest($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    
    if (!$id) {
        echo json_encode(['error' => 'Request ID required']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare("DELETE FROM service_requests WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Request deleted successfully'
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to delete request: ' . $e->getMessage()]);
    }
}

function updateRequestStatus($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data || !isset($data['id']) || !isset($data['status'])) {
        echo json_encode(['error' => 'ID and status required']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare("UPDATE service_requests SET status = ? WHERE id = ?");
        $stmt->execute([$data['status'], $data['id']]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Status updated successfully'
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to update status: ' . $e->getMessage()]);
    }
}

function saveContactMessage($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data) {
        echo json_encode(['error' => 'Invalid data received']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare("
            INSERT INTO contact_messages (name, email, subject, message)
            VALUES (:name, :email, :subject, :message)
        ");
        
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':subject' => $data['subject'],
            ':message' => $data['message']
        ]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Message sent successfully'
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to save message: ' . $e->getMessage()]);
    }
}

function getContactMessages($pdo) {
    try {
        $stmt = $pdo->query("
            SELECT * FROM contact_messages 
            ORDER BY created_at DESC
        ");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to fetch messages: ' . $e->getMessage()]);
    }
}

function getStats($pdo) {
    try {
        // Total requests
        $stmt = $pdo->query("SELECT COUNT(*) as total FROM service_requests");
        $total = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
        
        // Average quote
        $stmt = $pdo->query("SELECT AVG(total_quote) as avg FROM service_requests");
        $avg = $stmt->fetch(PDO::FETCH_ASSOC)['avg'];
        
        // High complexity count
        $stmt = $pdo->query("SELECT COUNT(*) as high FROM service_requests WHERE complexity = 'High'");
        $high = $stmt->fetch(PDO::FETCH_ASSOC)['high'];
        
        // Top service
        $stmt = $pdo->query("
            SELECT service_type, COUNT(*) as count 
            FROM service_requests 
            GROUP BY service_type 
            ORDER BY count DESC 
            LIMIT 1
        ");
        $top = $stmt->fetch(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'total' => $total,
            'avg' => $avg ? round($avg) : 0,
            'high' => $high,
            'top' => $top ? $top['service_type'] : '—'
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to fetch stats: ' . $e->getMessage()]);
    }
}

function clearAllRequests($pdo) {
    try {
        $stmt = $pdo->query("DELETE FROM service_requests");
        echo json_encode([
            'success' => true,
            'message' => 'All requests cleared successfully'
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Failed to clear requests: ' . $e->getMessage()]);
    }
}
?>