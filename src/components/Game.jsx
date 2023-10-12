import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm.jsx';
import { withRouter } from 'react-router-dom';

const superheroNames = [
  "Batman",
  "Captain America",
  "Cyclops",
  "Hulk",
  "Flash",
  "Hawkeye",
  "Ironman",
  "Spiderman",
  "Superman",
  "Thor",
  "Wolverine"
];

const Game = () => {
  
  const [superheroData, setSuperheroData] = useState({
    name: '',
    color: ''
  });

  const [UniqueID, setUniqueID] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    if (id) {
      setUniqueID(id);
    }
  }, []);

  const handleClick = () => {
    console.log("Button was clicked");
    const randomIndex = Math.floor(Math.random() * superheroNames.length);
    const selectedSuperhero = superheroNames[randomIndex];
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    setSuperheroData({
      name: selectedSuperhero,
      color: randomColor
    });
  };
  
  console.log("UniqueID in Game component:", UniqueID);
  // Add this line to check the value of UniqueID

  return (
    <div className="wrapper">
      <h2>Selected Superhero:</h2>
      {superheroData.name ? (
        <div className="superhero-name" style={{ color: superheroData.color }}>{superheroData.name}</div>
      ) : (
        <div className="placeholder-text">Press the button!</div>
      )}
      <hr />
      <button onClick={handleClick}>
        Click to Generate Random Superhero
      </button>
      <hr />
      <EmailForm UniqueID={UniqueID} superheroName={superheroData.name} textColor={superheroData.color} />
    </div>
  );
};

export default Game;

