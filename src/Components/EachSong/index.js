import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const EachSong = props => {
  const {id, imageUrl, name, genre, duration, deleteTrack} = props
  const deleteTriggered = () => {
    deleteTrack(id)
  }

  return (
    <div className="each-song-container">
      <div className="safe-container">
        <img src={imageUrl} alt="track" className="track" />
        <div className="name-container">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="safe-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          onClick={deleteTriggered}
          className="delete-btn"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  )
}

export default EachSong
