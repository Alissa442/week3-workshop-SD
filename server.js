const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'www')));

const validUsers = [
    { email: 'user1@example.com', password: '123' },
    { email: 'user2@example.com', password: '456' },
    { email: 'user3@example.com', password: '789' }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'login.html'));
});

app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'account.html'));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body; // Extract email and password from the request
    // Check if the provided email and password match any in the validUsers array
    const isValid = validUsers.some(user => user.email === email && user.password === password);
    
    // Return a JSON object indicating if the login was successful or not
    res.json({ valid: isValid });
});


const PORT = 3000;
http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
