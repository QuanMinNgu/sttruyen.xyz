import React from 'react'
import '~/admin/style.css';
import FacebookLogin from 'react-facebook-login';

const Login = () => {

    const responseFacebook = (e) => {
        console.log(e);
    }


  return (
    <div className='login_container'>
        <div className='grid wide'>
            <div className='row'>
                <div className='col c-10 c-o-1 m-10 m-o-1 l-12'>
                    <div className='login_wrap'>
                    <FacebookLogin
                        appId="1746062642398090"
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