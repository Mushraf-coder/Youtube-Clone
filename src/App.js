import React from 'react'
import Navbar from './components/Navbar'
import Watch from './components/Watch'
import { createBrowserRouter } from 'react-router-dom'
// import WatchVideo from './components/WatchVideo'
// import MainPage from './components/MainPage'


function App() {
  return (
    <div >
      <Navbar/>
      {/* <WatchVideo/> */}
     
    </div>
  )
}
 
export const appRouter = createBrowserRouter ([
  {
    path: '/',
    element:<App/>
  },
  {
     path: '/watch',
     element: <Watch/>
  }
])



export default App