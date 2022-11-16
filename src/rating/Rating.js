import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import "~/rating/style.css";
import io from 'socket.io-client';
import Url from '~/url/Url';

const Rating = () => {

    const [rating,setRating] = useState(0);
    const rateTimes = useRef(0);
    const checkRef = useRef(false);
    const [socket,setSocket] = useState();
    const oldStar = useRef(0);
    const {url} = Url();

    const {slug} = useParams();


    useEffect(() => {
        const ratingCarts = JSON.parse(localStorage.getItem('ratings'));
        if(ratingCarts){
            const checked = ratingCarts.some(infor => infor.slug.toString() === slug.toString());
            if(checked){
                ratingCarts.forEach(item => {
                    if(item.slug.toString() === slug.toString()){
                        oldStar.current = item.starts;
                        setRating(item.starts);
                    }
                });
                checkRef.current = true;
            }
        }
        rateTimes.current = rateTimes.current + 1;
    },[slug]);

    useEffect(() => {
        if(rateTimes.current > 1){
            var ratingCarts = JSON.parse(localStorage.getItem('ratings'));
            if(ratingCarts){
                const checked = ratingCarts?.some(infor => infor.slug.toString() === slug.toString());
                if(checked){
                    ratingCarts = ratingCarts.map(item => {
                        if(item.slug.toString() === slug.toString()){
                            return {
                                slug,
                                starts:rating
                            }
                        }
                        else{
                            return {
                                ...item
                            }
                        }
                    });
                    localStorage.setItem('ratings',JSON.stringify(ratingCarts));
                }
                else{
                    ratingCarts = [...ratingCarts,{slug:slug,starts:rating}];
                    localStorage.setItem('ratings',JSON.stringify(ratingCarts));
                }
            } 
            else{
                const newCart = [{slug:slug,starts:rating}];
                localStorage.setItem('ratings',JSON.stringify(newCart));
            }
        }
    },[rating]);

    useEffect(()=> {
        const socket = io(url);
        setSocket(socket);
        return () => {
            socket.close();
        }
    },[]);

    useEffect(() => {
        if(rateTimes.current > 1){
            if(checkRef.current === true){
                socket.emit("Rating",{
                    slug,
                    oldStar:oldStar.current,
                    star:rating,
                    status:true
                })
            }
            else{
                socket.emit("Rating",{
                    slug,
                    star:rating,
                    status:false
                })
                checkRef.current = true;
            }
        }
    },[rating]);    

  return (
    <div className='rating_container'>
        <div className='rating_rap'>
            <div className={`rating_items ${1 <= rating ? 'active' : ''}`}>
                <label htmlFor='1'>
                    <i className="fa-solid fa-star"></i>
                </label>
                <input
                onClick={() => {
                    rateTimes.current++;
                    setRating(1);
                }} 
                hidden id="1" type='radio' name="radioCheck" />
            </div>
            <div className={`rating_items ${2 <= rating ? 'active' : ''}`}>
                <label htmlFor='2'>
                    <i className="fa-solid fa-star"></i>
                </label>
                <input id='2'
                onClick={() => {
                    rateTimes.current++;
                    setRating(2);
                }} 
                hidden type='radio' name="radioCheck" />
            </div>
            <div className={`rating_items ${3 <= rating ? 'active' : ''}`}>
                <label htmlFor='3'>
                    <i className="fa-solid fa-star"></i>
                </label>
                <input id='3'
                onClick={() => {
                    rateTimes.current++;
                    setRating(3);
                }} 
                hidden type='radio' name="radioCheck" />
            </div>
            <div className={`rating_items ${4 <= rating ? 'active' : ''}`}>
                <label htmlFor='4'>
                    <i className="fa-solid fa-star"></i>
                </label>
                <input id='4'
                onClick={() => {
                    rateTimes.current++;
                    setRating(4);
                }} 
                hidden type='radio' name="radioCheck" />
            </div>
            <div className={`rating_items ${5 <= rating ? 'active' : ''}`}>
                <label htmlFor='5'>
                    <i className="fa-solid fa-star"></i>
                </label>
                <input id='5'
                onClick={() => {
                    rateTimes.current++;
                    setRating(5);
                }} 
                hidden type='radio' name="radioCheck" />
            </div>
        </div>
    </div>
  )
}

export default Rating