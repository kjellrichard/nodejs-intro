const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    
    let pathParts = req.url.toLowerCase().split('?')[0].split('/');
    switch (pathParts[1].replace(/\\$/i,'')) {
        case 'signin':
            return viewSignin(req, res);
        case 'welcome':
            return viewWelcome(req, res);    
        case '':
            return viewHome(req, res);    
        default:    
            return handleNotFound(req, res);    
            
    }
    
});
const sendHtmlBody = (res,body, title=null) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    body = body.constructor === Array ? body.join('') : body;
    res.end(`<html><head><title>${title || 'No title set'}</title></head><body>${body}</body></html>`);
}

const viewSignin = (req, res) => {
    sendHtmlBody(res, [
        'Please enter your name',
        '<script>function signin() {',
        ' document.location.href = "/welcome/?name=" + document.getElementById("username").value;',
        '} </script>',
        '<div><input id="username" type="text" /><button onclick="signin()">Sign in</button></div>'
    ]);
}

const viewWelcome = (req, res) => {
    let params = (req.url.split('?')[1] || '').split('&').reduce((acc,kv) => {
        let [name, value] = kv.split('=');
        acc[name] = value;
        return acc;
    }, {});
    sendHtmlBody(res, `Welcome, <b>${params.name || 'guest'}</b>`);
}

const viewHome = (req, res) => {
    sendHtmlBody(res,
        ['<h1>Home</h1>',
            '<div><a href="/signin">Sign in</><div>',
            '<div><a href="/welcome">Continue as guest</><div>',
        ]
    )
}

const handleNotFound = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Ooops, page not found (${req.url})`);
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});