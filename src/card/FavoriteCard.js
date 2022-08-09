import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const FavoriteCard = () => {
  return (
    <div className='favoriteCard_container'>
        <Link to='/asdasd' className='favoriteCard_link-container'>
            <img className='favoriteCard_image' src='https://pbs.twimg.com/profile_images/1384583564633808898/tgDNvwhc_400x400.jpg' />
            <div className='favoriteCard_detail'>
                <div className='favoriteCard_title'>
                    <span>Người Anh Trai khong hai</span>
                </div>
                <div className='favoriteCard_chapter'>
                    <i>Chương 12</i>
                </div>
            </div>
        </Link>
        <div className='favoriteCard_times'>
            <i className="fa-solid fa-xmark"></i>
        </div>
    </div>
  )
}

export default FavoriteCard