import React, { useState } from 'react';
import CreateSelectSong from './createSelectSong'; // Import SelectSong component
import CreateSearchResults from './createSearchResults'; // Import SearchResults component

const CreatePost = () => {
  const [currentScreen, setCurrentScreen] = useState('selectSong'); // State to manage current screen
  const [selectedSong, setSelectedSong] = useState(null); // State to store selected song
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query

  const handleSongSelection = (song) => {
    setSelectedSong(song);
    setCurrentScreen('searchResults'); // Change screen to search results
  };

  const handleBack = () => {
    setCurrentScreen('selectSong'); // Change back to select song screen
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query); // Update search query state
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
            onSearchQueryChange={handleSearchQueryChange} // Pass down function for editing
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