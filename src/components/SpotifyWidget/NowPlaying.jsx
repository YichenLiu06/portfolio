import React, { useEffect, useState } from 'react';
import {AiOutlinePauseCircle} from 'react-icons/ai';
import {BiErrorCircle} from 'react-icons/bi'
import {HiOutlineStatusOffline} from 'react-icons/hi'
import { getNowPlaying } from './spotify.js';

//Setting up the Spotify API and Endpoints


//Main function to process the data and render the widget
const NowPlaying = () => {

  //Hold information about the currently playing song
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data)
    };

    //The spotify API does not support web sockets, so inorder to keep updating the currently playing song and time elapsed - we call the API every second
    setInterval(() => {
      fetchNowPlaying();
    }, 1000);

  }, []);

  //Setting default values for the listener's current state and the duration of the song played
  let playerState = ''
  let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
  let albumImageUrl = './images/albumCover.png'
  let title = ''
  let artist = ''

  if (nowPlaying != null && nowPlaying.title) {

    //Used while displaing a sounbar/pause icon on the widget
    nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE'

    //Converting the playback duration from seconds to minutes and seconds
    secondsPlayed = Math.floor(nowPlaying.timePlayed/1000);
    minutesPlayed = Math.floor(secondsPlayed/60);
    secondsPlayed = secondsPlayed % 60;

    //Converting the song duration from seconds to minutes and seconds
    secondsTotal = Math.floor(nowPlaying.timeTotal/1000);
    minutesTotal = Math.floor(secondsTotal/60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl
    title = nowPlaying.title
    artist = nowPlaying.artist
  } else if (nowPlaying === 'Currently Not Playing') { //If the response returns this error message then we print the following text in the widget
    playerState = 'OFFLINE' 
    title = 'User is'
    artist = 'currently Offline'
  } else { //If the response wasn't able to fetch anything then we display this
    title = 'Failed to'
    artist = 'fetch song'
  }

  //Used to set 0 as padding when the it is a single digit number
  const pad = (n) =>{
    return (n < 10) ? ("0" + n) : n;
  }

  return (
    //Depending on the value of playerState, the href, album image and icons are updated
    <a style={{textDecoration: 'none', color: 'black'}} href={playerState === 'PLAY' || playerState === 'PAUSE' ? nowPlaying.songUrl : ''}>
    <div className='nowPlayingCard'>
      {/* Albumn image and href displayed based on playerState */}
      <div className='nowPlayingImage'>
        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.songUrl}><img src={albumImageUrl} alt="Album" /></a> : <img src={albumImageUrl} alt="Album" />}
      </div>
      <div id='nowPlayingDetails'>
        {/* Song Title displayed based on playerState */}
        <div className={`nowPlayingTitle ${title.length > 15 ? 'marquee-content' : ' '}`}>
          {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.songUrl}>{title}</a> : title}
        </div>
        {/* Artist displayed based on playerState */}
        <div className='nowPlayingArtist'>
        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.artistUrl}>{artist}</a> : artist}
        </div>
        {/* Song Timer displayed based on playerState */}
        <div className='nowPlayingTime'>{pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:{pad(secondsTotal)}</div>
      </div>
      {/* Icon displayed based on playerState */}
      <div className='nowPlayingState'>
      {playerState === 'PLAY' ? <img alt='soundbar' src='./images/soundbar.gif' title='Now Listening'/> : playerState === 'PAUSE' ? <AiOutlinePauseCircle size={40} /> : playerState === 'OFFLINE' ? <HiOutlineStatusOffline size={40}/> : <BiErrorCircle size={40}/> }</div>
    </div>
    </a>
  );
};

export default NowPlaying;