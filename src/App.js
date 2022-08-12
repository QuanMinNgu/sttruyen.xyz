import './App.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from './components/head/Header';
import { PublicRouter } from './routes/Routes';
import Loading from './loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isSuccess } from './redux/slice/auth';
import Footer from './components/footer/Footer';
import { useRef } from 'react';

function App() {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(isSuccess());
    },[]);

    const cache = useRef({});



  return (
    <Router>
        <Header />
            <Routes>
            {PublicRouter.map((item,index) => {
                const Page = item.element;
                return item.exact ? <Route key={index} element={<Page cache={cache}/>} path={item.path} exact />
                :  <Route key={index} element={<Page cache={cache}/>} path={item.path} />
            })}
            </Routes>
            <Footer />
        <div className='app-pc'>
                <ToastContainer autoClose={1500} style={{fontSize:"1.5rem"}}/>
        </div>
        <div className='app-mobile'>
            <ToastContainer autoClose={1500} position="top-left" style={{fontSize:"1.5rem",width:"50%"}}/>
        </div>
        {auth.loading && <Loading />}
    </Router>
  );
}

export default App;
