import React from 'react'
import { Link } from 'react-router-dom';
import '~/homePage/style.css';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '~/card/Card';
const HomePart8 = () => {
  return (
    <div className='col c-8 m-8 l-8'>
        <div className='narvar_container'>
            <p>
                <Link className='home_icon' to='/'>
                    Home    
                </Link>
            </p>
            <p className='kinds_container'>
                Thể Loại
                <ul className='kinds_wrapp'>
                    <li>
                        <Link className='kinds_item' to='/'>Hoạt hình</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/'>Hoạt hình</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/'>Hoạt hình</Link>
                    </li>
                </ul>
            </p>
            <p className='kinds_container_sort'>
                Sắp Xếp
                <ul className='kinds_sort_wrapp'>
                    <li>
                        <Link className='kinds_item' to='/'>Mới Nhất</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/'>Cũ Nhất</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/'>Nhiều Lượt Xem</Link>
                    </li>
                    <li>
                        <Link className='kinds_item' to='/'>Ít Lượt Xem</Link>
                    </li>
                </ul>
            </p>
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
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
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
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slide_image' src='https://file.vfo.vn/hinh/2015/06/su-tu-5.jpg' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        <div className='new-comic-narbar'>
            <p className='new_comic-detail'>Truyện Mới</p>
        </div>
        <div className='card_container'>
            <div className='row'>
                <div className='col c-12 m-12 l-12'>
                    <Card />
                </div>
                <div className='col c-12 m-12 l-12'>
                    <Card />
                </div>
                <div className='col c-12 m-12 l-12'>
                    <Card />
                </div>
                <div className='col c-12 m-12 l-12'>
                    <Card />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePart8