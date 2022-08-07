import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import '~/card/style.css';

const Card = () => {

    const [like,setLike] = useState(false);

    const heart = useRef();

    useEffect(() => {
        if(like){
            heart.current.innerHTML = '<i class="fa-solid fa-heart"></i>';
            heart.current.classList.add('icon_heart-red');
        }
        else{
            heart.current.innerHTML = '<i class="fa-regular fa-heart"></i>';
            heart.current.classList.remove('icon_heart-red');
        }
    },[like]);

  return (
    <div className='card_wrapper'>
        <div className='card_image'>
            <img className='card_image-detail' src="https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg" />
        </div>
        <div className='card_information'>
            <Link className='card_link' to='/asddas'>
                <div className='card_image-small'>
                    <img className='card_image_small_one' src='https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg' />
                    <div className='card_small_infor'>
                        <h1 className='card_small_name'>
                            Bright
                        </h1>
                        <h4 className='card_small_born'>
                            2017,David Ayer
                        </h4>
                        <div className='card_small_times'>
                            <div className='card_small_time'>
                                Chương 10
                            </div>
                            <div className='card_small_kinds'>
                                <p>Hoạt Hình, Hài Hước</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='card_image-content'>
                <Link className='card_link' to='/asdads'>
                    <div className='card_image_content-detail'>
                        <h1>
                            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
                            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
                            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
                            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
                        </h1>
                    </div>
                </Link>
                <div className='card_image_content-icon'>
                    <div ref={heart} onClick={() => {
                        setLike(!like)
                    }} title='Yêu thích' className='icon_heart'>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div title='Thêm danh sách yêu thích' className='icon_plus'>
                        <i class="fa-regular fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card