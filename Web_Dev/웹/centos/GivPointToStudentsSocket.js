var ws;

$(document).ready(function () {
    var txtRecv = $('#Recv');
    ws = new WebSocket("ws://35.182.71.151:8100");

    // websocket 서버에 연결되면 연결 메시지를 화면에 출력한다.
    ws.onopen = function (e) {
        txtRecv.append("connected<br>");
    };

    // websocket 에서 수신한 메시지를 화면에 출력한다.
    ws.onmessage = function (e) {
        txtRecv.append(e.data + "<br>");
    };

    // websocket 세션이 종료되면 화면에 출력한다.
    ws.onclose = function (e) {
        txtRecv.append("closed<br>");
    }
});

// 사용자가 입력한 메시지를 서버로 전송한다.
function sendMessage() {
    var txtSend = $('#Send');
    ws.send(txtSend.val());
    txtSend.val("");
}
