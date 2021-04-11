import React from 'react'
import LibrarySong from './LibrarySong';

const LibraryNav=({songs,setSongs,isPlaying,setIsPlaying,setPlayingNow,audioRef,playingNow,libraryOpen})=> {
    return (

        <div className={`library ${libraryOpen? "showLibrary":""}`}>
            
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>(
                    <LibrarySong 
                    song={song} 
                    songs={songs}
                    setSongs={setSongs}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    setPlayingNow={setPlayingNow} 
                    playingNow={playingNow}
                    audioRef={audioRef}
                    key={song.id}
                    />
                    ))}

            </div>
             </div>
    )
}

export default LibraryNav
