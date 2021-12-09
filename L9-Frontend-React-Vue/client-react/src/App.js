import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App.css';
import Posts from './components/Posts';
import CreatePost from "./components/CreatePost";
import IndividualPost from "./components/IndividualPost";
import EditPost from "./components/EditPost";



function App() {
  return (
    <Router basename = "posts">
      <div className="App">
        <header id = "header">
          <h1>Posts</h1>
          <nav>
            <Link className = "create" to = "/">All Posts 📃</Link>
            <Link className = "create" to = "/create">Add New ✏️</Link>
          </nav>
        </header>
        
        <Routes>
          <Route path = "/" element = {<Posts />}/>
          <Route path = "/create" element = {<CreatePost />}/>
          <Route path = "/:id" element = {<IndividualPost />} />
          <Route path = "/:id/edit" element = {<EditPost />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

// react-router-dom v5 Switch has been changed to Routes in v6
// <Route path = "" element = "<.../>" />
