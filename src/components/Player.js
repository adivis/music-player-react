import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay,faPause, faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";




const Player = ({ isPlaying,songs, setPlayingNow, setIsPlaying,audioRef, playingNow }) => {
  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    durationTime:0,
  }); 
  const playHandler = () =>{
   if(isPlaying){
     audioRef.current.pause();
     setIsPlaying(!isPlaying);
   }
   else{
     audioRef.current.play();
     setIsPlaying(!isPlaying);
   }
  }
 const timeUpdateHandler = (e) =>{
   const current = e.target.currentTime;
   const duration = e.target.duration;
   setSongInfo({...songInfo,currentTime:current, durationTime:duration});
 }
 const dragLineHandler = (e) => {
   audioRef.current.currentTime = e.target.value; 
  setSongInfo({...songInfo, currentTime:e.target.value});
 }
  
  const getTime = (time) => {
    return(
      Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }
  const skipForwardHandler = () =>{
    const songsAll = songs.map((song,index)=>{
      if (song === playingNow){
        song.active = false;
        if(index+1===songs.length)
        {
          index = -1;
        }
        songs[index+1].active = true;
        // console.log(songs.length)
        setPlayingNow(songs[index+1]);
         
      }
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
      const promise = audioRef.current.play();
      if(promise !== undefined)
      {
          promise.then((audio)=>{
              audioRef.current.play();
          })
      }
        setIsPlaying(!isPlaying);
    }
     
  })
  // setSongs(songsAll);
  
  }
  const skipBackHandler = () =>{
    const songsAll = songs.map((song,index)=>{
      if (song === playingNow){
        song.active = false;
        if(index=== 0)
        {
          index = songs.length;
        }
        songs[index-1].active = true;
        setPlayingNow(songs[index-1]);
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
        const promise = audioRef.current.play();
        if(promise !== undefined)
        {
            promise.then((audio)=>{
                audioRef.current.play();
            })
        }
          setIsPlaying(!isPlaying);
      }
      }
     
  })
  // setSongs(songsAll);
  
  }

  return (
    <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} 
                max={songInfo.durationTime || 0} 
                value={songInfo.currentTime} onChange={dragLineHandler}
                type="range"/>
                <p>{songInfo.durationTime?getTime(songInfo.durationTime):"0:00"}</p>
            </div>
            
            <div className="play-control">
                <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft } onClick={skipBackHandler}/> 
        <FontAwesomeIcon onClick={playHandler}  className="skinback" size="2x" icon={ isPlaying ? faPause : faPlay} />
        
        <FontAwesomeIcon className="skipforward" size="2x" icon={faAngleRight } onClick={skipForwardHandler}/> 
             </div>
             <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={playingNow.audio}></audio>
        </div>
  );
};

export default Player;