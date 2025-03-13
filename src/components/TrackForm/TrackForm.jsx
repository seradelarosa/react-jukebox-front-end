// need to import state to track as the user types in the input fields
import { useState } from 'react';

const TrackForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAddTrack(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Title </label>
                <input 
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                />
                <label htmlFor="artist"> Artist </label>
                <input
                id="artist"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                required
                />
                <button type="submit">Add Track</button>
            </form>
        </div>
    )
};

export default TrackForm;