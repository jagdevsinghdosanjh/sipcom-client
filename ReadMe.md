# 📞 SIPComm Client

A lightweight, browser-based SIP softphone built with React, TypeScript, and JsSIP. This project allows users to register a SIP account and make outbound voice calls using WebRTC directly in the browser.

> ⚡ Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [JsSIP](https://jssip.net/)  
> 🎯 Designed for developers experimenting with SIP signaling and WebRTC media  
> 🛠 Expandable into a full-featured communication portal

---

## 🚀 Live Demo

Run locally at: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Features

- ✅ SIP registration via WebSocket
- 📞 Outgoing calls to public or private SIP URIs
- 🎧 WebRTC-powered audio streams
- 🔄 Call control (dial, terminate)
- 💻 Runs directly in the browser—no native installs needed

---

## ⚙️ Tech Stack

| Layer       | Tech                         |
|------------|-------------------------------|
| UI         | React + Vite + TypeScript     |
| SIP Logic  | [JsSIP](https://jssip.net/)   |
| Media      | WebRTC APIs (browser-native)  |
| Build Tool | Vite + SWC for blazing speed  |

---

## 📁 Project Structure

sipcomm-client/ 
└── simcomm-console/ 
├── src/ 
│ 
├── App.tsx # Main app logic and routing
│
├── components/
│ 
│ └── Dialer.tsx # Dial UI + call control 
│ └── services/ 
│ └── sipClient.ts # JsSIP UA setup and session handling └
── public/


---

## 🔧 Getting Started

### 1. Clone & Navigate

```bash
git clone https://github.com/yourusername/sipcomm-client.git
cd sipcomm-client/simcomm-console

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev

The app runs on http://localhost:5173

🔐 SIP Configuration
Inside App.tsx or sipClient.ts, customize the configuration:
const socket = new JsSIP.WebSocketInterface('wss://your-sip-server.com/ws');

const configuration = {
  uri: 'sip:your-username@sipserver.com',
  password: 'your-password',
  sockets: [socket],
  session_timers: false,
};

Use SIP services like:

Sonetel

iptel.org

sip2sip.info

📞 SIP Test URIs
To try out live calls without a registration, paste one of these into the dialer:

SIP URI	What it Does
sip:echo@iptel.org	Echo test: hear yourself
sip:music@iptel.org	Stream hold music
sip:lenny@itslenny.com	Call “Lenny” chatbot
sip:echo@sip.sonetel.com	Sonetel echo test
🌐 Remote Access (Port Forwarding)
If you plan to use this app outside your LAN:

Port forward SIP (5060), WebSocket (7443), and media (10000–20000) on your router

Use a public domain or dynamic DNS

Ensure your SIP server supports external NAT traversal and/or configure STUN/TURN for WebRTC

OR try secure tunneling with ngrok:

🌐 Remote Access (Port Forwarding)
If you plan to use this app outside your LAN:

Port forward SIP (5060), WebSocket (7443), and media (10000–20000) on your router

Use a public domain or dynamic DNS

Ensure your SIP server supports external NAT traversal and/or configure STUN/TURN for WebRTC

OR try secure tunneling with ngrok:

bash
npx ngrok http 5173
🔜 Planned Features
📥 Incoming call screen

💬 SIP chat (MESSAGE method)

📹 Video calling via WebRTC

⏺️ Call recording and logs

📇 Contact list + presence indicators

💡 Tips
Always inspect browser console for SIP call events

Use STUN/TURN servers for reliable media when behind NAT

SIP server WebSocket endpoints must use wss:// if app is served over HTTPS

🤝 Contributing
Pull requests are welcome! Feel free to submit bugs, ideas, or features.

📄 License
MIT © 2025 Jagdev Singh Dosanjh

✨ Author
Made with 💙 by Jagdev, powered by open SIP standards and caffeine.


---

Let me know if you'd like to add badges, a project banner, or CI/CD instructio