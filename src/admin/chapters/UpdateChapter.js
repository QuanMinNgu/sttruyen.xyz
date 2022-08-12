import axios from 'axios';
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '~/admin/style.css';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';

const UpdateChapter = ({setUpdateChapter,item}) => {
    const titleRef = useRef();
    const contentRef = useRef();

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleCreateChapter = async () => {
        if(!titleRef.current.value || !contentRef.current.value){
            return toast.error("Điền hết thông tin đã.");
        }
        const movie = {
            title:titleRef.current.value,
            content:contentRef.current.value,
        };
        dispatch(isLoading());
        try{
            const res = await axios.put(`/chapter/update/${item?._id}`,{...movie},{
                headers:{
                    token:`Bearer ${auth.user?.accessToken}`
                }
            });
            dispatch(isSuccess());
            toast.success(res.data.msg);
        }
        catch(err){
            dispatch(isFailing());
            toast.error(err.response?.data?.msg);
        }
    }


  return (
    <div className='createChapter_container'>
        <div className='createChapter_wrap'>
            <div className='createChapter_title'>
                <h1>Thêm Chapter</h1>
            </div>
            <div className='createChapter_title-input'>
                <label>Title:</label>
                <input defaultValue={item?.title} ref={titleRef} placeholder='Nhập title' type='text' />
            </div>
            <div className='createChapter_content-input'>
                <label>Nội dung: </label>
                <textarea defaultValue={item?.content} ref={contentRef} placeholder='Nhập nội dung'/>
            </div>
            <div className='createChapter_button'>
                <button
                onClick={handleCreateChapter}
                >Tạo Mới</button>
                <button
                onClick={() => {
                    setUpdateChapter(false);
                }}
                >Đóng</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateChapter