import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import HomePart4 from '~/homePage/HomePart4';
import '~/moviesDetail/style.css';
const Detail = () => {

    const heart = useRef();
    const [like,setLike] = useState(false);
    const clipPath = {
        clipPath:'inset(0 10% 0 0)'
    };

    useEffect(() => {
        if(like){
            heart.current.innerHTML = '<i class="fa-solid fa-heart"></i>';
        }
        else{
            heart.current.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
    },[like]);


  return (
    <div className='grid wide'>
        <div className='detail_wrapp'>
            <div className='row'>
                <div className='c-12 m-8 l-8'>
                    <div className='detail_title'>
                        <span>Người anh trai</span>
                    </div>
                    <div className='detail_update_times'>
                        <i>[Cập nhật lúc: 11:30 5/5/2022]</i>
                    </div>
                    <div className='detail_clearly'>
                        <div className='row'>
                            <div className='col c-4 m-4 l-4'>
                                <div className='detail_clearly-image'>
                                    <img src='https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg' />
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
                                        Tình trạng: hoàn thành
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-tag"></i>
                                        Thể loại: hành động - hài hước
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-eye"></i>
                                        Lượt đọc: 120
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        <i style={{marginRight:"0.5rem"}} className="fa-solid fa-heart"></i>
                                        Lượt thích: 450
                                    </span>
                                </div>
                                <div className='detail_clearly-more'>
                                    <span>
                                        2 lượt đánh giá
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
                        <Link className='detail_button-clearly-link' to='/asd'>
                            <div className='detail_button-clearly'>
                                    Đọc từ đầu
                            </div>
                        </Link>
                        <Link className='detail_button-clearly-link' to='/asd'>
                            <div className='detail_button-clearly'>
                                    Đọc mới nhất
                            </div>
                        </Link>
                        <div className='detail_button-favorite'>
                            Thêm vào yêu thích
                        </div>
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
                            Hôm nay tôi có vinh dự khi được tham gia buổi thuyết trình của một vị bác sĩ đã dành 40 năm cuộc đời của mình để nghiên cứu về trái tim nhân tạo và trong buổi nói chuyện này anh ấy sẽ kể về cuộc đời của mình...
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
                            <div className='detail_content-chapter-detail_body-item'>
                                <div className='detail_content-chapter-detail_body-chapter'>
                                    <span>
                                        <Link style={{textDecoration:"none",color:"black"}} to='/asdsd/sxdas'>
                                            Chương 1
                                        </Link>
                                    </span>
                                </div>
                                <div className='detail_content-chapter-detail_body-updateTimes'>
                                    <span>22:30 22/06/2022</span>
                                </div>
                                <div className='detail_content-chapter-detail_body-updateTimes'>
                                    <span>230</span>
                                </div>
                            </div>
                            <div className='detail_content-chapter-detail_body-item'>
                                <div className='detail_content-chapter-detail_body-chapter'>
                                    <span>Chương 1</span>
                                </div>
                                <div className='detail_content-chapter-detail_body-updateTimes'>
                                    <span>22:30 22/06/2022</span>
                                </div>
                                <div className='detail_content-chapter-detail_body-updateTimes'>
                                    <span>230</span>
                                </div>
                            </div>
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
    </div>
  )
}

export default Detail