import { Link } from 'react-router-dom';
import './style.scss'

const index = () => {
    return (
        <div className='w-[100vw] h-[100vh]'>
             <div className="container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p className='error_desc'>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <Link to="/product" target="blank">
          <button className='big-font'>Back to home <i className="far fa-hand-point-right"></i></button>
        </Link>
      </div>
    </div>
        </div>
    );
};

export default index;