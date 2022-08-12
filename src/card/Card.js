import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '~/card/style.css';
import io from 'socket.io-client';
import Url from '~/url/Url';

const Card = ({item}) => {

    const [like,setLike] = useState(false);
    const likeRef = useRef(false);
    const countRef = useRef(0);
    const [socket,setSocket] = useState();

    useEffect(() => {
        const socket = io(url);
        setSocket(socket);
        return () => {
            socket.close();
        }
    },[]);

    const {url} = Url();

    const heart = useRef();

    useEffect(() => {
        if(likeRef.current && countRef.current !== 0){
            socket.emit('likes',{
                status:true,
                slug:item?.slug
            });
            heart.current.innerHTML = '<i class="fa-solid fa-heart"></i>';
            const likeCarts = JSON.parse(localStorage.getItem('likes'));
            if(!likeCarts){
                const newArr = [item?._id];
                localStorage.setItem('likes',JSON.stringify(newArr));
            }
            else{
                const checked = likeCarts.some(infor => infor.toString() === item?._id.toString());
                if(!checked){
                    const newArr = [...likeCarts,item?._id];
                    localStorage.removeItem('likes');
                    localStorage.setItem('likes',JSON.stringify(newArr));
                }
            }
            heart.current.classList.add('icon_heart-red');
        }
        else if(!likeRef.current && countRef.current !== 0){
            socket.emit('likes',{
                status:false,
                slug:item?.slug
            });
            heart.current.innerHTML = '<i class="fa-regular fa-heart"></i>';
            const likeCarts = JSON.parse(localStorage.getItem('likes'));
            if(likeCarts){
                const checked = likeCarts.filter(infor => infor.toString() !== item?._id.toString());
                localStorage.removeItem('likes');
                localStorage.setItem('likes',JSON.stringify(checked));
            }
            heart.current.classList.remove('icon_heart-red');
        }
    },[likeRef.current]);

    useEffect(() => {
        if(like){
            heart.current.innerHTML = '<i class="fa-solid fa-heart"></i>';
            heart.current.classList.add('icon_heart-red');
        }else{
            heart.current.innerHTML = '<i class="fa-regular fa-heart"></i>';
            heart.current.classList.remove('icon_heart-red');
        }
    },[like]);

    useEffect(() => {
        const likeCarts = JSON.parse(localStorage.getItem('likes'));
        const checked = likeCarts.some(infor => infor.toString() === item._id.toString());
        if(checked){
            setLike(true);
            likeRef.current = true;
        }
    },[]);

    const handleAddfavoriteCard = () => {
        const carts = JSON.parse(localStorage.getItem('favorite'));
        if(!carts){
            const newCarts = [{title:item.title,chapter:item.chapter.length,image:item.image1,slug:item.slug,id:item._id}];
            localStorage.setItem('favorite',JSON.stringify(newCarts));
            toast.success('Thêm thành công.');
        }
        else{
            const checked = carts.some(infor => infor.id.toString() === item._id.toString());
            if(checked){
                return toast.error("Bạn đã thêm truyện này rồi.");
            }
            else{
                const newCarts = [...carts,{title:item.title,chapter:item.chapter.length,image:item.image1,slug:item.slug,id:item._id}];
                localStorage.removeItem('favorite');
                localStorage.setItem('favorite',JSON.stringify(newCarts));
                toast.success('Thêm thành công.');
            }
        }
    }

  return (
    <div className='card_wrapper'>
        <div className='card_image'>
            <img className='card_image-detail' src={item?.image1} />
        </div>
        <div className='card_information'>
            <Link className='card_link' to={`/${item?.slug}`}>
                <div className='card_image-small'>
                    <img className='card_image_small_one' src={item?.image2} />
                    <div className='card_small_infor'>
                        <h1 className='card_small_name'>
                            {item?.title}
                        </h1>
                        <h4 className='card_small_born'>
                            sttruyenxyz
                        </h4>
                        <div className='card_small_times'>
                            <div className='card_small_time'>
                                Chương {item?.chapter?.length}
                            </div>
                            <div className='card_small_kinds'>
                                <p>
                                    {item?.kinds?.map((infor,index) =>
                                    {
                                        if(index !== item?.kinds?.length - 1){
                                            return infor?.name + " - ";
                                        }else{
                                            return infor?.name;
                                        }
                                    }
                                           
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='card_image-content'>
                <Link className='card_link' to='/asdads'>
                    <div className='card_image_content-detail'>
                        <h1>
                            {item?.content}
                        </h1>
                    </div>
                </Link>
                <div className='card_image_content-icon'>
                    <div ref={heart} onClick={() => {
                        setLike(!like);
                        likeRef.current = !likeRef.current;
                        countRef.current++;
                    }} title='Yêu thích' className='icon_heart'>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div 
                    onClick={handleAddfavoriteCard}
                    title='Thêm danh sách yêu thích' className='icon_plus'>
                        <i className="fa-regular fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card