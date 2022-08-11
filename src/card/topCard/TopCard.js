import React from 'react'
import { Link } from 'react-router-dom';
import '~/card/style.css';

const TopCard = ({item}) => {

    const rate =(item?.rating / (item?.reviewer * 5)) || 0;

    const clipPath = {
        clipPath:`inset(0 ${100 - rate * 100}% 0 0)`
      }
  return (
    <Link className='topCard_link' to={`/${item?.slug}`}>
        <div className='topCard_wrapp'>
            <div className='topCard_detail'>
                <h1 className='topCard_title'>
                    {item?.title}
                </h1>
                <div className='topCard_read_like'>
                    <div className='topCard_read'>
                        {item?.watching} <i className="fa-solid fa-eye"></i>
                    </div>
                    <div className='topCard_like'>
                        {item?.like} <i style={{color:"red"}} className="fa-solid fa-heart"></i>
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
                <img className='topCard_img' src={item?.image1} />
                <div className='topCard_linear'></div>
            </div>
        </div>
    </Link>
  )
}

export default TopCard