import axios from 'axios';
import React,{useCallback, useEffect, useRef, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import KindBox from './KindBox';
import '~/admin/style.css';

const UpdateMovie = ({setUpdateMovie,item}) => {

    const [image1,setImage1] = useState('');
    const [image2,setImage2] = useState('');
    const [kinds,setKinds] = useState([]);
    const [pKinds,setPKinds] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if(item){
            setPKinds(item?.kinds);
        }
    },[item]);

    const titleRef = useRef();
    const contentRef = useRef();
    const image1Ref = useRef('');
    const image2Ref = useRef('');
    const statusRef = useRef('');
    const count1 = useRef(0);
    const count2 = useRef(0);
    const auth = useSelector(state => state.auth);

    // function 
    const handleCreateMovie = async () => {
        if(!titleRef.current.value || !contentRef.current.value  || pKinds.length === 0){
            return toast.error('Vui lòng điền hết thông tin (bao gồm cả ảnh.)');
        }
        let urlImage1 = item?.image1;
        let urlImage2 = item?.image2;
        if(image1Ref.current){
            const formData = new FormData();
            formData.append('file',image1Ref.current[0]);
            formData.append("upload_preset","sttruyenxyz");
            dispatch(isLoading());
            try{
                const res = await axios.post("https://api.cloudinary.com/v1_1/sttruyen/image/upload",formData);
                urlImage1 = res.data.url;
            }   
            catch(err){
                return dispatch(isFailing());
            }
            dispatch(isSuccess());
        }
        if(image2Ref.current){
            const formData2 = new FormData();
            formData2.append('file',image2Ref.current[0]);
            formData2.append("upload_preset","sttruyenxyz");
            dispatch(isLoading());
            try{
                const res = await axios.post("https://api.cloudinary.com/v1_1/sttruyen/image/upload",formData2);
                urlImage2 = res.data.url;
            }   
            catch(err){
                return dispatch(isFailing());
            }
            dispatch(isSuccess());
        }
        const movie = {
            title:titleRef.current.value,
            content:contentRef.current.value,
            image1:urlImage1,
            image2:urlImage2,
            status:statusRef.current.checked,
            kinds:pKinds
        }

        try{
            const res = await axios.put(`/product/update/${item?.slug}`,{...movie},{
                headers:{
                    token:`Bearer ${auth.user.accessToken}`
                }
            });
            dispatch(isSuccess());
            toast.success(res.data.msg);
        }
        catch(err){
            toast.error(err.response.data.msg);
            dispatch(isFailing());
        }
    }


    //api

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
    },[]);
    //other
    const onDrop = useCallback(acceptedFiles => {
        const url = URL.createObjectURL(acceptedFiles[0]);
        if(count1.current === count2.current){
            count1.current = count1.current + 1;
            image1Ref.current = acceptedFiles;
            setImage1(url);
        }
        else{
            count2.current = count2.current + 1;
            image2Ref.current = acceptedFiles;
            setImage2(url);
        }
    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className='updateMovie_container'>
        <div className='createMovie_wrap'>
            <div className='createMovie_image-container'>
                <div className='createMovie_image-items' {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className='createMovie_image-detail'>
                        <i className="fa-solid fa-image"></i>
                    </div>
                    <div className='image_create-container'>
                        <img className='image_items' src={image1 || item?.image1}/>
                    </div>
                </div>
                <div className='createMovie_image-items' {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className='createMovie_image-detail'>
                        <i className="fa-solid fa-image"></i>
                    </div>
                    <div className='image_create-container'>
                        <img className='image_items' src={image2 || item?.image2}/>
                    </div>
                </div>
            </div>
            <div className='createMovie_detail-container'>
                <div className='createMovie_detail-title'>
                    <h1>Sửa Truyện</h1>
                </div>
                <div className='createMovie_detail-getTitle'>
                    <label>Nhập Title:</label>
                    <input defaultValue={item?.title} ref={titleRef} placeholder='Nhập Title' type='text' />
                </div>
                <div className='createMovie_detail-getContent'>
                    <label>Content:</label>
                    <textarea defaultValue={item?.content} placeholder='Nhập nội dung' ref={contentRef}/>
                </div>
                <div className='createMovie_detail-kinds'>
                    {kinds.map(infor =>
                        <KindBox totalKind={item?.kinds} key={infor?._id + 'kinds'} item={infor} setPKinds={setPKinds} pKinds={pKinds}/>
                    )}
                </div>
                <div className='createMovie_detail-getStatus'>
                    <label htmlFor='getStatus'>Hoàn thành ?</label>
                    <input ref={statusRef} id='getStatus' type='checkbox' />
                </div>
                <div className='createMovie_detail-button'>
                    <button
                    onClick={handleCreateMovie}
                    className='createButton'>Tạo Mới</button>
                    <button 
                    onClick={() => {
                        setUpdateMovie(false);
                    }}
                    className='closeButton'>Đóng</button>
                </div>
            </div>
            <div onClick={() => {
                setUpdateMovie(false);
            }} className='createMovie_times'>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
  )
}

export default UpdateMovie