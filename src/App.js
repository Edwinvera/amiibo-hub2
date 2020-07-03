import React from 'react';
import { Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar'
import GetAmiibo from './Components/GetAmiibo'
import Explore from './Components/Explore'
import Movie from "./Components/Movie"
import Tunes from "./Components/Tunes"
import './App.css';

function App() {
  
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Bebas+Neue&display=swap');
      </style>
      <header>
        <h1 className= "heading">Amiibo Hub</h1>
        <nav className= "nav">
          <Link to="/">Home</Link>
          <Navbar />
          <Link to="/movie">Trailer</Link>
        </nav>
      </header>
    
      <main className= "main">
        <Route exact path="/">
          <GetAmiibo />
        </Route>
       
        <Route path= "/movie">
          <Movie />
        </Route>
      </main>

      <footer className= "footer">
        <Explore />
        <Tunes />
      </footer>
    </>
  );
}

export default App;

