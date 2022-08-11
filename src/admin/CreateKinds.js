import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '~/admin/style.css';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';

const CreateKinds = ({setCreateKind}) => {

    const [deleteItem,setDeleteItem] = useState('');

    const [kinds,setKinds] = useState([]);

    const [updateTimes,setUpdateTimes] = useState(false);

    // other
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    //variable
    const titleRef = useRef();


    //function
    const handleCreateKind = async () => {
        if(!titleRef.current.value){
            return toast.error('Vui lòng điền đầy đủ thông tin.');
        }
        dispatch(isLoading());
        try{
            const res = await axios.post('/kind/create',{
                name:titleRef.current.value
            },{
                headers:{
                    token:`Bearer ${auth.user.accessToken}`
                }
            });
            dispatch(isSuccess());
            toast.success(res.data.msg);
            titleRef.current.value = '';
            setUpdateTimes(!updateTimes);
        }
        catch(err){
            dispatch(isFailing());
            toast.error(err.response.data.msg);
        }
    }

    const handleDeleteKind = async () => {
        try{
            const res = await axios.delete(`/kind/delete/${deleteItem._id}`,{
                headers:{
                    token:`Bearer ${auth.user.accessToken}`
                }
            });
            dispatch(isSuccess());
            toast.success(res.data.msg);
            setDeleteItem('');
            setUpdateTimes(!updateTimes);
        }
        catch(err){
            dispatch(isFailing());
            toast.error(err.response.data.msg);
        }
    }

    // api get
    useEffect(() => {
        let here = true;
        dispatch(isLoading());
        axios.get('/kind')
            .then(res => {
                if(!here){
                    dispatch(isSuccess());
                    return;
                }
                dispatch(isSuccess());
                setKinds(res.data.kind);
            })
            .catch(() => {
                dispatch(isFailing());
            })
        return () => {
            here = false;
        }
    },[updateTimes]);

  return (
    <div className='createKind_container'>
        <div className='createKind_wrap'>
            <div className='createKind_title'>
                <h1>Tạo Thể Loại</h1>
            </div>
            {deleteItem &&
            <div className='createKind_confirm'>
                <span>Bạn có thực sự muốn xóa {deleteItem?.name}?</span>
                <div className='createKind_confirm-button'>
                    <button
                    onClick={handleDeleteKind}
                    >Xóa</button>
                    <button
                    onClick={() => {
                        setDeleteItem('');
                    }}
                    >Hủy</button>
                </div>
            </div>}
            <div className='createKind_default-kinds'>
                {kinds.map(item => 
                    <div key={item._id} className='createKind_default-items'>
                        {item?.name}
                        <div onClick={() => {
                            setDeleteItem(item);
                        }} title='xoa' className='createKind_default-item-delete'>
                            Xóa
                        </div>
                    </div>
                )}
            </div>
            <div className='createKind_default-createContainer'>
                <input ref={titleRef} className='createKind_default-createInput' type='text' placeholder='Tên của thể loại'/>
                <div className='createKind_button'>
                    <button 
                    onClick={handleCreateKind}
                    className='createButton'>Tạo Mới</button>
                    <button
                    onClick={() => {
                        setCreateKind(false);
                    }}  
                    className='closeButton'>Đóng</button>
                </div>
            </div>
            <div onClick={() => {
                setCreateKind(false);
            }} className='createKind_times'>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
  )
}

export default CreateKinds