export default function MusicApp({ currentSong, setCurrentSong }) {
  const songs = [
    "Darling Jatt Di - Amrinder Gill.mp3",
    "Do Anjane Ajnabi - (Raag.Fm).mp3",
    "FINE SHYT - Guru Randhawa.mp3",
    "Haye Ri Duniya (PenduJatt.Com.Se).mp3",
    "Kamikaze - (Raag.Fm).mp3",
    "Karun_Nanku_-_Mrignaini_(mp3.pm).mp3"
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ 
        padding: '24px', 
        background: 'var(--layer-1-bg)', 
        borderRadius: 'var(--rounded-lg)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎵</div>
        <h3 className="body-lg" style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>Now Playing</h3>
        <p className="label-md">{currentSong.replace('.mp3', '')}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 className="label-md">Playlist</h4>
        {songs.map((song, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSong(song)}
            style={{
              padding: '12px 16px',
              background: currentSong === song ? 'var(--layer-2-bg)' : 'transparent',
              border: 'none',
              borderRadius: 'var(--rounded-md)',
              color: currentSong === song ? 'var(--color-primary)' : 'var(--color-on-surface)',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'background 0.2s',
              fontFamily: 'var(--font-family-body)'
            }}
          >
            {song.replace('.mp3', '')}
          </button>
        ))}
      </div>
    </div>
  )
}
