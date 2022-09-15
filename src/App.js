// import { useState } from 'react';
import Header from './components/Header'
import PodcastProvider from './components/PodcastProvider';
function App() {
  const title = 'PodListen'
  return (
    <div className='App'>
      <Header title={title}/>
      <PodcastProvider/>
    </div>
  )
}

export default App;
