import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import TrackForm from './components/TrackForm/TrackForm.jsx';
import NowPlaying from './components/NowPlaying/NowPlaying.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]); // set initial state of tracks
  const [selected, setSelected] = useState(null); //track which track the user has selected, since this app doesnt use routing
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [playingTrackId, setPlayingTrackId] = useState(null);

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

    // if opening the form for a new track, clear `selected`
    if (!isFormOpen) {
      setSelected(null);
  }
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

  const handleDeleteTrack = async (trackId) => {
    try {
      console.log("trackId received in handleDeleteTrack:", trackId);

      const deletedTrack = await trackService.deleteTrack(trackId);
      console.log(deletedTrack);

      if (deletedTrack.error) {
        throw new Error(deletedTrack.error);
      };

      setTracks((prevTracks) => prevTracks.filter((track) => track._id !== trackId));

      setSelected(null);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlayPause = (trackId) => {
    setPlayingTrackId((prev) => (prev === trackId ? null : trackId));
  };

  return (
    <>
      <TrackList
        tracks={tracks}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
        selected={selected}
        handleDeleteTrack={handleDeleteTrack}
        handlePlayPause={handlePlayPause}
        playingTrackId={playingTrackId}
      />
      {isFormOpen ? (
        <TrackForm
          handleAddTrack={handleAddTrack}
          selected={selected}
          handleUpdateTrack={handleUpdateTrack}
        />
      ) : (
        <NowPlaying 
        playingTrackId={playingTrackId}
        tracks={tracks}
        />
      )}
    </>
  )
};

export default App;

// <TrackDetail
//   selected={selected}
//   handleFormView={handleFormView}
// />