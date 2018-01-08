const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Received ${req.method} ${req.path}`);
});
app.get('/', (req, res) => {
    res.send(['<h1>Home</h1>',
        '<div><a href="/signin">Sign in</><div>',
        '<div><a href="/welcome">Continue as guest</><div>',
    ].join(''));
})

app.get('/signin', (req, res) => {
    res.send([
        'Please enter your name',
        '<script>function signin() {',
        ' document.location.href = "/welcome/?name=" + document.getElementById("username").value;',
        '} </script>',
        '<div><input id="username" type="text" /><button onclick="signin()">Sign in</button></div>'
    ].join('')); 
});

app.get('/welcome/', (req, res) => {
    res.send(`Welcome, <b>${req.query.name || 'guest'}</b>`); 
});

app.listen(3000)