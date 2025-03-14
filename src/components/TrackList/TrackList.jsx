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