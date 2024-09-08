/*import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/create post'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'
function App() {
const [selectedTab , setSelectedTab]=useState("create Post");

  return (
    //In which we write it send as  a props
    <PostListProvider>    
    <div className="app-container">
       <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
     <div className="content">
     <Header></Header>
     {selectedTab=== "Home" ? (<PostList></PostList>):  (<CreatePost></CreatePost> ) }
   
    <Footer></Footer>
    
    </div>
    </div>
    </PostListProvider>
  );
}

export default App*/


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/Create Post';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>    
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <CreatePost />  : <PostList />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
