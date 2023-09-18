import { User } from 'components/User/User';
import { Statistics } from 'components/Statistics/Statistics';
import { Friend } from 'components/FriendList/FriendList';
import { Transaction } from 'components/TransactionHistory/TransactionHistory';

import users from './users';
import data from './data';
import friends from './friends';
import transactions from './transactions';

// import css from './App.module.css';

// const status = users.stats;

export const App = props => {
  return (
    <>
      <div>
        <User user={users} />
      </div>

      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div>
        <Friend friends={friends} />
      </div>

      <div>
        <Transaction transactions={transactions} />
      </div>
    </>
  );
};
