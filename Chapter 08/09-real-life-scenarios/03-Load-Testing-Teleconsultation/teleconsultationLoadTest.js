// Prompt:
// Write a k6 load testing script to simulate 100,000 concurrent users accessing a teleconsultation API.

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
    stages: [
        { duration: '5m', target: 10000 },
        { duration: '10m', target: 100000 },
        { duration: '5m', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'errors': ['rate<0.01'],
    },
};

export default function () {
    let url = 'https://api.example.com/teleconsultation';
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let res = http.get(url, params);

    let success = check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is below 1s': (r) => r.timings.duration < 1000,
    });

    errorRate.add(!success);
    sleep(1);
}
