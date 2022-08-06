import React from 'react'
import '~/card/style.css';

const TopCard = () => {

    const clipPath = {
        clipPath:'inset(0 10% 0 0)'
      }
  return (
    <div className='topCard_wrapp'>
        <div className='topCard_detail'>
            <h1 className='topCard_title'>
                Brights
            </h1>
            <div className='topCard_read_like'>
                <div className='topCard_read'>
                    1000 <i className="fa-solid fa-eye"></i>
                </div>
                <div className='topCard_like'>
                    1000 <i style={{color:"red"}} className="fa-solid fa-heart"></i>
                </div>
            </div>
            <div className='categary-list-item-star'>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <div style={clipPath} className='categary-list-item-star-full'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        <div className='topCard_image'>
            <img className='topCard_img' src='https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg' />
            <div className='topCard_linear'></div>
        </div>
    </div>
  )
}

export default TopCard