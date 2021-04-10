import React, { useState, useEffect,useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay,faPause, faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";




const Player = ({ isPlaying, setIsPlaying, playingNow }) => {
  const audioRef = useRef(null);
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


  return (
    <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.durationTime} value={songInfo.currentTime} onChange={dragLineHandler}
                type="range"/>
                <p>{getTime(songInfo.durationTime)}</p>
            </div>
            <div className="song-name">Song Name</div>
            <div className="play-control">
                <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft } /> 
        <FontAwesomeIcon onClick={playHandler}  className="skinback" size="2x" icon={ isPlaying ? faPause : faPlay} />
        
        <FontAwesomeIcon className="skinforward" size="2x" icon={faAngleRight } /> 
             </div>
             <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={playingNow.audio}></audio>
        </div>
  );
};

export default Player;