import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
import '../pages/home/home.css'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of the Fitness World</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga consectetur porro architecto quos quibusdam magni?</p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Img" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader