import React,{useState} from 'react';
import Songs from './components/Songs';
import Player from './components/Player';
import './styles/App.scss';
import LibrarayNav from './components/LibraryNav';
import data from "./storedSongs";
function App() {
  const [songs, setSongs] = useState(data());
  const [playingNow, setPlayingNow] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <h1>Music Player </h1>
      <Songs playingNow={playingNow}/>
      <Player 
      isPlaying={isPlaying}
      setIsPlaying = {setIsPlaying}
      playingNow={playingNow}/>
      <LibrarayNav songs={songs} setPlayingNow={setPlayingNow}  />
    </div>
  );
}

export default App;
