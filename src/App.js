import React from 'react';
import './App.css'
import About from './components/About';
import Header from './components/Header';
import Services from './components/service';

function App() {
  
  return(
    <div>
      <Header />
      <About />
      <Services />
    </div>
  )
}

export default App;

// .container{
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   scroll-behavior: smooth;
//   overflow: auto;
//   scroll-snap-type: y mandatory;
// }

// section{
//   width: 100%;
//   height: 100vh;
//   background-size: cover;
//   scroll-snap-align: start;
  
// }

// section:nth-child(1){
//   background: url(/src/images/aa.png);
// }
// section:nth-child(2){
//   background: url(/src/images/ab.png);
// }