import './style.scss';

const index = ({className}) => {
    return (
        <button className='active-btn'>
            <span>Active</span>
            <i className="bi bi-chevron-compact-down"></i>
        </button>
    );
};

export default index;