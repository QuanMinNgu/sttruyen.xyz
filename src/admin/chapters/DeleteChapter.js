import axios from 'axios';
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '~/admin/style.css';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';

const DeleteChapter = ({setDeleteChapter,item,id}) => {

    const titleRef = useRef();
    const dispath = useDispatch();
    const auth = useSelector(state =>  state.auth);

    const handleDeleteChapter = async () => {
        dispath(isLoading());
        try{
            const res = await axios.post(`/chapter/delete/${id}`,{
                title:titleRef.current.value
            },{
                headers:{
                    token:`Bearer ${auth.user?.accessToken}`
                }
            });
            dispath(isSuccess());
            toast.success(res.data?.msg);
            setDeleteChapter(false);
        }
        catch(err){
            toast.error(err.response?.data?.msg);
            dispath(isFailing());
        }
    }

  return (
        <div className='deleteChapter_container'>
            <div className='deleteChapter_wrap'>
                <div className='deleteChapter_title'>
                    <span>Bạn có thực sự muốn xóa chương {item}?</span>
                </div>
                <div className='deleteChapter_input'>
                    <input ref={titleRef} type='password' />
                </div>
                <div className='deleteChapter_button-container'>
                    <button
                    onClick={handleDeleteChapter}
                    >Xóa</button>
                    <button
                    onClick={() => {
                        setDeleteChapter(false);
                    }}
                    >Đóng</button>
                </div>
            </div>
        </div>
  )
}

export default DeleteChapter