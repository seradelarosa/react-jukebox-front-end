const TrackDetail = (props) => {
    if (!props.selected) {
        return (
            <h2> No Details </h2>
        );
    }

    return (
        <div>
            <h2>{props.selected.title}</h2>
            <h3>by {props.selected.artist}</h3>
        </div>
    )

};

export default TrackDetail;