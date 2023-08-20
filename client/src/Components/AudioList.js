import React, { useEffect, useState } from "react";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import axios from 'axios';

function AudioList() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
  };
  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };
  

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span>{songs.length} songs</span>
      </h2>
      <div className="container">
        {songs.map((s, index) => (
          <div className="s1" key={index} onClick={() => handleSongClick(index)}>
            <h3>{s[0]}</h3>
            <img src={s[1]} style={{ width: '60px', height: '60px' }} alt="" />
          </div>
        ))}
      </div>
      <MusicPlayer
        song={songs[currentSongIndex] ? songs[currentSongIndex][2] : ''}
        imgSrc={songs[currentSongIndex] ? songs[currentSongIndex][1] : ''}
        auto={currentSongIndex !== null}
        onEnded={playNextSong}
      />
    </div>
  );
}

export { AudioList };
