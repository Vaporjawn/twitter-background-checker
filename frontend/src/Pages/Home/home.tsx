import React from 'react';
import Footer from '../../Components/Footer/footer';
import UserInput from '../../Components/UserInput/userInput';
import './home.css';
import Logo from '../../Assets/logo.png'

const Home = () => {
  console.log(Logo);
  return (
    <div className="HomeBackground">
        <img className='HomePageLogo' alt='logo' src={Logo}/>
        <UserInput/>
        <Footer/>
    </div>
  );
}

export default Home;
