import "./style.scss";

const index = () => {
  return (
    <>
      <label htmlFor="globalSearch" >
        <i className="bi bi-search"></i>
        <input className="py-[12px] px-[70px] w-[700px]" id="globalSearch" type="search" placeholder="Search" />
        <i className="bi bi-sliders"></i>
      </label>
    </>
  );
};

export default index;
