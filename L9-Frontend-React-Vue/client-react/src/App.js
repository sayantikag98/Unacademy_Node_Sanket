import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Posts />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

// react-router-dom v5 Switch has been changed to Routes in v6
// <Route path = "" element = "<.../>" />
