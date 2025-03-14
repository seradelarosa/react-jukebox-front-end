import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import TrackDetail from './components/TrackDetail/TrackDetail.jsx';
import TrackForm from './components/TrackForm/TrackForm.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]); // set initial state of tracks
  const [selected, setSelected] = useState(null); //track which track the user has selected, since this app doesnt use routing
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {

    const fetchTracks = async () => { //define function that makes the api call
      try {
        const fetchedTracks = await trackService.index(); // holds tracks from index function in trackService

        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        }

        setTracks(fetchedTracks); // set state of tracks to the value of fetchedTracks
      } catch (err) {
        console.log(err);
      };
    }
    fetchTracks(); //putting this AFTER the definition of fetchTracks
  }, []);

  const handleSelect = (track) => {
    setSelected(track)
  };

  const handleFormView = (track) => {
    setIsFormOpen(!isFormOpen);
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.error) {
        throw new Error(newTrack.error);
      }

      setTracks([newTrack, ...tracks])
      console.log(newTrack);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.update(formData, trackId);

      if (updatedTrack.error) {
        throw new Error(updatedTrack.error);
      }

      setTracks((prevTracks) => [...prevTracks.map((track) => 
        track._id === trackId ? updatedTrack : track
      )]);      
      
      setIsFormOpen(false);
      setSelected(updatedTrack);

    } catch (error) {
      console.log(error);
    };
  };

  return (
    <>
      <TrackList
        tracks={tracks}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <TrackForm
          handleAddTrack={handleAddTrack}
          selected={selected}
          handleUpdateTrack={handleUpdateTrack}
        />
      ) : (
        <TrackDetail
          selected={selected}
          handleFormView={handleFormView}
        />
      )}
    </>
  )
};

export default App;

