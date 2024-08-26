import { main_header } from "@/mocks/main-header";
import { Checkbox } from "@form";
import "./style.scss";

const index = () => {
  return (
    <div className="main-header">
      <ul className="list flex items-center justify-between">
        <Checkbox/>
        {main_header.length &&
          main_header.map((item) => (
            <li key={item.id} className="list--item flex items-center py-[12px] px-[32px] border-none hover:border-none">
              <p>{item.title && item.title}</p>
              <i className={`bi ${item.icon}`}></i>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default index;
