import './App.css';
import user from './user.json'
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  )
}

export default App;
