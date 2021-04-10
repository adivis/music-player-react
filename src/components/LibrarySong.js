import React from 'react'

function LibrarySong({song,isPlaying,setIsPlaying,setPlayingNow,audioRef}) {
    const selectHandler = async () =>{
        await setPlayingNow(song)
        if(isPlaying){
            const promise = audioRef.current.play();
            if(promise !== undefined)
            {
                promise.then((audio)=>{
                    audioRef.current.play();
                })
            }
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
        
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
