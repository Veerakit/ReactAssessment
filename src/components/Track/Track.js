import './Track.css';
import React from 'react';

function Track({ track, onAdd, onRemove, isRemoval}) {
  
  const addTrack = () => {
    onAdd(track);
  };

  const removeTrack = () => {
    onRemove(track);
  };

  const renderAction = () => {
    if(isRemoval){
      return <button className="Track-action" onClick={removeTrack}>-</button>;
    }
    else{
      return <button className="Track-action" onClick={addTrack}>+</button>;
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.album} | {track.artist}</p>
      </div>
        {renderAction()}
    </div>
  );
}

export default Track;
