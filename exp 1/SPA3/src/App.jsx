import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'page dark' : 'page light'}>
      <div className="card">
        <h2>{dark ? '🌙 Dark Mode' : '☀️ Light Mode'}</h2>

        <button onClick={() => setDark(!dark)}>
          Switch to {dark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

export default App
