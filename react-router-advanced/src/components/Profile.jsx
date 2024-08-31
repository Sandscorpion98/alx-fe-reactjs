import ProfileSettings from './ProfileSettings'
import ProfileDetails from './ProfileDetails'
import { Link, Route, Routes  } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Profile;
