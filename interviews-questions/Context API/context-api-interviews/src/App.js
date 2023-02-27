// createContext import kiya 
import { createContext } from 'react';
import './App.css';
import ChildA from './components/ChildA';


// In Context API
// how to use it = ?
// create , provider , useContext
// provider => data provide in our components 
//useContext  => component me "global store" se value nikalna with useContext.


const data = createContext()
const data1 = createContext()


function App() {

  const name = "shashikant yadav"
  const vill = "bihar"
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={vill}>
          <ChildA />
        </data1.Provider>
      </data.Provider>

    </>
  );
}

export default App;
export {data,data1}
