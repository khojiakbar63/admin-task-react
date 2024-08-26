import { Header } from "@components/layouts";
import { Main } from "@components/layouts";
import "./style.scss";

const index = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default index;
