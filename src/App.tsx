import React from 'react';
import About from './components/about/about.component';
import Header from './components/header/header.component';
import Work from './components/work/work.components';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
