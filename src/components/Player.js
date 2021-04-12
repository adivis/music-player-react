import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay,faPause, faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";




const Player = ({ isPlaying,songs, setPlayingNow, setIsPlaying,audioRef, playingNow }) => {
  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    durationTime:0,
    completePercentage:0,
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
   const percentage = Math.round((Math.round(current)/Math.round(duration))*100);
  
   setSongInfo({...songInfo,currentTime:current, durationTime:duration, completePercentage:percentage});
 }
 
 const autoPlayHandler = async ()=>{
   let currentIndex = songs.findIndex((song)=>song.id===playingNow.id);
  await setPlayingNow(songs[(currentIndex+1)%songs.length]); 
  if(isPlaying){
    audioRef.current.play()
  }
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
  const skipForwardHandler = async () =>{
    
    let currentIndex = songs.findIndex((song)=>song.id===playingNow.id);
    songs[currentIndex].active=false;
    songs[(currentIndex+1)%songs.length].active=true;
    await setPlayingNow(songs[(currentIndex+1)%songs.length]); 
    if(isPlaying){
      audioRef.current.play()
    }
    else{
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  // setSongs(songsAll);
  
  }
  const skipBackHandler = async () =>{
    let currentIndex = songs.findIndex((song)=>song.id===playingNow.id);
    songs[currentIndex].active=false;
    songs[(currentIndex+songs.length-1)%songs.length].active=true;
    await setPlayingNow(songs[(currentIndex+songs.length-1)%songs.length]); 
    if(isPlaying){
      audioRef.current.play()
    }
    else{
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  // setSongs(songsAll);
  
  }
  const trackPer ={
    transform:`translateX(${songInfo.completePercentage}%)`
  }

  return (
    <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div 
               style={{background:`linear-gradient(to right,${playingNow.color[0]},${playingNow.color[1]})`}} className="track">

                    <input min={0} 
                    max={songInfo.durationTime || 0} 
                    value={songInfo.currentTime} onChange={dragLineHandler}
                    type="range"/>
                    <div style={trackPer} className="colored-track">

                    </div>
                </div>

                <p>{songInfo.durationTime?getTime(songInfo.durationTime):"0:00"}</p>
            </div>
            
            <div className="play-control">
                <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft } onClick={skipBackHandler}/> 
        <FontAwesomeIcon onClick={playHandler}  className="skinback" size="2x" icon={ isPlaying ? faPause : faPlay} />
        
        <FontAwesomeIcon className="skipforward" size="2x" icon={faAngleRight } onClick={skipForwardHandler}/> 
             </div>
             <audio 
             onTimeUpdate={timeUpdateHandler}
             ref={audioRef} 
             onEnded={autoPlayHandler}
             src={playingNow.audio}></audio>
        </div>
  );
};

export default Player;