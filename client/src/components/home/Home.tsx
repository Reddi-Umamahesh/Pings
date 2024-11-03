import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Secondary from './Secondary'
import Footer from '../Footer'

const Home:React.FC = () => {
  return (
    <div className=" overflow-y-auto flex-grow">
      <Navbar />
      <Hero />
      <Secondary />
      <Footer/>
    </div>
  );
}

export default Home