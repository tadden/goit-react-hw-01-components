import './App.css';
import user from './data/user.json'
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </Container>
  );
}

export default App;
