import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import './style.css';

const ReadPage = ({cache}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    const {slug,chapter} = useParams();
    const [item,setItem] =useState({});
    const [chapterNuber,setChapterNumber] = useState(1);

    const navigate = useNavigate();


    const dispatch = useDispatch();

    function dateFormat(date) {
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const monthString = month >= 10 ? month : `0${month}`;
        const dayString = day >= 10 ? day : `0${day}`;
        return `${hour}:${minute} ${dayString}-${monthString}-${date.getFullYear()}`;
    }

    useEffect(() => {
        setChapterNumber(chapter.split('_')[1] * 1);
    },[chapter]);

    useEffect(() => {
        let here = true;
        const url = `/product/${slug}`;
        if(cache.current[url]){
            return setItem(cache.current[url]);
        }
        dispatch(isLoading());
        axios.get(url)
            .then(res => {
                if(!here){
                    dispatch(isSuccess());
                    return;
                }
                dispatch(isSuccess());
                setItem(res.data.product);
                cache.current[url] = res.data.product;
            })
            .catch(() => {
                dispatch(isFailing());
            })
        return () => {
            here = false;
        }
    },[slug]);

  return (
    <div className='readPage_container'>
        <div className='grid wide'>
            <div className='readPage_wrap'>
                <div className='readPage_movie_detail-border'>
                    <div className='readPage_movie_detail'>
                        <div className='readPage_movie_detail-title'>
                            <span>{item?.title}</span>
                        </div>
                        <div className='readPage_movie_detail-chapter'>
                            <i>Chương {chapterNuber}: {item?.chapter && item?.chapter[chapterNuber * 1 - 1]?.title}</i>
                        </div>
                        <div className='readPage_movie_detail-user'>
                            <span><i style={{marginRight:"0.5rem"}} className="fa-solid fa-user"></i> sttruyen.xyz</span>
                        </div>
                        <div className='readPage_movie_detail-user'>
                            <span>{item?.chapter && dateFormat(new Date(item?.chapter[chapterNuber * 1 - 1]?.createdAt))}</span>
                        </div>
                    </div>
                </div>
                <div className='readPage_changePage'>
                    <div 
                    onClick={() => {
                        if(chapterNuber > 1){
                            navigate(`/${slug}/chuong_${chapterNuber * 1 - 1}`);
                        }
                    }}
                    style={{cursor:"pointer"}} className='readPage_changePage-prev'>
                        Chương trước
                    </div>
                    <select onChange={(e) => {
                        navigate(`/${slug}/chuong_${e.target.value}`);
                    }} className='readPage_Chapter-choice'>
                        {item?.chapter?.map((item,index) => {
                            return chapterNuber * 1 === index + 1 ?
                            <option value={index + 1} selected>Chương {index + 1}</option> :
                            <option value={index + 1}>Chương {index + 1}</option> 
                        })}
                    </select>
                    <div 
                    onClick={() => {
                        if(chapterNuber < item?.chapter?.length){
                            navigate(`/${slug}/chuong_${chapterNuber * 1 + 1}`);
                        }
                    }}
                    style={{cursor:"pointer"}}
                    className='readPage_changePage-prev'>
                        Chương sau
                    </div>
                </div>
                <div style={{marginTop:"4rem"}} className='readPage_content'>
                    <span>
                        {item?.chapter && item?.chapter[chapterNuber * 1 - 1].content}
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