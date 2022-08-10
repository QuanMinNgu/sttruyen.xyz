import React,{useCallback, useRef, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const CreateMovie = ({setCreateProduct}) => {

    // variable
    const [image1,setImage1] = useState('');
    const [image2,setImage2] = useState('');


    const titleRef = useRef();
    const contentRef = useRef();
    const image1Ref = useRef('');
    const image2Ref = useRef('');
    const statusRef = useRef('');
    const count1 = useRef(0);
    const count2 = useRef(0);

    // function 
    const handleCreateMovie = async () => {
        
    }

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
    <div className='createMovie_container'>
        <div className='createMovie_wrap'>
            <div className='createMovie_image-container'>
                <div className='createMovie_image-items' {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className='createMovie_image-detail'>
                        <i className="fa-solid fa-image"></i>
                    </div>
                    <div className='image_create-container'>
                        <img className='image_items' src={image1}/>
                    </div>
                </div>
                <div className='createMovie_image-items' {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className='createMovie_image-detail'>
                        <i className="fa-solid fa-image"></i>
                    </div>
                    <div className='image_create-container'>
                        <img className='image_items' src={image2}/>
                    </div>
                </div>
            </div>
            <div className='createMovie_detail-container'>
                <div className='createMovie_detail-title'>
                    <h1>Tạo Truyện</h1>
                </div>
                <div className='createMovie_detail-getTitle'>
                    <label>Nhập Title:</label>
                    <input ref={titleRef} placeholder='Nhập Title' type='text' />
                </div>
                <div className='createMovie_detail-getContent'>
                    <label>Content:</label>
                    <textarea placeholder='Nhập nội dung' ref={contentRef}/>
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
                        setCreateProduct(false);
                    }}
                    className='closeButton'>Đóng</button>
                </div>
            </div>
            <div onClick={() => {
                setCreateProduct(false);
            }} className='createMovie_times'>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
  )
}

export default CreateMovie