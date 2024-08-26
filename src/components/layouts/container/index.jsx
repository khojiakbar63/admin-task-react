import './style.scss'

const index = ({container, children}) => {
    return (
        <div className={container}>
            {children}
        </div>
    );
};

export default index;