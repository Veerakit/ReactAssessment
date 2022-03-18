import React from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/TrackList';

function SearchResults({ searchResults , addTrack }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={addTrack} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
