import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import TrackDetail from './components/TrackDetail/TrackDetail.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]); // set initial state of tracks
  const [selected, setSelected] = useState(null); //track which track the user has selected, since this app doesnt use routing

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


  return (
    <>
    <TrackList 
    tracks={tracks}
    handleSelect={handleSelect}
    />
    <TrackDetail selected={selected}/>
    </>
  )
};

export default App;

