import React from 'react'
import LibrarySong from './LibrarySong';

const LibraryNav=({songs,isPlaying,setIsPlaying,setPlayingNow,audioRef,playingNow})=> {
    return (

        <div className="library">
            
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>(
                    <LibrarySong 
                    song={song} 
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
