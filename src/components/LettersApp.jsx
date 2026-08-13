import { useState, useEffect } from 'react'

export default function LettersApp() {
  const letters = [
    { id: 'happy', title: "Open When You're Happy", file: "Open When You're Happy.md" },
    { id: 'sad', title: "Open When You're Sad", file: "Open When You're Sad.md" },
    { id: 'miss', title: "Open When You Miss Me", file: "Open When You Miss Me.md" },
    { id: 'birthday', title: "Open On Your Birthday", file: "Open On Your Birthday.md" },
    { id: 'motivation', title: "Open When You Need Motivation", file: "Open When You Need Motivation.md" }
  ]

  const [activeLetter, setActiveLetter] = useState(null)
  const [letterContent, setLetterContent] = useState('')
  const [isOpening, setIsOpening] = useState(false)

  const openLetter = async (file) => {
    setActiveLetter(file)
    setIsOpening(false)
    try {
      const res = await fetch(`/letters/${file}`)
      const text = await res.text()
      setLetterContent(text)
    } catch (e) {
      setLetterContent("Couldn't load the letter. Try again.")
    }
  }



  if (activeLetter) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '400px' }}>
        <button 
          onClick={() => setActiveLetter(null)}
          style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', marginBottom: '16px' }}
        >
          ← Back to letters
        </button>

        {!isOpening ? (
          <div 
            onClick={() => setIsOpening(true)}
            style={{
              width: '200px', height: '140px', background: 'var(--color-primary-container)',
              borderRadius: 'var(--rounded-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--color-on-primary-container)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s'
            }}
            className="envelope-hover"
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '70px',
              background: 'rgba(255,255,255,0.2)', clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
            }}></div>
            <span className="label-md">Click to Open</span>
          </div>
        ) : (
          <div style={{
            width: '100%',
            maxWidth: '600px',
            background: 'var(--layer-1-bg)',
            padding: '48px 32px',
            borderRadius: 'var(--rounded-lg)',
            boxShadow: 'var(--layer-2-shadow)',
            animation: 'unfold 1s ease forwards'
          }}>
            <div className="body-md letter-text" style={{ whiteSpace: 'pre-wrap' }}>
              {letterContent}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
      {letters.map(letter => (
        <div 
          key={letter.id} 
          onClick={() => openLetter(letter.file)}
          style={{
            background: 'var(--layer-1-bg)',
            padding: '24px',
            borderRadius: 'var(--rounded-md)',
            textAlign: 'center',
            cursor: 'pointer',
            border: '1px solid var(--layer-1-border)',
            transition: 'all 0.3s ease'
          }}
          className="dock-icon"
        >
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>✉️</div>
          <div className="label-md" style={{ color: 'var(--color-on-surface)' }}>{letter.title}</div>
        </div>
      ))}


      <style>{`
        @keyframes unfold {
          0% { transform: scaleY(0.1); opacity: 0; }
          50% { transform: scaleY(1); opacity: 0.5; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        .letter-text {
          opacity: 0;
          animation: fadeIn 2s ease forwards 0.5s;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .envelope-hover:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  )
}
