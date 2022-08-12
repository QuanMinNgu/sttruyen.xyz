import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import CreateKinds from '~/admin/CreateKinds';
import CreateMovie from '~/admin/Movies/CreateMovie';
import FavoriteCard from '~/card/FavoriteCard';
import '~/components/style/style.css'
import { isFailing, isLoading, isLogout, isSuccess } from '~/redux/slice/auth';
const Header = () => {

    //declare variable
    const [search,setSearch] = useState('');
    const [favor,setFavor] = useState([]);
    const [createProduct,setCreateProduct] = useState(false);
    const [createKind,setCreateKind] = useState(false);
    const [result,setResult] = useState([]);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchRef = useRef();


    //declare function 
    const handleLogout = () => {
        dispatch(isLogout());
        toast.success('Đăng xuất thành công.');
    }

    useEffect(() => {
        let here = true;
        if(search){
            const url = `/product?search=${search}`;
            axios.get(url)
                .then(res => {
                    if(!here){
                        return dispatch(isSuccess());
                    }
                    dispatch(isSuccess());
                    setResult(res.data.Products);
                })
                .catch(() => {
                    dispatch(isFailing());
                })
        }
        else{
            setResult([]);
        }
        return () => {
            here = false;
        }
    },[search]);

    const handleNavigate = (e) => {
        navigate(`/${e}`);
        searchRef.current.value = '';
        setResult([]);
    }

    useEffect(() => {
        const carts = JSON.parse(localStorage.getItem('favorite'));
        if(!carts){
            return setFavor([]);
        }
        setFavor(carts);
    },[]);

    const handleDeleteAllFavorite = () => {
        localStorage.removeItem('favorite');
        toast.success('Đã xóa toàn bộ truyện yêu thích.');
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
                                <input ref={searchRef} onChange={(e) => setSearch(e.target.value)} className='search-bar' type='text' placeholder='Tìm Kiếm' />
                                <div className='search-icon'>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                {result.length > 0 &&
                                result?.map(item =>
                                <div 
                                onClick={() => handleNavigate(item?.slug)}
                                key={item?._id + "result"} className='search_cardContainer'>
                                    <div className='searchCard_container'>
                                        <img src={item?.image1} />
                                        <div className='searchCard-information-container'>
                                            <div className='searchCard-information-title'>
                                                <span>{item?.title}</span>
                                            </div>
                                            <div className='searchCard-information-chapter'>
                                                <span>Chương {item?.chapter?.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
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
                                    {favor.length > 0 ? 
                                    <div className='favorite-detail_container-having'>
                                        {favor?.map(item =>
                                            <FavoriteCard item={item} key={item?.id + 'cardFavotie'}/>
                                        )}
                                        <div 
                                        onClick={handleDeleteAllFavorite}
                                        className='favorite-detail_clearAll'>
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