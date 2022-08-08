import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const ReadPage = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

  return (
    <div className='readPage_container'>
        <div className='grid wide'>
            <div className='readPage_wrap'>
                <div className='readPage_movie_detail-border'>
                    <div className='readPage_movie_detail'>
                        <div className='readPage_movie_detail-title'>
                            <span>Người anh trai</span>
                        </div>
                        <div className='readPage_movie_detail-chapter'>
                            <i>Chương 1: người anh trai</i>
                        </div>
                        <div className='readPage_movie_detail-user'>
                            <span><i style={{marginRight:"0.5rem"}} className="fa-solid fa-user"></i> sttruyen.xyz</span>
                        </div>
                        <div className='readPage_movie_detail-user'>
                            <span>06-05-2002</span>
                        </div>
                    </div>
                </div>
                <div className='readPage_changePage'>
                    <Link className='readPage_changePage-link' to='/asd'>
                        <div className='readPage_changePage-prev'>
                            Chương trước
                        </div>
                    </Link>
                    <select className='readPage_Chapter-choice'>
                        <option>Chương 1</option>
                        <option>Chương 2</option>
                        <option>Chương 3</option>
                    </select>
                    <Link className='readPage_changePage-link' to='/asd'>
                        <div className='readPage_changePage-prev'>
                            Chương sau
                        </div>
                    </Link>
                </div>
                <div className='readPage_content'>
                    <span>
                        asdadsds
                    </span>
                </div>
                <div className='readPage_comment-wrapp'>
                    <div className='readPage_comment-navbar'>
                        <div className='readPage_comment-navbar-detail'>
                            <i style={{marginRight:"0.5rem"}} className="fa-solid fa-comment"></i> Bình luận
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadPage