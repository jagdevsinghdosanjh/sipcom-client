import { useEffect, useRef, useState } from 'react'
import './App.css'
import Dialer from './components/Dialer'
import JsSIP from 'jssip'

function App() {
  const uaRef = useRef<JsSIP.UA | null>(null);

  useEffect(() => {
    const socket = new JsSIP.WebSocketInterface('wss://127.0.0.1:5173/ws');
    const configuration = {
      uri: 'sip:101@127.0.0.1',
      password: '123123',
      sockets: [socket],
      session_timers: false,
    };

    uaRef.current = new JsSIP.UA(configuration);

    uaRef.current.on('registered', () => console.log('✅ Registered'));
    uaRef.current.on('registrationFailed', e => console.error('❌ Registration failed:', e.cause));
    uaRef.current.on('disconnected', () => console.warn('⚠️ Disconnected'));

    uaRef.current.start();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📲 SIPComm Dialer</h1>
      <p>Type a SIP URI and hit Call!</p>
      <Dialer ua={uaRef.current} />
    </div>
  )
}

export default App
