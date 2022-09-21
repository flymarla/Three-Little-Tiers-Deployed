const express = require('express');
const request = require('supertest');


const app = express();
app.use('/hello', function (req, res) {
    res.send('hello world!');
});

describe('Hello Route Works', function () {
    test('responst to /hello', async () => {
        const res = await request(app).get('/hello');
        expect (res.text).toEqual('hello world!');
    });
})