const NowPlaying = ({ playingTrackId, tracks }) => {
    const playingTrack = tracks.find(track => track._id === playingTrackId);

    // if playingTrackId is set, it finds the track and displays the details
    // otherwise it hides track details
    return playingTrack ? (
        <div>
            <h2>{playingTrack.title}</h2>
            <h3>by {playingTrack.artist}</h3>
        </div>
        //hide when there is no track playing
    ) : null;
};

export default NowPlaying;
