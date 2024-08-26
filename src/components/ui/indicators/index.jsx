import { NavLink } from "react-router-dom";
import { indicators } from "@mocks/indicator";

import "./style.scss";

const index = () => {
  return (
    <>
      <div className="indicators">
        {indicators.length &&
          indicators.map((item) => (
            <div className="indicators--item" key={item.id}>
              <NavLink className="indicators--item-wrapper">
                <p className="indicators--item-wrapper-title">{item.title}</p>
                <p className="indicators--item-wrapper-number">
                  {item.quantity}
                </p>
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
};

export default index;
