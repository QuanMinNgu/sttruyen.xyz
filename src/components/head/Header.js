import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import CreateKinds from '~/admin/CreateKinds';
import CreateMovie from '~/admin/Movies/CreateMovie';
import FavoriteCard from '~/card/FavoriteCard';
import '~/components/style/style.css'
import { isLogout } from '~/redux/slice/auth';
const Header = () => {

    //declare variable
    const [search,setSearch] = useState('');
    const [favor,setFavor] = useState('');
    const [createProduct,setCreateProduct] = useState(false);
    const [createKind,setCreateKind] = useState(false);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //declare function 
    const handleLogout = () => {
        dispatch(isLogout());
        toast.success('Đăng xuất thành công.');
    }


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
                                    <i className="fa-solid fa-magnifying-glass"></i>
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
                        {auth.user ? 
                        <div className='auth-user-container'>
                            <div className='auth-user-detail'>
                                Admin
                                <ul className='auth-user-list-rule'>
                                    <li onClick={() => {
                                        setCreateProduct(true);
                                    }} className='auth-user-list-item'>
                                        Tạo Truyện
                                    </li>
                                    <li 
                                    onClick={() => {
                                        setCreateKind(true);
                                    }}
                                    className='auth-user-list-item'>
                                        Tạo Thể Loại
                                    </li>
                                    <li onClick={handleLogout} className='auth-user-list-item'>
                                        Đăng Xuất
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='favorite-wrapper'>
                            <div className='favorite-wrapper-container'>
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
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
        {createProduct && <CreateMovie setCreateProduct={setCreateProduct}/>}
        {createKind && <CreateKinds setCreateKind={setCreateKind}/>}
    </div>
  )
}

export default Header