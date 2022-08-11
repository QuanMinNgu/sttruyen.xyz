import React from 'react'
import './style.css';
import usePaginating from './usePaginating';

const Paginating = ({count,limit}) => {
    const {prev,next,jump,firstArr,lastArr,activePage} = usePaginating({count:count || 20,limit:limit || 20});
  return (
    <div className='paginating_container'>
        <div onClick={prev} className='paginating-items-next'>
            <i className="fa-solid fa-chevron-left"></i>
        </div>
       {firstArr.map(item =>
        <div key={item + "first"} onClick={() => jump(item)} className={`paginating-items ${activePage(item)}`}>
            {item}
        </div>)}
        {lastArr.length !== 0 &&
        <div className={`paginating-items`}>
            ...
        </div>
        }
        {lastArr.map(item => 
        <div key={item + "last"} onClick={() => jump(item)} className={`paginating-items ${activePage(item)}`}>
             {item}
        </div>)}
        <div onClick={next} className='paginating-items-next'>
            <i className="fa-solid fa-chevron-right"></i>
        </div>
    </div>
  )
}

export default Paginating