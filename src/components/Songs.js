import React from 'react'

function Songs({playingNow}) {
    return (
        <div className="song-container">
            <img alt={playingNow.name} src={playingNow.song_img}/>
            <h2>{playingNow.artist}</h2>
            <h4>{playingNow.name}</h4>
        </div>
    )
}

export default Songs
