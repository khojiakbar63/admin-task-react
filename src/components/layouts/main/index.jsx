import { MainHeader, MainBody, MainFooter } from '@components/layouts';
import './style.scss'


const index = () => {
    return (
        <main>
           <div className='main-container'>
            <div className=' bg-[#F7F8FA]'>
                <MainHeader/>
                <MainBody/>
                <MainFooter/>
            </div>
           </div>
        </main>
    );
};

export default index;