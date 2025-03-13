import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]); // set initial state of tracks

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








  return (
    <TrackList tracks={tracks}/>
  )
};

export default App;

