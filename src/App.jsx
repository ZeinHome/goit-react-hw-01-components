import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import  TransactionHistory  from "./components/TransactionHistory/TransactionHistory";
import { Wrapper } from 'App.styled';
import  user from "./data/user.json";
import  data from "./data/data.json";
import  friends from "./data/friends.json";
import  transactions from "./data/transactions.json";
 const App = () => {
  return (

    <Wrapper>
      <Profile  username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends= {friends}/>
      <TransactionHistory  items = {transactions}/>
  </Wrapper>

  )
};
export default App;