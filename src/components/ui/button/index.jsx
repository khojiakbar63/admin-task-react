import "./style.scss";

const index = ({ className, text, children, func, type }) => {
  return (
    <button
      type={type && type}
      onClick={() => func && func()}
      className={className && className}
    >
      {text ? text : children ? children : "Button"}
    </button>
  );
};

export default index;
