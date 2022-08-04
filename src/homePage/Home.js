import React from 'react'
import { Link } from 'react-router-dom';
import '~/homePage/style.css';
const Home = () => {
  return (
    <div className='home-wrapper'>
        <div className='grid wide'>
            <div className='home-container'>
                <div className='row'>
                    <div className='col c-8 m-8 l-8'>
                        <div className='narvar_container'>
                            <p>
                                <Link className='home_icon' to='/'>
                                    Home    
                                </Link>
                            </p>
                            <p>Thể Loại</p>
                            <p>Sắp Xếp</p>
                        </div>
                    </div>
                    <div className='col c-4 m-4 l-4'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home