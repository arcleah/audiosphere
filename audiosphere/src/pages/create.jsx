import React, { useState } from 'react';
import CreateSelectSong from './createSelectSong'; // Import SelectSong component
import CreateSearchResults from './createSearchResults'; // Import SearchResults component
import CreateAddDescription from './createAddDescription'; // Import Add Description component

const CreatePost = () => {
  const [currentScreen, setCurrentScreen] = useState('selectSong'); // State to manage current screen
  const [selectedSong, setSelectedSong] = useState(null); // State to store selected song
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query

  const handleSongSelection = (song) => {
    setSelectedSong(song);
    setCurrentScreen('searchResults'); // Change screen to search results
  };

  const handleBack = () => {
    if (currentScreen === 'addDescription') {
      setCurrentScreen('searchResults'); // Go back to search results
    } else {
      setCurrentScreen('selectSong'); // Change back to select song screen
    }
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query); // Update search query state
  };

  const handleSelectSong = (song) => {
    if (song.artist === 'Justin Bieber') {
      setSelectedSong(song);
      setCurrentScreen('addDescription'); // Navigate to add description screen for Justin Bieber's song
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'selectSong':
        return (
          <CreateSelectSong 
            onSongSelect={handleSongSelection} 
            onSearchQueryChange={handleSearchQueryChange} 
          />
        );
      case 'searchResults':
        return (
          <CreateSearchResults 
            selectedSong={selectedSong} 
            searchQuery={searchQuery} 
            onBack={handleBack} 
            onSearchQueryChange={handleSearchQueryChange}
            onSelectSong={handleSelectSong} // Pass down function for selecting song
          />
        );
      case 'addDescription':
        return (
          <CreateAddDescription 
            selectedSong={selectedSong} 
            onBack={handleBack} 
          />
        );
      default:
        return <div>Unknown screen</div>;
    }
  };

  return (
    <div className="create-post-container">
      {renderScreen()} {/* Render the current screen based on state */}
    </div>
  );
};

export default CreatePost;