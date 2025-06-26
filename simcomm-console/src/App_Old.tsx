import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { startSipUA } from './services/sipClient'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    startSipUA({
      uri: 'sip:your-username@sipserver.com',
      password: 'your-password',
      wsServers: 'wss://your-sip-server.com/ws'
    })
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 SIPComm Client is Live</h1>
      <p>Check your browser console for SIP registration status.</p>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react';
// import { startSipUA } from './services/sipClient';

// function App() {
//   useEffect(() => {
//     startSipUA({
//       uri: 'sip:your-username@sipserver.com',
//       password: 'your-password',
//       wsServers: 'wss://your-sip-server.com/ws'
//     });
//   }, []);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>🚀 SIPComm Client is Live</h1>
//       <p>Check your browser console for SIP registration status.</p>
//     </div>
//   );
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
