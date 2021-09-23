import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import user from './components/profile/user';
import statisticalData from './components/statistics/statistical-data';
import friendsData from './components/friend-list/friends';
import transactionData from './components/transaction-history/transactions';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics stats={statisticalData} title="Upload stats" /> */}
      <Statistics stats={statisticalData} />
      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionData} />
    </div>
  );
}

export default App;
