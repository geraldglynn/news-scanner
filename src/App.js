import React, { useState } from 'react'
import './App.css'

import http from './api/http'

function App() {

  const [stories, setStories] = useState([])

  http('/stories').then(res => {
    if(res.error) {
      console.log(JSON.parse(res.error.text))
      return
    }
    setStories(res.stories)
  })

  return (
    <>
    <h1>News Scanner</h1>
    { stories?.length && stories.map( story => <>{story.title}</>) }
    </>
  )
}

export default App
