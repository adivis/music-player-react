import React from 'react'
const Lyrics= ({playingNow})=> {
    var str = playingNow.lyrics
    return (

        <div className="lyrics-container">
           < details>
  <summary className="slide">Lyrics</summary>
 

            <div className="lyrics" dangerouslySetInnerHTML={{ __html: str }} />
            </details>
        </div>
    )
}

export default Lyrics
