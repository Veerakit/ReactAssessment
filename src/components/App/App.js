import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../utils/Spotify';

function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  
  const [playlistName, setPlaylistName] = useState('My playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const addTrack = (track) => {
    let tracks = playlistTracks;
    if(tracks.find(addedTrack => addedTrack.id === track.id)) {
      return;
    }
    else{
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((addedTrack) => addedTrack.id !== track.id));
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    })
  }

  const search = (searchObj) => {
      Spotify.search(searchObj).then((searchResults) => {
        setSearchResults(searchResults);
      });
  }


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={search}/>
          <div className="App-playlist">
            <SearchResults searchResults={searchResults} addTrack={addTrack}/>
            <Playlist 
              playlistName = {playlistName} 
              playlistTracks = {playlistTracks}
              onNameChange = {updatePlaylistName}
              onRemove = {removeTrack}
              onSave = {savePlaylist}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
