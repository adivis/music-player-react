import React from 'react'

function LibrarySong({song,songs,setSongs,isPlaying,setIsPlaying,setPlayingNow,audioRef}) {
    const selectHandler = async () =>{
        const selectedSong = song
        const allSongs = songs.map((song)=>{
            if (song === selectedSong){
                return {
                    ...song,
                    active: true
                }
            }
            else{
                return {
                    ...song,
                    active: false
                }
            }
        })
        setSongs(allSongs)
        await setPlayingNow(selectedSong)
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
        <div  onClick={selectHandler} className={`library-song ${song.active? "selectedSong":""}`}>
            <img alt={song.name} src={song.song_img}/>
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
        </div>
    )
}

export default LibrarySong
