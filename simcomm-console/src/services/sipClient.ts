import JsSIP from 'jssip';

let ua: JsSIP.UA;

export const startSipUA = (config: {
  uri: string;
  password: string;
  wsServers: string;
}) => {
  const socket = new JsSIP.WebSocketInterface(config.wsServers);
  const configuration = {
    uri: config.uri,
    password: config.password,
    sockets: [socket],
    session_timers: false,
    register: true,
  };

  ua = new JsSIP.UA(configuration);

  ua.on('registered', () => console.log('✅ Registered to SIP Server'));
  ua.on('registrationFailed', e => console.error('❌ Registration failed:', e.cause));
  ua.on('disconnected', () => console.warn('⚠️ Disconnected from SIP Server'));

  ua.start();
};

export const stopSipUA = () => {
  if (ua) ua.stop();
};
