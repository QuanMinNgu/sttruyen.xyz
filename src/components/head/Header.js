import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteCard from '~/card/FavoriteCard';
import '~/components/style/style.css'
const Header = () => {

    const [search,setSearch] = useState('');
    const [favor,setFavor] = useState('');


  return (
    <div className='head-wrapper'>
        <div className='grid wide'>
            <div className='head-container'>
                <div className='row'>
                    <div className='col c-12 l-3 m-3'>
                        <div className='brand-wrapper'>
                            <Link className='brand-link-wrapper' to='/'>
                                <img  className='brand-image' src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1659618849/Avatar/fvnriuqizgdtw4buecgb.png' />
                                <p>Sttruyen.xyz</p>
                            </Link>
                        </div>
                    </div>
                    <div className='col c-8 l-6 m-6'>
                        <div className='search-wrapper'>
                            <div className='search-container'>
                                <input onChange={(e) => setSearch(e.target.value)} className='search-bar' type='text' placeholder='Tìm Kiếm' />
                                <div className='search-icon'>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                {search &&
                                <div className='search_cardContainer'>
                                    <div className='searchCard_container'>
                                        <img src='http://res.cloudinary.com/sttruyen/image/upload/v1654401684/Sttruyen/o8wr9go1hnyozmlsgfgi.webp' />
                                        <div className='searchCard-information-container'>
                                            <div className='searchCard-information-title'>
                                                <span>Người anh trai</span>
                                            </div>
                                            <div className='searchCard-information-chapter'>
                                                <span>Chương 12</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='searchCard_container'>
                                        <img src='http://res.cloudinary.com/sttruyen/image/upload/v1654401684/Sttruyen/o8wr9go1hnyozmlsgfgi.webp' />
                                        <div className='searchCard-information-container'>
                                            <div className='searchCard-information-title'>
                                                <span>Người anh trai</span>
                                            </div>
                                            <div className='searchCard-information-chapter'>
                                                <span>Chương 12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col c-4 l-3 m-3'>
                        <div className='favorite-wrapper'>
                            <p>
                                <i style={{marginRight:"0.3rem"}} class="fa-solid fa-star-and-crescent"></i>
                                Truyện Yêu Thích
                                <div className='favorite-detail_container'>
                                    {favor ? 
                                    <div className='favorite-detail_container-having'>
                                        <FavoriteCard />
                                        <FavoriteCard />
                                        <FavoriteCard />
                                        <div className='favorite-detail_clearAll'>
                                            <span>Xóa Tất Cả</span>
                                        </div>
                                    </div>
                                    :
                                    <div className='favorite-detail_container-image'>
                                        <img className='favorite-detail_image' src='https://res.cloudinary.com/sttruyen/image/upload/v1654180246/Sttruyen/images_rawg9c.png' />
                                        <div className='favorite-detail_empty'>
                                            <span>Trống Rỗng</span>
                                        </div>
                                    </div>}
                                </div>
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