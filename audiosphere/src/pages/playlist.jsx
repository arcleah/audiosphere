import React, { useState } from 'react';
import PlaylistLibrary from './playlistLibrary';
import PlaylistNewPlaylist from './playlistNewPlaylist';
import PlaylistSearchSong from './playlistSearchSong';
import PlaylistSearchResults from './playlistSearchResults';
import ExistingPlaylistPage from './playlistExistingPlaylist';


const RemoveSongPopup = ({ onConfirm, onCancel, songTitle, artistName }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="absolute left-[875px] top-[355px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg p-6 w-[400px] min-h-[175px] max-h-[250px] focus:outline-none flex flex-col items-center justify-between">
      <h3 className="text-[#2F2C50] font-bold text-xl mb-2">Remove song?</h3>
      <p className="text-center mb-4 overflow-y-auto max-h-[100px]">
        Are you sure you want to remove "{songTitle}" by {artistName} from your playlist?
      </p>
      <div className="flex justify-center space-x-16">
        <button 
          onClick={onConfirm} 
          className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
        >
          Remove
        </button>
        <button 
          onClick={onCancel} 
          className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
        >
          Keep
        </button>
      </div>
    </div>
  </div>
);

const Popup = ({ onConfirm, onCancel, songTitle, artistName }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="absolute left-[875px] top-[355px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg p-6 w-[400px] min-h-[175px] max-h-[250px] focus:outline-none flex flex-col items-center justify-between">
      <h3 className="text-[#2F2C50] font-bold text-xl mb-2">Add song again?</h3>
      <p className="text-center mb-4 overflow-y-auto max-h-[100px]">
        "{songTitle}" by {artistName} is already in your playlist.
      </p>
      <div className="flex justify-center space-x-16">
        <button 
          onClick={onCancel} 
          className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
        >
          Cancel
        </button>
        <button 
          onClick={onConfirm} 
          className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
        >
          Add Again
        </button>
      </div>
    </div>
  </div>
);

const DiscardPlaylistPopup = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="absolute top-[380px] left-[900px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg p-4 w-[375px] h-[150px] focus:outline-none flex flex-col items-center">
      <h3 className="text-[#2F2C50] font-bold">Discard playlist?</h3>
      <p className="text-center mt-2">If you leave, your edits will not be saved.</p>
      <div className="flex justify-center mt-4 space-x-16">
        <button 
          onClick={onConfirm} 
          className="border border-[#2F2C50] text-[#2F2C50] px-3 py-1 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
        >
          Discard
        </button>
        <button 
          onClick={onCancel} 
          className="border border-[#2F2C50] text-[#2F2C50] px-3 py-1 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
        >
          Keep Editing
        </button>
      </div>
    </div>
  </div>
);

const RemovePlaylistPopup = ({ onConfirm, onCancel, playlistName }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="absolute top-[380px] left-[900px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg p-4 w-[400px] h-[175px] focus:outline-none flex flex-col items-center">
      <h3 className="text-[#2F2C50] font-bold">Remove playlist?</h3>
      <p className="text-center mt-2">Are you sure you want to remove "{playlistName}" from your library?</p>
      <div className="flex justify-center mt-4 space-x-16">
        <button 
            onClick={onConfirm} 
            className="border border-[#2F2C50] text-[#2F2C50] px-3 py-1 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
          >
          Remove
        </button>
        <button 
          onClick={onCancel} 
          className="border border-[#2F2C50] text-[#2F2C50] px-3 py-1 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
        >
          Keep
        </button>
      </div>
    </div>
  </div>
);

const EmptyPlaylistPopup = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="absolute left-[875px] top-[355px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg p-6 w-[400px] min-h-[175px] max-h-[250px] focus:outline-none flex flex-col items-center justify-between">
      <h3 className="text-[#2F2C50] font-bold text-xl mb-2">Empty Playlist</h3>
      <p className="text-center mb-4">
        Your playlist is empty. Please add a song and try again.
      </p>
      <button 
        onClick={onClose} 
        className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
      >
        OK
      </button>
    </div>
  </div>
);

