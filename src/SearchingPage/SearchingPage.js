import React from 'react'
import { Link } from 'react-router-dom';
import Card from '~/card/Card';
import '~/SearchingPage/style.css';
const SearchingPage = () => {
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
                        </div>
                    </div>
                    <div className='col c-0 m-4 l-4'>
                        <div className='searchingPage_4-container'>
                            <div className='searchingPage_4-title'>
                                <span>Thể Loại</span>
                            </div>
                            <ul className='searchingPage_4-items'>
                                <li className='searchingPage_4-item'>
                                    <Link className='searchingPage_4-link' to='/asd'>
                                        Hành động
                                    </Link>
                                </li>
                                <li className='searchingPage_4-item'>
                                    <Link className='searchingPage_4-link' to='/asd'>
                                        Hành động
                                    </Link>
                                </li>
                                <li className='searchingPage_4-item'>
                                    <Link className='searchingPage_4-link' to='/asd'>
                                        Hành động
                                    </Link>
                                </li>
                                <li className='searchingPage_4-item'>
                                    <Link className='searchingPage_4-link' to='/asd'>
                                        Hành động
                                    </Link>
                                </li>
                                <li className='searchingPage_4-item'>
                                    <Link className='searchingPage_4-link' to='/asd'>
                                        Hành động
                                    </Link>
                                </li>
                                <li className='searchingPage_4-item'>
                                    <Link className='searchingPage_4-link' to='/asd'>
                                        Hành động
                                    </Link>
                                </li>
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