import React,{useState, useEffect} from 'react';
import {Route, Router} from 'react-router-dom';
import axios from  'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    axios.get("/articles")
    .then(res => setPosts(res.data))
    .catch(error => console.log(error))
  });
  return (
    <div className="App">
       <Header />
       <Navbar />
  <Route exact path='/' render={() => <Articles posts={posts} /> } />
  <Route path='/add-article' component={AddArticle} /> 
       <Footer />
    </div>
  );
}

export default App;
