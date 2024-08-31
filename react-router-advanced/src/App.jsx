
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog'
import Post from './components/Post'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
