import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homepage";
import SearchPage from "./pages/search";
import CreatePage from "./pages/create";
import NotificationsPage from "./pages/notifications";
import ProfilePage from "./pages/profile";
import PlaylistPage from "./pages/playlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
