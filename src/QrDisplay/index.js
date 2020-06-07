import React, { useState } from "react";
import SockJsClient from "react-stomp";
import './style.css';
const QRCode = require('qrcode.react');

const QrDisplay = (props) => {
  const [clientConnected, setClientConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [uuid, setUuid] = useState('');
  const [clientRef, setClientRef] = useState();
  const wsSourceUrl = "https://localhost:8081/websocket-endpoint/qr-code";

  const onMessageReceive = (msg, topic) => {
    console.log(msg);
    setUuid(msg.uuid);
    setMessages([...messages, msg]);
  }

  const sendMessage = (msg) => {
    try {
      clientRef.sendMessage("/websocket-method/qr-code", JSON.stringify(msg));
      return true;
    } catch (e) {
      return false;
    }
  }

  return (
    <div>
      <h1>Scan this QR to join the Seminar</h1>
      <h1></h1>
      <SockJsClient url={wsSourceUrl} topics={["/websocket-topic/qr-code"]}
        onMessage={onMessageReceive} ref={(client) => setClientRef(client)}
        onConnect={() => { setClientConnected(true); sendMessage({ email: 'binhpdse130691@fpt.edu.vn' }) }}
        onDisconnect={() => setClientConnected(false)}
        debug={false} />
      <QRCode size={512} value='https://localhost:8081/qr/student' className='qr-code'/>
    </div>
  );
}

export default QrDisplay;
