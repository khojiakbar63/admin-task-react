import {StatusBtn, ActiveBtn} from '@ui'
import { Outlet } from 'react-router';
import './style.scss'


const index = () => {
    return (
        <div className='main-body'>
           <Outlet/>
        </div>
    );
};

export default index;