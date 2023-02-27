import './App.css';

// Provide : hmare application ko redux se jodne ka kam karta hai
// store: information k liye hme store import karna pda bcz store me hi "state" or "data" hai
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';




function App() {
  return (

    <Provider store={store}>
      <h1>My Application</h1>
    </Provider>
  );
}

export default App;
