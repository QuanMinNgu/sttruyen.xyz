import React, { useEffect, useRef } from 'react'

const KindBox = ({totalKind,item,setPKinds,pKinds}) => {

    const checkRef = useRef();

    useEffect(() => {
        const checked = totalKind?.some(infor => infor._id.toString() === item._id.toString());
        if(checked){
            checkRef.current.checked = true;
        }
    },[]);

    const handleChange = () => {
        if(checkRef.current?.checked){
            setPKinds([...pKinds,item]);
        }
        else{
            const kinds = pKinds.filter(infor => infor._id !== item._id);
            setPKinds(kinds);
        }
    }

  return (
    <div className='createMovie_detail-kind-items'>
        <label htmlFor={`${item._id}`}>{item?.name}</label>
        <input onChange={handleChange} ref={checkRef} id={`${item?._id}`} type='checkbox' />
    </div>
  )
}

export default KindBox