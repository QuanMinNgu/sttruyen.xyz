import React from 'react'
import { Link } from 'react-router-dom';
import '~/homePage/style.css';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Home = () => {
  return (
    <div className='home-wrapper'>
        <div className='grid wide'>
            <div className='home-container'>
                <div className='row'>
                    <div className='col c-8 m-8 l-8'>
                        <div className='narvar_container'>
                            <p>
                                <Link className='home_icon' to='/'>
                                    Home    
                                </Link>
                            </p>
                            <p>Thể Loại</p>
                            <p>Sắp Xếp</p>
                        </div>
                        <div className='line'></div>
                        <div className='narvar_card'>
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
                    </div>
                    <div className='col c-4 m-4 l-4'>
                        <div className='narbar_top'>
                            <p>Top</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home