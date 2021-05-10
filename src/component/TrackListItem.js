const TrackListItem = ({track}) =>{
    return(
        <div className="TrackListItem">
            <img src={track.album.images[1].url} alt={track.name} />
            <div className="track-info">
                <div className="info">
                    <h3>{track.name}</h3>
                    <h4>{track.artists[0].name}</h4>
                    <p>{track.album.name}, {track.album.release_date.slice(0,4)}</p>
                </div>
                <div className="buttons">
                    <button><i className="fas fa-play"></i></button>
                    <button><i className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}
export default TrackListItem