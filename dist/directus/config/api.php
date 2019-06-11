<?php

return [
    'app' => [
        'env' => 'production',
        'timezone' => 'America/New_York',
    ],

    'settings' => [
        'logger' => [
            'path' => __DIR__ . '/logs/app.log',
        ],
    ],

    'database' => [
        'type' => 'mysql',
        'host' => 'localhost',
        'port' => 3306,
        'name' => 'dire339',
        'username' => 'dire339',
        'password' => '4ISp-Y(h29',
        'engine' => 'InnoDB',
        'charset' => 'utf8mb4',
        // When using unix socket to connect to the database the host attribute should be removed
        // 'socket' => '/var/lib/mysql/mysql.sock',
        'socket' => '',
    ],

    'cache' => [
        'enabled' => false,
        'response_ttl' => 3600, // seconds
        'pool' => [
            // 'adapter' => '',
            // 'path' => '',
            // 'host' => '',
            // 'port' => '',
        ],
        // 'pool' => [
        //    'adapter' => 'apc'
        // ],
        // 'pool' => [
        //    'adapter' => 'apcu'
        // ],
        // 'pool' => [
        //    'adapter' => 'filesystem',
        //    'path' => 'cache', // relative to the api directory
        // ],
        // 'pool' => [
        //    'adapter'   => 'memcached',
        //    'host'      => 'localhost',
        //    'port'      => 11211
        // ],
        // 'pool' => [
        //    'adapter'   => 'redis',
        //    'host'      => 'localhost',
        //    'port'      => 6379
        // ],
    ],

    'storage' => [
        'adapter' => 'local',
        // The storage root is the directus root directory.
        // All path are relative to the storage root when the path is not starting with a forward slash.
        // By default the uploads directory is located at the directus public root
        // An absolute path can be used as alternative.
        'root' => 'public/uploads/_/originals',
        // This is the url where all the media will be pointing to
        // here is where Directus will assume all assets will be accessed
        // Ex: (yourdomain)/uploads/_/originals
        'root_url' => '/uploads/_/originals',
        // Same as "root", but for the thumbnails
        'thumb_root' => 'public/uploads/_/thumbnails',
        // 'key' => '',
        // 'secret' => '',
        // 'region' => '',
        // 'version' => '',
        // 'bucket' => '',
        // 'options' => '',
        // Set custom S3 endpoint
        // 'endpoint' => '',
    ],

    'mail' => [
        'default' => [
            'transport' => 'sendmail',
            // 'sendmail' => '',
            // 'host' => '',
            // 'port' => '',
            // 'username' => '',
            // 'password' => '',
            // 'encryption' => '',
            'from' => 'admin@4fuq.com'
        ],
    ],

    'cors' => [
        'enabled' => true,
        'origin' => array (
  0 => '*',
),
        'methods' => array (
  0 => 'GET',
  1 => 'POST',
  2 => 'PUT',
  3 => 'PATCH',
  4 => 'DELETE',
  5 => 'HEAD',
),
        'headers' => array (
),
        'exposed_headers' => array (
),
        'max_age' => null, // in seconds
        'credentials' => false,
    ],

    'rate_limit' => [
        'enabled' => false,
        'limit' => 100, // number of request
        'interval' => 60, // seconds
        'adapter' => 'redis',
        'host' => '127.0.0.1',
        'port' => 6379,
        'timeout' => 10,
    ],

    'hooks' => [
        'actions' => [],
        'filters' => [],
    ],

    'feedback' => [
        'token' => '5f089d509d6983809a9d2a9111a74c1e683cc7fa',
        'login' => true
    ],

    // These tables will not be loaded in the directus schema
    'tableBlacklist' => [],

    'auth' => [
        'secret_key' => 'jVtALg9qceD9R1pdROcwZ1drgNRfyab1',
        'public_key' => '53029ab7-b48c-47a3-b52f-b4dbfb70c490',
        // 'social_providers' => '',
        // 'okta' => [
        //     'client_id' => '',
        //     'client_secret' => '',
        //     'base_url' => 'https://dev-000000.oktapreview.com/oauth2/default'
        // ],
        // 'github' => [
        //     'client_id' => '',
        //     'client_secret' => ''
        // ],
        // 'facebook' => [
        //     'client_id'          => '',
        //     'client_secret'      => '',
        //     'graph_api_version'  => 'v2.8',
        // ],
        // 'google' => [
        //     'client_id'       => '',
        //     'client_secret'   => '',
        //     'hosted_domain'   => '*',
        //     // Uses OpenIDConnect to fetch the email instead of using the Google+ API
        //     // Disabling the OIDC Mode, requires you to enable the Google+ API otherwise it will fail
        //     'use_oidc_mode'   => true,
        // ],
        // 'twitter' => [
        //     'identifier'   => '',
        //     'secret'       => ''
        // ]
    ],
];
