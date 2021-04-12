import React,{useState,useRef} from 'react';
import Songs from './components/Songs';
import Player from './components/Player';
import './styles/App.scss';
import LibrarayNav from './components/LibraryNav';
import data from "./storedSongs";
import Nav from './components/Nav'

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [playingNow, setPlayingNow] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  
  return (
    <div className={`App ${libraryOpen?'libraryAnim':''}`}>
      <Nav
       libraryOpen={libraryOpen}
       setLibraryOpen={setLibraryOpen}
        />
      
      <Songs playingNow={playingNow}
      isPlaying={isPlaying}
      />
      <Player 
      isPlaying={isPlaying}
      songs={songs}
      setPlayingNow={setPlayingNow}
      setIsPlaying = {setIsPlaying}
      audioRef={audioRef}
      playingNow={playingNow}
      />

      <LibrarayNav songs={songs}
      setSongs={setSongs}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      audioRef={audioRef} setPlayingNow={setPlayingNow}
      libraryOpen={libraryOpen}
        />
    </div>
  );
}

export default App;