function PlaylistPage() {
  const [currentScreen, setCurrentScreen] = useState('playlistLibrary');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedSongs, setAddedSongs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [songToAdd, setSongToAdd] = useState(null);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [songToRemove, setSongToRemove] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [currentPlaylistName, setCurrentPlaylistName] = useState(''); // Updated to handle persistent playlist names
  const [showDiscardPopup, setShowDiscardPopup] = useState(false); // New state for discard popup
  const [showRemovePlaylistPopup, setShowRemovePlaylistPopup] = useState(false);
  const [playlistToRemove, setPlaylistToRemove] = useState(null);
  const [showEmptyPlaylistPopup, setShowEmptyPlaylistPopup] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);


  const handleSelectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
    setCurrentScreen('existingPlaylist'); // Change current screen to show existing playlist
  };

  const handleBackFromDetails = () => {
    setSelectedPlaylist(null);
    setCurrentScreen('playlistLibrary'); // Go back to the library
  };

  const handleCreatePlaylist = () => {
    setCurrentScreen('newPlaylist');
    if (!currentPlaylistName) {
      setCurrentPlaylistName(`Playlist #${playlists.length + 1}`); // Set default name if none exists
    }
  };
  
  const handleSavePlaylist = () => {
    if (currentPlaylistName && addedSongs.length > 0) {
      const newPlaylist = {
        id: Date.now(),
        name: currentPlaylistName,
        songs: addedSongs
      };
      setPlaylists(prevPlaylists => [...prevPlaylists, newPlaylist]);
      setCurrentScreen('playlistLibrary');
      setCurrentPlaylistName('');
      setAddedSongs([]);
    } else if (addedSongs.length === 0) {
      setShowEmptyPlaylistPopup(true);
    }
  };

  const handleCloseEmptyPlaylistPopup = () => {
    setShowEmptyPlaylistPopup(false);
  };

  const handleRemovePlaylist = (playlist) => {
    setPlaylistToRemove(playlist);
    setShowRemovePlaylistPopup(true);
  };

  const confirmRemovePlaylist = () => {
    if (playlistToRemove) {
      setPlaylists(prevPlaylists => prevPlaylists.filter(playlist => playlist.id !== playlistToRemove.id));
      setShowRemovePlaylistPopup(false);
      setPlaylistToRemove(null);
    }
  };

  const cancelRemovePlaylist = () => {
    setShowRemovePlaylistPopup(false);
    setPlaylistToRemove(null);
  };


  const handleBack = () => {
    if (currentScreen !== 'playlistLibrary') {
      setShowDiscardPopup(true);
    }
  };

  const confirmDiscard = (discard) => {
    if (discard) {
      setCurrentScreen('playlistLibrary');
      setAddedSongs([]);
      setCurrentPlaylistName('');
    }
    setShowDiscardPopup(false);
  };

  const handleAddSong = () => {
    setCurrentScreen('searchSong');
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const addSongToPlaylist = (song) => {
    if (addedSongs.some(addedSong => addedSong.id === song.id)) {
      setShowPopup(true);
      setSongToAdd(song);
    } else {
      const newSong = { ...song, instanceId: Date.now() };
      setAddedSongs(prevSongs => [...prevSongs, newSong]);
      setCurrentScreen('newPlaylist');
    }
  };

  const handleConfirmAdd = () => {
    if (songToAdd) {
      const newSong = { ...songToAdd, instanceId: Date.now() };
      setAddedSongs(prevSongs => [...prevSongs, newSong]);
      setShowPopup(false);
      setSongToAdd(null);
      setCurrentScreen('newPlaylist');
    }
  };

  const handleCancelAdd = () => {
    setShowPopup(false);
    setSongToAdd(null);
  };

  const removeSongFromPlaylist = (songInstanceToRemove) => {
    setSongToRemove(songInstanceToRemove);
    setShowRemovePopup(true);
  };
  
  const handleConfirmRemove = () => {
    if (songToRemove) {
      setAddedSongs(prevSongs => prevSongs.filter(song => song.instanceId !== songToRemove.instanceId));
      setShowRemovePopup(false);
      setSongToRemove(null);
    }
  };
  
  const handleCancelRemove = () => {
    setShowRemovePopup(false);
    setSongToRemove(null);
  };

  const handleRemoveSongFromExisting = (songToRemove) => {
    setSelectedPlaylist(prevPlaylist => ({
      ...prevPlaylist,
      songs: prevPlaylist.songs.filter(song => song.instanceId !== songToRemove.instanceId)
    }));
  };

  const handleUpdatePlaylistName = (newName) => {
    setPlaylists(prevPlaylists =>
      prevPlaylists.map(playlist =>
        playlist.id === selectedPlaylist.id ? { ...playlist, name: newName } : playlist
      )
    );
  };
  

  return (
    <div>
      {currentScreen === 'playlistLibrary' && (
        <PlaylistLibrary 
          onCreatePlaylist={handleCreatePlaylist} 
          playlists={playlists} 
          onRemovePlaylist={handleRemovePlaylist}
          onSelectPlaylist={handleSelectPlaylist} // Pass the new handler

        />
      )}
      {currentScreen === 'newPlaylist' && (
        <PlaylistNewPlaylist 
          onBack={handleBack} 
          addedSongs={addedSongs}
          onAddSong={handleAddSong}
          onRemoveSong={removeSongFromPlaylist}
          currentPlaylistName={currentPlaylistName} // Pass current playlist name
          setCurrentPlaylistName={setCurrentPlaylistName} // Pass function to update playlist name
          onSavePlaylist={handleSavePlaylist} // Pass the save function
        />
      )}
      {currentScreen === 'searchSong' && (
        <PlaylistSearchSong 
          onBack={handleBack}
          onAddSong={handleAddSong} 
          onSearchQueryChange={handleSearchQueryChange} 
          setCurrentScreen={setCurrentScreen}
          currentPlaylistName={currentPlaylistName} // Pass current playlist name
          setCurrentPlaylistName={setCurrentPlaylistName} // Pass function to update playlist name
          onSavePlaylist={handleSavePlaylist} // Pass the save function

        />
      )}
      {currentScreen === 'searchResults' && (
        <PlaylistSearchResults 
          onBack={handleBack}
          searchQuery={searchQuery}
          onAddSong={handleAddSong}
          setSearchQuery={setSearchQuery}
          setCurrentScreen={setCurrentScreen}
          addSongToPlaylist={addSongToPlaylist}
          currentPlaylistName={currentPlaylistName} // Pass current playlist name
          setCurrentPlaylistName={setCurrentPlaylistName} // Pass function to update playlist name
          onSavePlaylist={handleSavePlaylist} // Pass the save function

        />
      )}
      {currentScreen === 'existingPlaylist' && selectedPlaylist && (
        <ExistingPlaylistPage 
          playlist={selectedPlaylist}
          onBack={handleBackFromDetails}
          onRemoveSong={handleRemoveSongFromExisting} // If you want to implement song removal here
          setCurrentPlaylistName={handleUpdatePlaylistName} // Pass this function to update the name
          
        />
      )}

      {showPopup && (
        <Popup 
          onConfirm={handleConfirmAdd} 
          onCancel={handleCancelAdd} 
          songTitle={songToAdd?.title}
          artistName={songToAdd?.artist} // Assuming songToAdd has an artist property
        />
      )}
      {showRemovePopup && (
        <RemoveSongPopup 
          onConfirm={handleConfirmRemove} 
          onCancel={handleCancelRemove}
          songTitle={songToRemove?.title}
          artistName={songToRemove?.artist} // Assuming songToRemove has an artist property
        />
      )}
      {showDiscardPopup && (
        <DiscardPlaylistPopup 
          onConfirm={() => confirmDiscard(true)} 
          onCancel={() => confirmDiscard(false)}
        />
      )}
      {showRemovePlaylistPopup && (
        <RemovePlaylistPopup 
          onConfirm={confirmRemovePlaylist}
          onCancel={cancelRemovePlaylist}
          playlistName={playlistToRemove?.name}
        />
      )}
      {showEmptyPlaylistPopup && (
        <EmptyPlaylistPopup onClose={handleCloseEmptyPlaylistPopup} />
      )}
    </div>
  );
}

export default PlaylistPage;
