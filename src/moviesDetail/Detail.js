import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CreateChapter from '~/admin/chapters/CreateChapter';
import DeleteChapter from '~/admin/chapters/DeleteChapter';
import UpdateChapter from '~/admin/chapters/UpdateChapter';
import UpdateMovie from '~/admin/Movies/UpdateMovie';
import HomePart4 from '~/homePage/HomePart4';
import '~/moviesDetail/style.css';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import io from 'socket.io-client';
import Url from '~/url/Url';
const Detail = ({cache}) => {

    const heart = useRef();
    const {url} = Url();
    const [like,setLike] = useState(false);
    const dispatch = useDispatch();
    const [productDetail,setProductDetail] = useState({});
    const [updateMovies,setUpdateMovie] = useState(false);
    const [deleteConfirm,setDeleteConfirm] = useState(false);
    const [createChapter,setCreateChapter] = useState(false);
    const [updateChapter,setUpdateChapter] = useState(false);
    const [deleteChapter,setDeleteChapter] = useState(false);
    const [socket,setSocket] = useState();
    const [product,setProduct] = useState({});

    const itemRef = useRef({});
    const chapterRef = useRef(0);

    const auth = useSelector(state => state.auth);
    const titleRef = useRef();

    const kindRef = useRef('');

    const {slug} = useParams();

    const ratingRef = useRef(0);

    const clipPath = {
        clipPath:`inset(0 ${100 - ratingRef.current * 100}% 0 0)`
    };

    useEffect(() => {
        if(productDetail){
            ratingRef.current = productDetail?.rating / (productDetail?.reviewer * 5);
        }
    },[productDetail]);
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    useEffect(() => {
        if(like){
            heart.current.innerHTML = '<i class="fa-solid fa-heart"></i>';
        }
        else{
            heart.current.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
    },[like]);

    useEffect(() => {
        const socket = io(url);
        setSocket(socket);
        return () => {
            socket.close();
        }
    },[]);

    useEffect(() => {
        let here = true;
        const url = `/product/${slug}`;
        if(cache.current[url]){
            setProductDetail(cache.current[url]);
            if(!kindRef.current){
                cache.current[url]?.kinds?.forEach((item,index) => {
                    if(index !== cache.current[url]?.kinds.length - 1){
                        kindRef.current = kindRef.current +  item?.name + " - ";  
                    }
                    else{
                        kindRef.current = kindRef.current + item?.name;  
                    }
                })
            }
            return;
        }
        dispatch(isLoading());
        axios.get(url)
            .then(res => {
                if(!here){
                    return dispatch(isSuccess());
                }
                dispatch(isSuccess());
                setProductDetail(res.data.product);
                cache.current[url] = res.data.product;
                if(!kindRef.current){
                    res.data.product?.kinds?.forEach((item,index) => {
                        if(index !== res.data.product?.kinds.length - 1){
                            kindRef.current = kindRef.current +  item?.name + " - ";  
                        }
                        else{
                            kindRef.current = kindRef.current + item?.name;  
                        }
                    })
                }
            })
            .catch(err => {
                toast.error(err.response?.data?.msg);
                dispatch(isFailing());
            })
    },[slug]);


    //function
    const handleDeleteMovie = async () => {
        setDeleteConfirm(false);
        dispatch(isLoading());
        try{
            const res = await axios.post(`/product/delete/${productDetail?.slug}`,{
                title:titleRef.current.value
            },{
                headers:{
                    token:`Bearer ${auth.user?.accessToken}`
                }
            })
            toast.success(res.data.msg);
            dispatch(isSuccess());
        }
        catch(err){
            toast.error(err.response.data.msg);
            dispatch(isFailing());
        }
    }

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
        let here = true;
        if(cache.current['/product/default']){
            return setProduct(cache.current['/product/default']);
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
    <div className='grid wide'>
        <div className='detail_wrapp'>
            <div className='row'>
                <div className='c-12 m-8 l-8'>
                    <div className='detail_title'>
                        <span>{productDetail?.title}</span>
                    </div>
                    <div className='detail_update_times'>
                        <i>[Cập nhật lúc: {productDetail?.updatedAt && dateFormat(new Date(productDetail?.updatedAt))}]</i>
                    </div>
                    <div className='detail_clearly'>
                        <div className='row'>
                            <div className='col c-4 m-4 l-4'>
                                <div className='detail_clearly-image'>
                                    <img src={productDetail?.image1} />
                                </div>
                            </div>
                            <div className='col c-8 m-8 l-8'>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-user"></i>
                                        Tác giả: STRUYEN.XYZ GROUP
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-wifi"></i>
                                        Tình trạng: {productDetail?.status ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-tag"></i>
                                        Thể loại: {kindRef.current}
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-eye"></i>
                                        Lượt đọc: {productDetail?.watching}
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-heart"></i>
                                        Lượt thích: {productDetail?.like}
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        {productDetail?.reviewer} lượt đánh giá
                                    </span>
                                </div>
                                <div className='categary-list-item-star'>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <div style={clipPath} className='categary-list-item-star-full'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div
                                onClick={() => {
                                    setLike(!like);
                                }}
                                ref={heart} title='Yêu thích' className='detail_clearly-heart'>
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_button'>
                        <Link className='detail_button-clearly-link' to={`/${slug}/chuong_1`}>
                            <div className='detail_button-clearly'>
                                    Đọc từ đầu
                            </div>
                        </Link>
                        <Link className='detail_button-clearly-link' to={`/${slug}/chuong_${productDetail?.chapter?.length}`}>
                            <div className='detail_button-clearly'>
                                    Đọc mới nhất
                            </div>
                        </Link>
                        {auth.user ? 
                        <>
                        <div onClick={() => {
                            setUpdateMovie(true);
                        }} className='detail_button-favorite'>
                            Sửa Lại Truyện
                        </div>
                        <div
                        onClick={() => {
                            setDeleteConfirm(true);
                        }}
                        style={{marginLeft:"1rem"}} className='detail_button-favorite'>
                            Xóa Truyện
                        </div>
                        </>
                        :
                        <div className='detail_button-favorite'>
                            Thêm vào yêu thích
                        </div>
                        }
                    </div>
                    <div className='detail_content-navbar-container'>
                        <div className='detail_content-navbar'>
                            <p>
                                <i style={{marginRight:"0.5rem"}} class="fa-regular fa-file-lines"></i>
                                Nội dung
                            </p>
                        </div>
                    </div>
                    <div className='detail_content-content'>
                        <p>
                            {productDetail?.content}
                        </p>
                    </div>
                    <div className='detail_content-chapter-container'>
                        <div className='detail_content-chapter'>
                            <p>
                                <i style={{marginRight:"0.5rem"}} class="fa-solid fa-bars"></i>
                                Danh sách chương
                            </p>
                        </div>
                        {auth.user?.accessToken &&
                        <div 
                        onClick={() => {
                            setCreateChapter(true);
                        }}
                        title='Admin Only' className='detail_add-chapter-container'>
                            Thêm Chapter
                        </div>}
                    </div>
                    <div className='detail_content-chapter-detail-container'>
                        <div className='detail_content-chapter-detail-head'>
                            <div className='detail_content-chapter-numberChapter'>
                                <span>Số chương</span>
                            </div>
                            <div className='detail_content-chapter-updateTimes'>
                                <span>Cập Nhật</span>
                            </div>
                            <div className='detail_content-chapter-readingNumber'>
                                <span>Lượt Đọc</span>
                            </div>
                        </div>
                        <div className='detail_content-chapter-detail_body'>
                            {productDetail?.chapter?.map((item,index) =>
                            <div key={index + "asdasdd"} className='detail_content-chapter-detail_body-item'>
                                <div className='detail_content-chapter-detail_body-chapter'>
                                    <span>
                                        <Link style={{textDecoration:"none",color:"black",overflow:"hidden"}} to={`/${slug}/chuong_${index + 1}`}>
                                            Chương {index + 1}: {item?.title}
                                        </Link>
                                    </span>
                                    {auth.user?.accessToken &&
                                    <div className='detail_content-chapter-buttonChapter'>
                                        <button
                                        onClick={() =>{
                                            chapterRef.current = index + 1;
                                            itemRef.current = item;
                                            setDeleteChapter(true);
                                        }}
                                        >Xóa</button>
                                        <button
                                        onClick={() => {
                                            itemRef.current = item;
                                            setUpdateChapter(true);
                                        }}
                                        >Cập Nhật</button>
                                    </div>}
                                </div>
                                <div className='detail_content-chapter-detail_body-updateTimes'>
                                    <span>{item?.createdAt && dateFormat(new Date(item?.createdAt))}</span>
                                </div>
                                <div className='detail_content-chapter-detail_body-updateTimes'>
                                    <span>{item?.watching}</span>
                                </div>
                            </div>)}
                        </div>
                        <div className='detail_comment-wrapp'>
                            <div className='detail_comment-navbar'>
                                <div className='detail_comment-navbar-detail'>
                                    <i style={{marginRight:"0.5rem"}} className="fa-solid fa-comment"></i> Bình luận
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col c-0 m-4 l-4'>
                    <HomePart4 
                        topProducts = {product?.topProducts}
                        outStandingProducts = {product?.outStandingProducts}
                    />
                </div>
            </div>
        </div>
        {updateMovies && <UpdateMovie item={productDetail} setUpdateMovie={setUpdateMovie}/>}
        {createChapter && <CreateChapter setCreateChapter={setCreateChapter} slug={productDetail?.slug}/>}
        {updateChapter && <UpdateChapter setUpdateChapter={setUpdateChapter} item={itemRef.current}/>}
        {deleteChapter && <DeleteChapter setDeleteChapter={setDeleteChapter} item={chapterRef.current} id={itemRef.current?._id}/>}
        {deleteConfirm &&
        <div className='deleteConfirm_container'>
            <div className='deleteConfirm_wrap'>
                <div className='deleteConfirm_title'>
                    <span>Bạn có thực sự muốn xóa {productDetail?.title} ?</span>
                </div> 
                <div className='deleteConfirm_pass'>
                    <input ref={titleRef} type='password' />
                </div>
                <div className='deleteConfirm_button'>
                    <button
                    onClick={handleDeleteMovie}
                    >Xóa</button>
                    <button
                    onClick={() => {
                        setDeleteConfirm(false);
                    }}
                    >Hủy</button>
                </div>
            </div>  
        </div>}
    </div>
  )
}

export default Detail