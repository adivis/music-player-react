import React from 'react'

function LibrarySong({song,setPlayingNow}) {
    const selectHandler = async () =>{
        await setPlayingNow(song)
    }
    return (
        <div className="library-song" onClick={selectHandler}>
            <img alt={song.name} src={song.song_img}/>
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
        </div>
    )
}

export default LibrarySong
