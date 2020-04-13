var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({
    port: 8100
});
let mysql = require('mysql');
let config = {
    host: "34.66.52.207",
    user: "dbedit",
    password: "tutor33",
    database: "TEMS_SQL_Point"
};



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
        var idd = "";
        var aPoint = "";
        var sPoint = "";
        var dPoint = "";
        for (var i = 0; i < msg.length; i++) {
            if (msgChar[i] == ':') {
                flagCurrent++;
            } else if (flagCurrent == 0) {
                idd = idd + msgChar[i];
            } else if (flagCurrent == 1) {
                aPoint = aPoint + msgChar[i];
            } else if (flagCurrent == 2) {
                sPoint = sPoint + msgChar[i];
            } else if (flagCurrent == 3) {
                dPoint = dPoint + msgChar[i];
            }
        }
        var id = parseInt(idd);
        if (aPoint == "reset") {
            date_ob = new Date();

            // current date
            // adjust 0 before single digit date
            date = ("0" + date_ob.getDate()).slice(-2);
            // current month
            month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            // current year
            year = date_ob.getFullYear();
            // current hours
            hours = date_ob.getHours();
            // current minutes
            minutes = date_ob.getMinutes();
            // current seconds
            seconds = date_ob.getSeconds();
            let connection = mysql.createConnection(config);
            console.log("Reset all Students Request Arrived! (at " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ")");
            connection.query("update Point set AcademicPoint = 0,SocialPoint = 0, DirectorsPoint=0;", (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log('Rows affected:', results.affectedRows);
            });
            var msgReturn = "Point System Reset Completed.";
            connection.end();
        } else {
            id = id + 1;
            let connection = mysql.createConnection(config);
            console.log("id[" + id + "], AcademicPoint[" + aPoint + "], SocialPoint[" + sPoint + "], Director'sPoint[" + dPoint + "]");
            connection.query("update Point set AcademicPoint = " + aPoint + ",SocialPoint = " + sPoint + ", DirectorsPoint=" + dPoint + " where id = " + id + ";", (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log('Rows affected:', results.affectedRows);
            });
            var msgReturn = "DB update Complete!";
            connection.end();

        }
        ws.send(msgReturn);
    });
});
