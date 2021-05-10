import {useState} from 'react'
import ProgressBar from './ProgressBar'
const Player = () => {
    const [playing, setPlaying] = useState(false)
    return(
        <div className="container">
        <div className="Player">
            <img src="https://i.scdn.co/image/ab67616d00001e02ac6c6266b8d494f464e8aee7" alt="" />
            <div className="track-info">
                <h3>Track Name</h3>
                <h4>Artist</h4>
            </div>
            <div className="controls">
                <button><i className="fas fa-backward fa-2x"></i></button>
                <button><i className={`fas fa-${playing?'pause':'play'} fa-2x`}></i></button>
                <button><i className="fas fa-forward fa-2x"></i></button>
            </div>
        </div>
        <ProgressBar/>
        </div>
    )
}
export default Player