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
      <header>
        <h1>Amiibo Hub</h1>
        <nav>
          <Link to="/">Home</Link>
          <Navbar />
          <Link to="/movie">Trailer</Link>
        </nav>
      </header>
    
      <main>
        <Route exact path="/">
          <GetAmiibo />
        </Route>
       
        <Route path= "/movie">
          <Movie />
        </Route>
      </main>

      <footer>
        <Explore />
        <Tunes />
      </footer>
    </>
  );
}

export default App;

