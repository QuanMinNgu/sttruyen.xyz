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
                    <div className='col c-8 m-8 l-8'>
                        <HomePart8 />
                    </div>
                    <div className='col c-4 m-4 l-4'>
                        <HomePart4 />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home