import React from 'react';
import '~/homePage/style.css';
import 'swiper/css';
import HomePart8 from './HomePart8';
import HomePart4 from './HomePart4';
const Home = () => {
  return (
    <div className='home-wrapper'>
        <div className='grid wide'>
            <div className='home-container'>
                <div className='row'>
                    <HomePart8 />
                    <HomePart4 />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home