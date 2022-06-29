import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello world</h1>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
