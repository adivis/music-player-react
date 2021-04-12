import React from 'react'

function Songs({playingNow,isPlaying}) {
    return (
        <div className="song-container">
            <img style={{border:`1px solid(to right,${playingNow.color[0]},${playingNow.color[1]})`}} className={` ${isPlaying? "rotate":""}`} 
            alt={playingNow.name} src={playingNow.song_img}/>
            <h2>{playingNow.artist}</h2>
            <h4>{playingNow.name}</h4>
        </div>
    )
}

export default Songs
