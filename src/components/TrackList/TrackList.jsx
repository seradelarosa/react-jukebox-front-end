const TrackList = (props) => {

    return (
        <div>
            <h1>Track List</h1>
            <div>
                {!props.tracks.length ? (
                    <h2>No tracks yet!</h2>
                ) : (
                    <ul>
                        {props.tracks.map((track) => (
                            <li
                                key={track._id}
                                style={{ cursor: 'pointer', color: "#646CFF" }}
                                onClick={() => props.handleSelect(track)}
                            >
                                {track.title} - {track.artist}
                                <button onClick={() => props.handleFormView(props.selected)}>
                                    Edit Track
                                </button>
                                {/* pass the id instead of the whole object */}
                                {/* props.selected._id doesn't work because we arent selecting the track and then delete */}
                                <button onClick={() => props.handleDeleteTrack(track._id)}>
                                    Delete Track
                                </button>
                                {/* handlePlayPause is called,  which sets playingTrackId in app.jsx to the tracks id */}
                                {/* when the playingTrackId is updated, it re-renders with that track's details */}
                                <button onClick={() => props.handlePlayPause(track._id)}>
                                    {props.playingTrackId === track._id ? 'Pause' : 'Play'}
                                    {/* clicking pause sets playingTrackId to null */}
                                    {/* NowPlaying.jsx sees that it is null and hides the details */}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button onClick={props.handleFormView}>
                {props.isFormOpen ? 'Cancel' : 'Add New Track'}
            </button>
        </div>
    );
};

export default TrackList;