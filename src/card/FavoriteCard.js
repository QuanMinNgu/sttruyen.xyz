import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';

const FavoriteCard = ({item}) => {

    const handleDeleteFavorite = () => {
        var carts = JSON.parse(localStorage.getItem('favorite'));
        carts = carts.filter(infor => infor.id.toString() !== item.id.toString());
        localStorage.removeItem('favorite');
        localStorage.setItem('favorite',JSON.stringify(carts));
        toast.success('Vui lòng tải lại trang để thấy sự thay đổi.');
    }

  return (
    <div className='favoriteCard_container'>
        <Link to={`/${item?.slug}`} className='favoriteCard_link-container'>
            <img className='favoriteCard_image' src={item?.image} />
            <div className='favoriteCard_detail'>
                <div className='favoriteCard_title'>
                    <span>{item?.title}</span>
                </div>
                <div className='favoriteCard_chapter'>
                    <i>Chương {item?.chapter}</i>
                </div>
            </div>
        </Link>
        <div onClick={handleDeleteFavorite} className='favoriteCard_times'>
            <i className="fa-solid fa-xmark"></i>
        </div>
    </div>
  )
}

export default FavoriteCard