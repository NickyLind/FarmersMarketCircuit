import React from 'react'
import Header from "./Header";
import MarketControl from "./MarketControl"
import './../styles/App.css';


function App() {
  return (
    <React.Fragment>
      <div class="box">
        <Header />
        <MarketControl />
      </div>
    </React.Fragment>
  );
}

export default App;