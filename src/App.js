import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, comedy, documentaries, horror, originals, romatic, trending } from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romatic} title='Romance' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      
    </div>
  );
}

export default App;
