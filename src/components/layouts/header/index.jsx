import { Breadcrump } from "@components/ui";
import { Search } from "@form";
import { Button } from "@components/ui";
import { Indicators } from "@components/ui";
import { PageController } from "@components/ui";
import "./style.scss";

const index = () => {
  return (
    <div className="header">

      <Breadcrump />

      <div className="main-actions-wrapper ">
        <div className="flex items-center justify-between">
          <Search />
          <div className="flex items-center gap-[25px]">
            <Button className="btn px-[25px] py-[10px]">
              <span>Export</span>
              <i className="ml-[10px] bi bi-file-arrow-up"></i>
            </Button>
            <Button className="btn px-[25px] py-[10px]">
              <span>Print</span>
              <i className="ml-[10px] bi bi-printer"></i>
            </Button>
            <Button className="btn px-[25px] py-[10px]">
              <span>Create Folder</span>
              <i className="ml-[10px] bi bi-plus-square"></i>
            </Button>
          </div>
        </div>
      <Indicators />
      <PageController />
      </div>


    </div>
  );
};

export default index;
