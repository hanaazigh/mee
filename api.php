<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Database configuration
$db_host = 'localhost';
$db_user = 'root';
$db_password = '';  // XAMPP default is empty
$db_name = 'hanaa_dev_solutions';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Get request method and action
$method = $_SERVER['REQUEST_METHOD'];
$action = isset($_GET['action']) ? $_GET['action'] : '';

// Log incoming requests for debugging
error_log("API Request: Method=$method, Action=$action");

// Router
switch ($action) {
    case 'save_request':
        if ($method === 'POST') {
            saveServiceRequest($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'get_requests':
        if ($method === 'GET') {
            getServiceRequests($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'get_request':
        if ($method === 'GET') {
            getServiceRequest($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'delete_request':
        if ($method === 'DELETE') {
            deleteServiceRequest($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'update_status':
        if ($method === 'PUT') {
            updateRequestStatus($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'save_contact':
        if ($method === 'POST') {
            saveContactMessage($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'get_contacts':
        if ($method === 'GET') {
            getContactMessages($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'get_stats':
        if ($method === 'GET') {
            getStats($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    case 'clear_requests':
        if ($method === 'DELETE') {
            clearAllRequests($pdo);
        } else {
            methodNotAllowed();
        }
        break;
    default:
        http_response_code(400);
        echo json_encode(['error' => 'Invalid action: ' . $action]);
        break;
}

function methodNotAllowed() {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed for this action']);
}

function readJsonBody(array $required = []) {
    // Get raw input
    $rawInput = file_get_contents('php://input');
    error_log("Raw input: " . $rawInput);
    
    $data = json_decode($rawInput, true);
    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid or missing JSON body. Received: ' . $rawInput]);
        return null;
    }
    
    $missing = [];
    foreach ($required as $field) {
        if (!isset($data[$field]) || $data[$field] === '') {
            $missing[] = $field;
        }
    }
    if (!empty($missing)) {
        http_response_code(422);
        echo json_encode(['error' => 'Missing required field(s): ' . implode(', ', $missing)]);
        return null;
    }
    return $data;
}

function saveServiceRequest($pdo) {
    $data = readJsonBody(['name', 'email', 'service', 'description', 'total', 'complexity', 'timeline']);
    if ($data === null) return;

    try {
        // Check if table exists, if not create it
        createTablesIfNeeded($pdo);
        
        $stmt = $pdo->prepare("
            INSERT INTO service_requests (
                client_name, client_email, client_phone, company_name,
                service_type, project_description, pages, features,
                deadline, total_quote, complexity, timeline, status
            ) VALUES (
                :name, :email, :phone, :company,
                :service, :description, :pages, :features,
                :deadline, :total, :complexity, :timeline, 'new'
            )
        ");

        $features = isset($data['features']) ? json_encode($data['features']) : null;

        $params = [
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':phone' => $data['phone'] ?? null,
            ':company' => $data['company'] ?? null,
            ':service' => $data['service'],
            ':description' => $data['description'],
            ':pages' => $data['pages'] ?? 1,
            ':features' => $features,
            ':deadline' => (!empty($data['deadline'])) ? $data['deadline'] : null,
            ':total' => $data['total'],
            ':complexity' => $data['complexity'],
            ':timeline' => $data['timeline']
        ];

        error_log("Executing query with params: " . json_encode($params));
        
        $stmt->execute($params);

        $id = $pdo->lastInsertId();
        echo json_encode([
            'success' => true,
            'message' => 'Request saved successfully',
            'id' => $id
        ]);
    } catch (PDOException $e) {
        error_log("PDO Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save request: ' . $e->getMessage()]);
    }
}

function createTablesIfNeeded($pdo) {
    try {
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS service_requests (
                id INT AUTO_INCREMENT PRIMARY KEY,
                client_name VARCHAR(100) NOT NULL,
                client_email VARCHAR(100) NOT NULL,
                client_phone VARCHAR(50),
                company_name VARCHAR(100),
                service_type VARCHAR(50) NOT NULL,
                project_description TEXT NOT NULL,
                pages INT DEFAULT 1,
                features JSON,
                deadline DATE,
                total_quote DECIMAL(10,2) NOT NULL,
                complexity VARCHAR(20) NOT NULL,
                timeline VARCHAR(50) NOT NULL,
                status VARCHAR(20) DEFAULT 'new',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ");
        
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS contact_messages (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                subject VARCHAR(200) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ");
    } catch (PDOException $e) {
        error_log("Table creation error: " . $e->getMessage());
        // Don't throw, just log
    }
}

// Other functions remain the same...
function getServiceRequests($pdo) {
    try {
        $stmt = $pdo->query("
            SELECT * FROM service_requests
            ORDER BY created_at DESC
        ");
        $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($requests as &$req) {
            if ($req['features']) {
                $req['features'] = json_decode($req['features'], true);
            }
        }

        echo json_encode($requests);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to fetch requests: ' . $e->getMessage()]);
    }
}

function getServiceRequest($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

    if (!$id) {
        http_response_code(400);
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
            http_response_code(404);
            echo json_encode(['error' => 'Request not found']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to fetch request: ' . $e->getMessage()]);
    }
}

function deleteServiceRequest($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

    if (!$id) {
        http_response_code(400);
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
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to delete request: ' . $e->getMessage()]);
    }
}

function updateRequestStatus($pdo) {
    $data = readJsonBody(['id', 'status']);
    if ($data === null) return;

    try {
        $stmt = $pdo->prepare("UPDATE service_requests SET status = ? WHERE id = ?");
        $stmt->execute([$data['status'], $data['id']]);

        echo json_encode([
            'success' => true,
            'message' => 'Status updated successfully'
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to update status: ' . $e->getMessage()]);
    }
}

function saveContactMessage($pdo) {
    $data = readJsonBody(['name', 'email', 'subject', 'message']);
    if ($data === null) return;

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
    } catch (PDOException $e) {
        http_response_code(500);
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
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to fetch messages: ' . $e->getMessage()]);
    }
}

function getStats($pdo) {
    try {
        $stmt = $pdo->query("SELECT COUNT(*) as total FROM service_requests");
        $total = $stmt->fetch(PDO::FETCH_ASSOC)['total'];

        $stmt = $pdo->query("SELECT AVG(total_quote) as avg FROM service_requests");
        $avg = $stmt->fetch(PDO::FETCH_ASSOC)['avg'];

        $stmt = $pdo->query("SELECT COUNT(*) as high FROM service_requests WHERE complexity = 'High'");
        $high = $stmt->fetch(PDO::FETCH_ASSOC)['high'];

        $stmt = $pdo->query("
            SELECT service_type, COUNT(*) as count
            FROM service_requests
            GROUP BY service_type
            ORDER BY count DESC
            LIMIT 1
        ");
        $top = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode([
            'total' => (int)$total,
            'avg' => $avg ? round($avg) : 0,
            'high' => (int)$high,
            'top' => $top ? $top['service_type'] : '—'
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to fetch stats: ' . $e->getMessage()]);
    }
}

function clearAllRequests($pdo) {
    try {
        $count = $pdo->exec("DELETE FROM service_requests");
        echo json_encode([
            'success' => true,
            'message' => 'All requests cleared successfully',
            'deleted' => $count
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to clear requests: ' . $e->getMessage()]);
    }
}
?>