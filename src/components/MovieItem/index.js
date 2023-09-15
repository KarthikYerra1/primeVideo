import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {details} = props

  const {thumbnailUrl, videoUrl} = details

  const showVideo = <img src={thumbnailUrl} alt="thumbnail" />

  return (
    <div>
      <Popup modal trigger={showVideo}>
        {close => (
          <div className="popup-content">
            <div className="video-container">
              <button
                type="button"
                className="btn"
                data-testid="closeButton"
                onClick={close}
              >
                <IoMdClose className="cross-icon" />
              </button>
            </div>
            <ReactPlayer url={videoUrl} className="player" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
