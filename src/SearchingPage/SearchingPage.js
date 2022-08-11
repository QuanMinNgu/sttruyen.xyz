import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '~/card/Card';
import Paginating from '~/paginating/Paginating';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import '~/SearchingPage/style.css';
const SearchingPage = () => {

    const [kinds,setKinds] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
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
            })
            .catch(() => {
                dispatch(isFailing());
            })
        return () => {
            here = false;
        }
    },[]);

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

  return (
    <div className='searchingPage_container'>
        <div className='grid wide'>
            <div className='searchingPage_wrap'>
                <div className='row'>
                    <div className='col c-12 m-8 l-8'>
                        <div className='searchingPage_8-container'>
                            <div className='searchingPage_8-title'>
                                <span>Tìm Truyện</span>
                            </div>
                            <div className='row'>
                                <div className='col c-12 l-0 m-0'>
                                    <div className='searchingPage_8-kinds'>
                                        <select className='searchingPage_8-select'>
                                            <option>Tất cả thể loại</option>
                                            <option>Tất cả thể loại</option>
                                            <option>Tất cả thể loại</option>
                                            <option>Tất cả thể loại</option>
                                            <option>Tất cả thể loại</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='searchingPage_8-status'>
                            <div className='searchingPage_8-status-items active'>
                                    Tất cả
                                </div>
                                <div className='searchingPage_8-status-items'>
                                    Hoàn thành
                                </div>
                                <div className='searchingPage_8-status-items'>
                                    Chưa hoàn thành
                                </div>
                            </div>
                            <div className='searchingPage_8-order'>
                                <div className='searchingPage_8-order-title'>
                                    <span>Sắp Xếp Theo :</span>
                                </div>
                                <div className='searchingPage_8-order-items'>
                                    <div className='searchingPage_8-order-item active'>
                                        Mới Nhất
                                    </div>
                                    <div className='searchingPage_8-order-item'>
                                        Cũ Nhất
                                    </div>
                                    <div className='searchingPage_8-order-item'>
                                        Nhiều Lượt Xem
                                    </div>
                                    <div className='searchingPage_8-order-item'>
                                        Ít Lượt Xem
                                    </div>
                                </div>
                            </div>
                            <div className='searchingPage_8-cardContainer'>
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <Paginating />
                        </div>
                    </div>
                    <div className='col c-0 m-4 l-4'>
                        <div className='searchingPage_4-container'>
                            <div className='searchingPage_4-title'>
                                <span>Thể Loại</span>
                            </div>
                            <ul className='searchingPage_4-items'>
                                {kinds?.map(item => 
                                <li key={item?._id + 'searching'} className='searchingPage_4-item'>
                                    <Link className='searchingPage_4-link' to={`/tim-truyen?kind=${item?.slug}`}>
                                        {item?.name}
                                    </Link>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchingPage