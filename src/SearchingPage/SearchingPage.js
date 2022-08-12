import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Card from '~/card/Card';
import Paginating from '~/paginating/Paginating';
import usePaginating from '~/paginating/usePaginating';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import '~/SearchingPage/style.css';
const SearchingPage = () => {

    const [kinds,setKinds] = useState([]);
    const [product,setProduct] = useState([]);
    const [statusCard,setStatusCard] = useState('');
    const [sortDetail,setSortDetail] = useState('');
    const dispatch = useDispatch();

    const {search} = useLocation();

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

    useEffect(() => {
        let here = true;
        const url = `/product?${search}`;
        dispatch(isLoading());
        axios.get(url)  
            .then(res =>{
                if(!here){
                    dispatch(isSuccess());
                    return;
                }
                dispatch(isSuccess());
                setProduct(res.data);
            })
            .catch(() => {
                dispatch(isFailing());
            })
        return () => {  
            here = false;
        }
    },[search]);

    const getStatus = (e) => {
        return e === statusCard ? 'active' : '';
    }

    const getSort = (e) => {
        return e === sortDetail ? 'active' : '';
    }

    const {page} = usePaginating({count:product?.count || 12,limit:12});
    const navigate = useNavigate();

    useEffect(() => {
        const sort = new URLSearchParams(search).get('sort') || '';
        const kind = new URLSearchParams(search).get('kind') || '';

        
        const searching = {
            sort : sortDetail || sort,
            kind,
            status: statusCard,
            page
        }


        const excludes = ['page','sort','kind'];
        excludes.forEach(item => {
            if(!searching[item]){
                delete searching[item];
            }
        })

        if(searching['status'] === ''){
            delete searching['status'];
        }
        const newSearch = new URLSearchParams(searching).toString();
        navigate(`?${newSearch}`);

    },[search,page,statusCard,sortDetail]);

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
                                <div 
                                onClick={() => {
                                    setStatusCard('');
                                }}
                                className={`searchingPage_8-status-items ${getStatus('')}`}>
                                    Tất cả
                                </div>
                                <div
                                onClick={() => {
                                    setStatusCard(true);
                                }}
                                 className={`searchingPage_8-status-items ${getStatus(true)}`}>
                                    Hoàn thành
                                </div>
                                <div 
                                onClick={() => {
                                    setStatusCard(false);
                                }}
                                className={`searchingPage_8-status-items ${getStatus(false)}`}>
                                    Chưa hoàn thành
                                </div>
                            </div>
                            <div className='searchingPage_8-order'>
                                <div className='searchingPage_8-order-title'>
                                    <span>Sắp Xếp Theo :</span>
                                </div>
                                <div className='searchingPage_8-order-items'>
                                    <div 
                                    onClick={() => {
                                        setSortDetail('');
                                    }}
                                    className={`searchingPage_8-order-item ${getSort('')}`}>
                                        Mới Nhất
                                    </div>
                                    <div 
                                    onClick={() => {
                                        setSortDetail('-createdAt');
                                    }}
                                    className={`searchingPage_8-order-item ${getSort('-createdAt')}`}>
                                        Cũ Nhất
                                    </div>
                                    <div 
                                    onClick={() => {
                                        setSortDetail('watching');
                                    }}
                                    className={`searchingPage_8-order-item ${getSort('watching')}`}>
                                        Nhiều Lượt Xem
                                    </div>
                                    <div 
                                    onClick={() => {
                                        setSortDetail('-watching');
                                    }}
                                    className={`searchingPage_8-order-item ${getSort('-watching')}`}>
                                        Ít Lượt Xem
                                    </div>
                                </div>
                            </div>
                            <div className='searchingPage_8-cardContainer'>
                                {product?.Products?.map(item => 
                                    <Card key={item?._id + 'searchingCard'} item={item}/>
                                )}
                            </div>
                            <Paginating count={product?.count || 12} limit={12}/>
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