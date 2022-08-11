import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UpdateMovie from '~/admin/Movies/UpdateMovie';
import HomePart4 from '~/homePage/HomePart4';
import '~/moviesDetail/style.css';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
const Detail = () => {

    const heart = useRef();
    const [like,setLike] = useState(false);
    const dispath = useDispatch();
    const [productDetail,setProductDetail] = useState({});
    const [updateMovies,setUpdateMovie] = useState(false);
    const [deleteConfirm,setDeleteConfirm] = useState(false);
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
        let here = true;
        dispath(isLoading());
        axios.get(`/product/${slug}`)
            .then(res => {
                if(!here){
                    return dispath(isSuccess());
                }
                dispath(isSuccess());
                setProductDetail(res.data.product);
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
                dispath(isFailing());
            })
    },[slug]);


    //function
    const handleDeleteMovie = async () => {
        setDeleteConfirm(false);
        dispath(isLoading());
        try{
            const res = await axios.post(`/product/delete/${productDetail?.slug}`,{
                title:titleRef.current.value
            },{
                headers:{
                    token:`Bearer ${auth.user?.accessToken}`
                }
            })
            toast.success(res.data.msg);
            dispath(isSuccess());
        }
        catch(err){
            toast.error(err.response.data.msg);
            dispath(isFailing());
        }
    }


  return (
    <div className='grid wide'>
        <div className='detail_wrapp'>
            <div className='row'>
                <div className='c-12 m-8 l-8'>
                    <div className='detail_title'>
                        <span>{productDetail?.title}</span>
                    </div>
                    <div className='detail_update_times'>
                        <i>[Cập nhật lúc: {productDetail?.updatedAt}]</i>
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
                            <div className='detail_content-chapter-detail_body-item'>
                                <div className='detail_content-chapter-detail_body-chapter'>
                                    <span>
                                        <Link style={{textDecoration:"none",color:"black"}} to={`/${slug}/chuong_${index + 1}`}>
                                            Chương {index + 1}
                                        </Link>
                                    </span>
                                </div>
                                <div className='detail_content-chapter-detail_body-updateTimes'>
                                    <span>{item?.createdAt}</span>
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
                    <HomePart4 />
                </div>
            </div>
        </div>
        {updateMovies && <UpdateMovie item={productDetail} setUpdateMovie={setUpdateMovie}/>}
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