import { useEffect } from 'react';
import JsSIP from 'jssip';

function App() {
  useEffect(() => {
    const socket = new JsSIP.WebSocketInterface('wss://your-sip-server.com/ws');
    const configuration = {
      sockets: [socket],
      uri: 'sip:your-username@your-sip-server.com',
      password: 'your-password',
    };

    const ua = new JsSIP.UA(configuration);

    ua.on('connected', () => console.log('Connected to SIP server'));
    ua.on('registered', () => console.log('SIP account registered'));
    ua.on('registrationFailed', (e) => console.error('Registration failed:', e));

    ua.start();

    return () => ua.stop();
  }, []);

  return <h1>🚀 SIPComm Client Ready</h1>;
}

export default App;
