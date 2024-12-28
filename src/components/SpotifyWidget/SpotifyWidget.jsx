import { useEffect, useState } from "react";
import { getNowPlaying } from "./spotify";
import spotify from "../../assets/spotify.png"

function SpotifyWidget(){
  const [nowPlaying, setNowPlaying] = useState(null)
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data)
    };

    const refreshInterval = setInterval(() => {
      fetchNowPlaying();
    }, 1000);

    return () => clearInterval(refreshInterval)

  }, [])

  function renderWidget(){
    function pad(n){
      return ((n < 10) ? '0'+n : n);
    }

    if(nowPlaying != null && nowPlaying.title){
      let secondsPlayed = Math.floor(nowPlaying.timePlayed/1000)
      let minutesPlayed = Math.floor(secondsPlayed/60);
      secondsPlayed = secondsPlayed % 60;
      let percentagePlayed = (nowPlaying.timePlayed / nowPlaying.timeTotal) * 100
      return (
        <div className="border rounded-xl p-2 flex flex-row gap-4 items-center w-full">
          <img src={nowPlaying.albumImageUrl} alt = "Album" className="size-20 rounded-xl"/>
          <div className="flex flex-col w-full">
            <h3 className="font-semibold text-lg line-clamp-1">{nowPlaying.title}</h3>
            <p className= "font-semibold text-sm">{nowPlaying.artist}</p>
            <div className="h-2 flex flex-col bg-slate-950 rounded-full"> 
              <div style={{width:`${percentagePlayed}%`}} className='h-full bg-green-600 rounded-full'>

              </div>
            </div>
            <div>
              {`${minutesPlayed}:${pad(secondsPlayed)}`}
            </div>
          </div>
          <img src={spotify} className="size-10"/>
        </div>
      )
    }
    else {
      return (
        <div className="h-24 border rounded-xl p-4 text-2xl flex flex-row items-center justify-between w-full">
          Sorry! I'm not playing anything at the moment.
          <img src={spotify} className="size-10"/>
        </div>
      )
    }
  }

  return renderWidget();
}

export default SpotifyWidget