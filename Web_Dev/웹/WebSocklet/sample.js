const SocketIO=require("socket.io");
module.exports=function(_server){

  //소켓 io를 처리할 객체 생성
  const io=SocketIO(_server,{path:'/socket.io'});

  //접속 처리 및 해당 클라이언크에 대한 모든 처리
  io.on("connection",function(socket){

    //접속한 정보를 표시
    const req=socket.request;
    const ip=req.headers['x-forwarded-for']||req.connection.remoteAddress;
    console.log(ip+"의 새로운 유저가 접속 하였습니다.");

    //접속이 끊어진 경우 처리를 하는 콜백
    socket.on("error",function(error){
      console.log("error: "+error);
    });

    //일반 메시지를 받은 경우의 처리 (ms라는 이벤트로 클라이언크가 보낼 때 마다 이 메소드가 호출)
    socket.on("ms", function(data){
      //클라이언트로 부터 받은 메시지를 표시
      console.log("클라이언트로 부터 받은 메시지: "+data);
      //클라이언트애 구현된 echo 이벤트로 메시지를 보냄
      socket.emit("echo",data);
    });
  });
}
