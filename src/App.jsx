import { Nav } from 'react-bootstrap'
import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Hero from './Components/Hero/Hero.jsx'
import ThreePictures from './Components/ThreePictures/ThreePictures.jsx';
import Marquee from './Components/Marquee/Marquee.jsx'

function App() {

return (
<div className='App'>
  <div className='header'>
    <NavigationBar />
    <Hero />
    <ThreePictures />
    <Marquee />

  </div>
  </div>


)
}

export default App
