import './style.scss';

const index = ({text, children, className}) => {
    return (
        <button  className={className ? className : 'status' }>
            {text ? text : (children ? children : 'Button')}
        </button>
    );
};

export default index;