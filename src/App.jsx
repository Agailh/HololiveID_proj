// eslint-disable-next-line no-unused-vars
import { useState } from 'react'


import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Talents from './Components/Talents'
import Events from './Components/Events'
import About from './Components/About'
import VideoList from './Components/VideoList'


function App() {
  
  // const apiKey = 'AIzaSyCP85AhrvlXuQcfhSjauwueVFs5LnKXpUo';
  // const channelId = 'UCTvHWSfBZgtxE4sILOaurIQ';

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Talents />
      <Events/>
      <VideoList  />
    
      
    </>
  )
}

export default App
