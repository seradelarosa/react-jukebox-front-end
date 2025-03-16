const NowPlaying = (props) => {
    if (props.selected) {
        return (
            <div>
                <h2>{props.selected.title}</h2>
                <h3>by {props.selected.artist}</h3>
            </div>
        )
    } else {
        return (
            <>
            </>
        );
    }
};

export default NowPlaying;