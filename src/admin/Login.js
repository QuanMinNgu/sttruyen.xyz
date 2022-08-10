import React from 'react'
import '~/admin/style.css';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { isFailing, isLogin } from '~/redux/slice/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const responseFacebook = async (e) => {
        try{
            const data = await axios.post('/user/login',{
                token:e.accessToken,
                userId:e.userID
            });
            dispatch(isLogin(data.data));
            toast.success(data.data.msg);
            navigate('/');
        }
        catch(err){
            dispatch(isFailing());
            toast.error(err.response.data.msg);
        }
    }


  return (
    <div className='login_container'>
        <div className='grid wide'>
            <div className='row'>
                <div className='col c-10 c-o-1 m-10 m-o-1 l-12'>
                    <div className='login_wrap'>
                    <FacebookLogin
                        appId="1667570936959499"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login