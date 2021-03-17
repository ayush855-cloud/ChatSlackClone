import React,{useState} from 'react';
import './App.css';
// import File from './file';
import Login from './Login';
import Chat from './Chat';
import Header from './Header';
import Sidebar from './Sidebar';
import {useStateValue} from './StateProvider';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';


function App() {
  const [num,setNum]=useState("");
  

  const [{user},dispatch] = useStateValue();
  return (
     <div className="App">
     <Router>
     {!user?(<Login />) 
      :
      <>
      <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
             <Chat/>
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
        </>}

        </Router> 
     </div> 

     
   
  );
}

export default App;
