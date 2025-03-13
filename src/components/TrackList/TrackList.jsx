const TrackList = (props) => {
    console.log(props.tracks);

    return (
        <div>
            <h1>Track List</h1>
            <div>
                {!props.tracks.length ? (
                    <h2>No tracks yet!</h2>
                ) : (
                    <ul>
                        {props.tracks.map((track) => (
                            <li key={track._id}>{track.title} - {track.artist}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TrackList;