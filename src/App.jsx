import { useState, useRef } from 'react'
import './App.css'
import AppsContainer from './components/AppsContainer'

function App() {
  const [started, setStarted] = useState(false)
  const [activeApp, setActiveApp] = useState(null)
  const [currentSong, setCurrentSong] = useState("FINE SHYT - Guru Randhawa.mp3")
  const audioRef = useRef(null)

  const handleStart = () => {
    setStarted(true)
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed', e))
    }
  }

  const apps = [
    { id: 'photos', name: 'Photos', icon: '📸' },
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'letters', name: 'Letters', icon: '💌' },
    { id: 'surprise', name: 'Surprise', icon: '✨' },
  ]

  return (
    <div className="app-container">
      {/* Background Audio */}
      <audio ref={audioRef} src={`/music/${currentSong}`} loop autoPlay={started} />

      {/* Welcome Screen */}
      <div className={`welcome-screen ${started ? 'fade-out' : ''}`}>
        <h1 className="headline-lg" style={{ marginBottom: '24px' }}>YAMIKI OS</h1>
        <p className="body-lg" style={{ marginBottom: '48px', color: 'var(--color-on-surface-variant)' }}>
          Welcome to your personal sanctuary.
        </p>
        <button className="btn-primary" onClick={handleStart}>
          Enter Bedroom
        </button>
      </div>

      {/* Desktop / Bedroom View */}
      <div className="desktop">
        {/* Hotspots */}
        <div className="hotspot hotspot-headphones" title="Music" onClick={() => setActiveApp('music')}></div>
        <div className="hotspot hotspot-photoframe" title="Memories" onClick={() => setActiveApp('memories')}></div>
        <div className="hotspot hotspot-desk" title="Letters" onClick={() => setActiveApp('letters')}></div>

        {/* OS Dock */}
        <div className="os-dock glass-panel">
          {apps.map(app => (
            <div key={app.id} className="dock-icon" onClick={() => setActiveApp(app.id)}>
              <span className="icon">{app.icon}</span>
              <span className="label-sm">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* App Modals */}
      {activeApp && (
        <AppsContainer 
          activeApp={activeApp} 
          onClose={() => setActiveApp(null)} 
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      )}
    </div>
  )
}

export default App
