import LettersApp from './LettersApp'
import MusicApp from './MusicApp'
import PhotosApp from './PhotosApp'
import GenericApp from './GenericApp'
import SurpriseApp from './SurpriseApp'

export default function AppsContainer({ activeApp, onClose, currentSong, setCurrentSong }) {
  const renderApp = () => {
    switch (activeApp) {
      case 'letters':
        return <LettersApp />
      case 'music':
        return <MusicApp currentSong={currentSong} setCurrentSong={setCurrentSong} />
      case 'photos':
        return <PhotosApp />
      case 'surprise':
        return <SurpriseApp />
      default:
        return null
    }
  }

  const appNames = {
    letters: 'Letters',
    music: 'Music',
    photos: 'Photos',
    memories: 'Memories',
    wardrobe: 'Wardrobe',
    places: 'Places',
    us: 'Us',
    surprise: 'Surprise'
  }

  return (
    <div className="app-modal-wrapper" onClick={onClose}>
      <div className="app-modal glass-modal" onClick={e => e.stopPropagation()}>
        <div className="app-modal-header">
          <h2 className="headline-md">{appNames[activeApp]}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        <div className="app-modal-content">
          {renderApp()}
        </div>
      </div>
    </div>
  )
}
