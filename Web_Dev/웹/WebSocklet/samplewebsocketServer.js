var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({
    port: 8100
});

wss.on('connection', function (ws) {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    console.log("New user connected to Point Editing System at " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    // 클라이언트가 전송한 메시지가 수신되면 클라이언트로 다시 전송한다.
    ws.on('message', function (msg) {
        console.log("msg[" + msg + "]");

        var msgChar = msg.split('');
        var flagCurrent = 0;
        var id = "";
        var aPoint = "";
        var sPoint = "";
        var dPoint = "";
        for (var i = 0; i < msg.length; i++) {
            if (msgChar[i] == ':') {
                flagCurrent++;
            } else if (flagCurrent == 0) {
                id = id + msgChar[i];
            } else if (flagCurrent == 1) {
                aPoint = aPoint + msgChar[i];
            } else if (flagCurrent == 2) {
                sPoint = sPoint + msgChar[i];
            } else if (flagCurrent == 3) {
                dPoint = dPoint + msgChar[i];
            }
        }
        console.log("id[" + id + "]");
        console.log("APoint[" + aPoint + "]");
        console.log("SPoint[" + sPoint + "]");
        console.log("DPoint[" + dPoint + "]");
        console.log("----------");
        ws.send(msg);
    });
});
