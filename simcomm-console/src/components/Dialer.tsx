import { useState } from 'react';
import JsSIP from 'jssip';

interface Props {
  ua: JsSIP.UA | null;
}

const Dialer = ({ ua }: Props) => {
  const [target, setTarget] = useState('sip:someone@sipserver.com');
  const [session, setSession] = useState<JsSIP.RTCSession | null>(null);

  const handleCall = () => {
    if (!ua) return;

    const eventHandlers = {
      progress: () => console.log('🔔 Call is ringing...'),
      failed: (e: any) => console.error('❌ Call failed:', e),
      ended: () => console.log('📴 Call ended'),
      confirmed: () => console.log('✅ Call connected'),
    };

    const options = {
      eventHandlers,
      mediaConstraints: { audio: true, video: false },
    };

    const call = ua.call(target, options);
    setSession(call);
  };

  const handleHangup = () => {
    if (session) {
      session.terminate();
      setSession(null);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <input
        type="text"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="sip:user@domain"
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button onClick={handleCall} style={{ marginLeft: '1rem' }}>📞 Call</button>
      <button onClick={handleHangup} style={{ marginLeft: '0.5rem' }}>❌ Hang Up</button>
    </div>
  );
};

export default Dialer;
