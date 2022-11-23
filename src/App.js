import React from 'react';
import { Footer, Header, Blog, What, Features, Possibility } from './containers';
import { CTA, Brand, NavBar } from './components';
import './app.css'

const App = () => {
    
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar/>
        <Header/>
      </div>     
      <Brand/>
      <What/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
