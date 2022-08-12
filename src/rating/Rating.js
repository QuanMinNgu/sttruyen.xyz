import React, { useEffect, useState } from 'react'
import "~/rating/style.css";

const Rating = () => {

    const [rating,setRating] = useState(0);

  return (
    <div className='rating_container'>
        <div className='rating_rap'>
            <div className={`rating_items ${1 <= rating ? 'active' : ''}`}>
                <label htmlFor='1'>
                    <i className="fa-solid fa-star"></i>
                </label>
                <input
                onClick={() => {
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
                    setRating(5);
                }} 
                hidden type='radio' name="radioCheck" />
            </div>
        </div>
    </div>
  )
}

export default Rating