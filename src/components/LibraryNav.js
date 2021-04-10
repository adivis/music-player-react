import React from 'react'
import LibrarySong from './LibrarySong';

const LibraryNav=({songs,setPlayingNow,playingNow})=> {
    return (

        <div className="library">
            
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>(
                    <LibrarySong 
                    song={song} 
                    setPlayingNow={setPlayingNow} 
                    playingNow={playingNow}
                    key={song.id}
                    />
                    ))}

            </div>
             </div>
    )
}

export default LibraryNav
