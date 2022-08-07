import React from 'react'
import '~/moviesDetail/style.css';
const Detail = () => {
    const clipPath = {
        clipPath:'inset(0 10% 0 0)'
    }
  return (
    <div className='grid wide'>
        <div className='detail_wrapp'>
            <div className='detail_title'>
                <h1>Người Anh Trai</h1>
            </div>
            <div className='detail_information'>
                <div className='detail_information-image'>
                    <img src='https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg' />
                    <div className='detail_opacity'></div>
                </div>
                <div className='detail_information-infor'>
                    <div className='detail_information-infor-title'>
                        <h1>Người Anh Trai</h1>
                    </div>
                    <div className='detail_information-infor-times'>
                        <i>[Cập nhật lúc 11:30 5/5/2022]</i>
                    </div>
                    <div className='detail_information-infor-user'>
                        <p>
                            <i className="fa-solid fa-user"></i>
                            Tác giả: STTRUYEN.XYZ GROUP
                        </p>
                    </div>
                    <div className='detail_information-infor-user'>
                        <p>
                            <i className="fa-solid fa-wifi"></i>
                            Tình trạng: hoàn thành
                        </p>
                    </div>
                    <div className='detail_information-infor-user'>
                        <p>
                            <i className="fa-solid fa-tag"></i>
                            Thể loại: hoạt hình
                        </p>
                    </div>
                    <div className='detail_information-infor-user'>
                        <p>
                            <i className="fa-solid fa-eye"></i>
                            Lượt xem: 20
                        </p>
                    </div>
                    <div className='detail_information-infor-user'>
                        <p>
                            <i class="fa-solid fa-heart"></i>
                            Yêu thích: 200
                        </p>
                    </div>
                    <div className='detail_information-infor-user'>
                        <p>
                            2 lượt đánh giá
                        </p>
                    </div>
                    <div className='detail_information-infor-user last'>
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
                    </div>
                </div>
            </div>
            <div className='detail_content'>
                <div className='detail_content-navbar'>
                    <div className='detail_content-navbar-head'> <i style={{marginRight:"0.5rem"}} className="fa-solid fa-file-lines"></i> Nội dung</div>
                </div>
                <div className='detail_content-content'>
                    <p>Hôm nay tôi có vinh dự khi được tham gia buổi thuyết trình của một vị bác sĩ đã dành 40 năm cuộc đời của mình để nghiên cứu về trái tim nhân tạo và trong buổi nói chuyện này anh ấy sẽ kể về cuộc đời của mình...</p>
                </div>
            </div>
            <div className='detail_chapter'>
                <div className='detail_chapter-navbar'>
                    <div className='detail_chapter-navbar-head'> <i style={{marginRight:"0.5rem"}} className="fa-solid fa-bars"></i> Danh sách chương</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail