import './App.css';
import user from './data/user.json'
import statData from './data/statistical-data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

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
      <Statistics
        title="Upload stats"
        stats={statData}
      />
      <FriendList
        friends={friends} />
      <TransactionHistory
        items={transactions}
      />
    </Container>
    

  );
}

export default App;
