import React from 'react'
import { Link } from 'react-router-dom'
import '~/components/style/style.css'
const Header = () => {
  return (
    <div className='head-wrapper'>
        <div className='grid wide'>
            <div className='head-container'>
                <div className='row'>
                    <div className='col c-12 l-3 m-3'>
                        <div className='brand-wrapper'>
                            <Link className='brand-link-wrapper' to='/'>
                                <img className='brand-image' src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1659601530/Avatar/h0x0yor9vsryg9vb6to4.jpg' />
                                <p>Sttruyen.xyz</p>
                            </Link>
                        </div>
                    </div>
                    <div className='col c-8 l-6 m-6'>
                        <div className='search-wrapper'>
                            <div className='search-container'>
                                <input className='search-bar' type='text' placeholder='Tìm Kiếm' />
                                <div className='search-icon'>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col c-4 l-3 m-3'>
                        <div className='favorite-wrapper'>
                            <p>
                                <i style={{marginRight:"0.3rem"}} class="fa-solid fa-star-and-crescent"></i>
                                Truyện Yêu Thích
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header