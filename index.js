const express = require('express');

const server = express();

server.get('/', (request, response) => {
    console.log('This is the home route!');

    response.send('<h1>My Awesome Node Site!</h1>');
});

server.get('/api/user', (req, res) => {
    const user = {
        name: 'Marty McFly',
        occupation: 'Slacker',
        age: 17,
        email: 'marty@timetravel.com'
    }

    res.send(user);
});

server.listen(9000, () => {
    console.log('Server running at localhost:', 9000);
});
