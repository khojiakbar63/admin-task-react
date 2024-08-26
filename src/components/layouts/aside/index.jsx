import { NavLink, useNavigate } from "react-router-dom";
import { aside_navigation } from "@mocks/navigation";
import { Button } from "@components/ui";
import { logout } from "@/logout";
import "./style.scss";

const index = () => {
  



  const back = useNavigate()

  return (
    <aside>
      <nav>
        <ul className="list">
          {aside_navigation.map((item, index) => (
            <li  key={item.id}>
              <NavLink to={item.path} className='list--item mb-[12px]'>
                <small className={`list--item-icon bi ${item.icon}`}></small>
                <small className="list--item-title">{item.title}</small>
              </NavLink>
            </li>
          ))}
        </ul>

       <Button func={()=>logout()} text='Log Out' type='button' className='border-orange-500 py-[4px] px-[25px] mt-[100px]'/>     
      </nav>


    </aside>
  );
};

export default index;
