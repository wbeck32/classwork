const socketIO = require('socket.io');
const tokenService = require('./auth/token-service');
const User = require('./models/user');


module.exports = http => {
    const io = socketIO(http);

    const messages = [];

    io.on('connection', socket => {
        let user = null;

        const receiveMessage = message => {
            messages.push({ text: message, user });
            if(messages.length > 10) messages.shift();

            socket.broadcast.emit('message', { text: message, user });
        };

        socket.on('auth', token => {
            if(!token) {
                return socket.off('message', receiveMessage);
            }
            
            tokenService.verify(token)
                .then(payload => {
                    return User.findById(payload.id)
                        .select('name email')
                        .lean();
                })
                .then(_user => {
                    user = _user;
                    socket.on('message', receiveMessage);
                    socket.emit('messages', messages);
                })
                .catch(() => {
                    socket.off('message', receiveMessage);
                });
        });

    });
};
