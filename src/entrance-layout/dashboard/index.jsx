import { useHref, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Aside } from "@components/layouts";
import { Outlet } from "react-router";
const index = () => {
  const href = useHref();
  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = localStorage.getItem("token");
    if (!isAuth) {
      navigate("/auth-page");
    }
  }, [href]);

  return (
    <div className="flex">
      <Aside />
      <div className="w-[100vw] h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default index;
