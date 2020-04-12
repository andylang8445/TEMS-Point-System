var app = require('express')();
var mysql = require('mysql');
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

// localhost:3000으로 서버에 접속하면 클라이언트로 index.html을 전송한다
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log('Someone have accessedd the socket IO server');
});

// namespace /chat에 접속한다.
var chat = io.of('/chat').on('connection', function (socket) {
    socket.on('SQL message', function (data) {
        console.log('SQL message from client: ', data);

        var aPoint = socket.APoint = data.APoint;
        var sPoint = socket.SPoint = data.SPoint;
        var dPoint = socket.DPoint = data.DPoint;
        var ident = socket.ident = data.ident;

        // room에 join한다
        socket.join(1);
        // room에 join되어 있는 클라이언트에게 메시지를 전송한다
        chat.to(room).emit('chat message', "Point DB Updated!");
        con.connect(function (err) {
            if (err) throw err;
            con.query("update Point set AcademicPoint = "+aPoint+", SocialPoint = "+sPoint+", DirectorsPoint = "+dPoint+"
where id = "+ident+";
", function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
        });
    });
});

server.listen(80, function () {
    console.log('Socket IO server listening on port 80');
});
