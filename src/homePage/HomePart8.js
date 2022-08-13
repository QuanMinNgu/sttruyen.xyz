import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '~/homePage/style.css';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '~/card/Card';
import { useDispatch } from 'react-redux';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import axios from 'axios';
const HomePart8 = ({products,cache}) => {

    const [kinds,setKinds] = useState([]);
    const [product,setProduct] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        setProduct(products);
    },[products]);

    useEffect(() => {
        if(cache.current['/kind']){
            return setKinds(cache.current['/kind']);
        }
        let here = true;
        dispatch(isLoading());
        axios.get('/kind')
            .then(res => {
                if(!here){
                    dispatch(isSuccess());
                    return;
                }
                dispatch(isSuccess());
                setKinds(res.data.kind);
                cache.current['/kind'] = res.data.kind;
            })
            .catch(() => {
                dispatch(isFailing());
            })
        return () => {
            here = false;
        }
    },[]);
  return (
    <div className='homePart8_container'>
        <div className='narvar_container'>
            <p className='navbar_home-icon'>
                <Link className='home_icon' to='/'>
                    Home    
                </Link>
            </p>
            <div className='kinds_container'>
                Thể Loại
                <ul className='kinds_wrapp'>
                    {kinds?.map(item =>
                    <li key={item?._id + 'kindsHomePage8'}>
                        <Link className='kinds_item' to={`/tim-truyen?kind=${item?.slug}`}>{item?.name}</Link>
                    </li>
                    )}
                </ul>
            </div>
            <div className='kinds_container_sort'>
                Sắp Xếp
                <ul className='kinds_sort_wrapp'>
                    <li>
                        <Link className='kinds_item' to='/tim-truyen'>Mới Nhất</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/tim-truyen?sort=-createdAt'>Cũ Nhất</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/tim-truyen?sort=watching'>Nhiều Lượt Xem</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/tim-truyen?sort=-watching'>Ít Lượt Xem</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='line'></div>
        <div className='narvar_card'>
            <div className='row'>
                {/* Pc view */}
                <div className='c-0 m-12 l-12'>
                    <Swiper
                        modules={[Navigation, Pagination,Autoplay]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                        >
                        {product?.map(item =>
                        <SwiperSlide key={item?._id + "productImageCard"}>
                            <Link to={`/${item?.slug}`}>
                                <img className='slide_image' src={item?.image1} />
                            </Link>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
                {/* mobile view */}
                <div className='c-12 m-0 l-0'>
                    <Swiper
                        modules={[Navigation, Pagination,Autoplay]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                        >
                        {product?.map(item =>
                        <SwiperSlide key={item?._id + "productImage"}>
                            <Link to={`/${item?.slug}`}>
                                <img className='slide_image' src={item?.image1} />
                            </Link>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
        <div className='new-comic-narbar'>
            <p className='new_comic-detail'>Truyện Mới</p>
        </div>
        <div className='card_container'>
            <div className='row'>
                {product?.map(item =>
                <div key={item?._id + 'card_home'} className='col c-12 m-12 l-12'>
                    <Card item={item}/>
                </div>)}
            </div>
            <div className='watching_more-detail'>
                <Link className='watching_more-detail-link' to='/tim-truyen'>
                    Xem Tất Cả
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomePart8