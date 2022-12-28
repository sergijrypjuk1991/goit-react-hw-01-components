import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendsList } from './friends/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friends/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};