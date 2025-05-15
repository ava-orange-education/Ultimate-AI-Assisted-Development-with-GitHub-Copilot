// GitHub Copilot Prompt:
// Write a performance test using K6 for a social media API
// Simulate 20000 virtual users posting comments with dynamic payloads

import http from 'k6/http';
import { check, sleep } from 'k6';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
    vus: 20000,
    duration: '30s'
};

export default function () {
    const payload = JSON.stringify({
        postId: Math.floor(Math.random() * 1000),
        userId: uuidv4(),
        comment: `This is an auto-generated comment by user-${Math.floor(Math.random() * 10000)}`
    });

    const headers = {
        'Content-Type': 'application/json'
    };

    const res = http.post('https://api.example.com/social/post-comment', payload, { headers });

    check(res, {
        'status is 201': (r) => r.status === 201,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}
