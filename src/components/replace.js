import React, { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay,faPause, faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";


const useAudio = (url,songInfo,setSongInfo) => {
  console.log(url);
  const [audio] = useState(new Audio(url));
  
  console.log(audio);
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  const dragTimeLine = (e) => {
    audio.currentTime = e.target.value;
    setSongInfo({...songInfo,currentTime:e.target.value});
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const current = audio.currentTime;
    const duration = audio.duration;
    // console.log(current,duration);
    setSongInfo({...songInfo,currentTime:current, durationTime:duration});
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);
  
  useEffect(() => {
  
      playing ? audio.play() : audio.pause();
      
    },
    [playing]
  );

  useEffect(() => {
    
    
    audio.addEventListener('ended', () => setPlaying(false));
    
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, dragTimeLine];
};
const getTime = (time) => {
  return(
    Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  )
}

const Player = ({ playingNow }) => {
  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    durationTime:0,
  }); 
  console.log(playingNow," from Player");
  const [playing, toggle, dragTimeLine] = useAudio(playingNow.audio,songInfo,setSongInfo);
 
  return (
    <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.durationTime} value={songInfo.currentTime} 
                onChange={dragTimeLine}
                type="range"/>
                <p>{getTime(songInfo.durationTime)}</p>
            </div>
            <div className="song-name">Song Name</div>
            <div className="play-control">
                <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft } /> 
        <FontAwesomeIcon onClick={toggle} className="skinback" size="2x" icon={ playing ? faPause : faPlay} />
        
        <FontAwesomeIcon className="skinforward" size="2x" icon={faAngleRight } /> 
             </div>
        </div>
  );
};

export default Player;