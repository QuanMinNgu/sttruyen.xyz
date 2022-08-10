import './App.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from './components/head/Header';
import { PublicRouter } from './routes/Routes';
import Loading from './loading/Loading';
import { useSelector } from 'react-redux';

function App() {

  const auth = useSelector(state => state.auth);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {PublicRouter.map((item,index) => {
            const Page = item.element;
            return item.exact ? <Route key={index} element={<Page />} path={item.path} exact />
            :  <Route key={index} element={<Page />} path={item.path} />
          })}
        </Routes>
      </div>
      <div className='app-pc'>
            <ToastContainer autoClose={1500} style={{fontSize:"1.5rem"}}/>
      </div>
      <div className='app-mobile'>
        <ToastContainer autoClose={1500} position="top-left" style={{fontSize:"1.5rem",width:"50%"}}/>
      </div>
      {auth.Loading && <Loading />}
    </Router>
  );
}

export default App;
