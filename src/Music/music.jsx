import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import ReactAudioPlayer from 'react-audio-player';

export default function MediaControlCard() {
  const theme = useTheme();
  const songs = [
    {
      name: "HOPE SONG",
      author: "xxxtention",
      song: "https://www.naijamusics.xyz/wp-content/uploads/2022/06/XXXTENTACION_-_Hope_NaijaMusic.Ng.mp3",
      image: "https://i.ytimg.com/vi/I2Zm9Fs0t0k/maxresdefault.jpg"
    },
    {
      name: "Look At Me!",
      author: "xxxtention",
      song: "https://naijamusics.xyz/wp-content/uploads/2023/05/Blaqbonez_and_Ludacris_-_Cinderella_Girl_Where_You_Dey__(NaijaMusic.Ng).mp3",
      image: "https://i1.sndcdn.com/artworks-AjVuAXfV4VvQFbWA-J1RgUA-t500x500.jpg"
    },
    {
      name: "SAD !",
      author: "xxxtention",
      song: "https://www.naijamusics.xyz/wp-content/uploads/2022/06/XXXTENTACION_-_SAD_NaijaMusic.Ng.mp3",
      image: "https://i1.sndcdn.com/artworks-AjVuAXfV4VvQFbWA-J1RgUA-t500x500.jpg"
    }
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (song) => {
    if (currentSong === song) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        {songs.map((song) => (
          <div className='col-4 mt-5' key={song.name}>
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {song.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {song.author}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                  </IconButton>
                  <IconButton
                    aria-label="play/pause"
                    onClick={() => handlePlayPause(song)}
                  >
                    {isPlaying && currentSong === song ? (
                      <PauseIcon sx={{ height: 38, width: 38 }} />
                    ) : (
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    )}
                  </IconButton>
                  <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={song.image}
                alt="Live from space album cover"
              />
            </Card>
            {isPlaying && currentSong === song && (
              <ReactAudioPlayer
                src={song.song}
                autoPlay
                controls
                style={{ marginTop: '10px' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
