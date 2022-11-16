import React, { useEffect, useState } from 'react';
import '~/homePage/style.css';
import 'swiper/css';
import HomePart8 from './HomePart8';
import HomePart4 from './HomePart4';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = ({cache}) => {

    const [product,setProduct] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        let here = true;
        if(cache.current['/product/default']){
            setProduct(cache.current['/product/default']);
            return;
        }
        dispatch(isLoading());
        axios.get('/product/default')
            .then(res => {
                if(!here){
                    dispatch(isSuccess());
                    return;
                }
                dispatch(isSuccess());
                setProduct(res.data);
                cache.current['/product/default'] = res.data;
            })
            .catch(err => {
                dispatch(isFailing());
            })

        return () => {
            here = false;
        }
    },[]);


  return (
    <div className='home-wrapper'>
        <HelmetProvider>
            <Helmet>
                <title>Thế Giới Truyện</title>
                <link rel="canonical" href="https//sttruyen.xyz"/>
                <meta content="Sttruyen là web đọc truyện mọi thể loại, truyện hay mà bạn không thể tìn thấy ở bất cứ nơi nào khác.Bản quyền của tất cả các truyện hoàn toàn thuộc về sttruyen.xyz
    bởi các câu chuyện trong web đều những thành viên của sttruyen.xyz nghĩ ra. Chúng tôi hy vọng rằng bạn sẽ có 1 buổi đọc truyện thật tuyệt vời." />
            </Helmet>
        </HelmetProvider>
        <div className='grid wide'>
            <div className='home-container'>
                <div className='row'>
                    <div className='col c-8 m-8 l-8'>
                        <HomePart8 cache={cache}
                        products={product?.products} />
                    </div>
                    <div className='col c-4 m-4 l-4'>
                        <HomePart4 
                        topProducts = {product?.topProducts}
                        outStandingProducts = {product?.outStandingProducts}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home