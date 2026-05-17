<?php
return [
    'paths' => ['*'],
    'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    'allowed_origins' => ['http://localhost:4200'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['Content-Type', 'Authorization', 'X-Requested-With'],
    'exposed_headers' => [],
    'max_age' => 3600,
    'supports_credentials' => true,
];
