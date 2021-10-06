import Profile from '../Profile/Profile';
import user from '../../json/user.json';
import Statistics from '../Statistics/Statistics';
import statisticalData from '../../json/statistical-data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../json/friends.json';
import transactions from '../../json/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Container from '../Container/Container';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}

export default App;
