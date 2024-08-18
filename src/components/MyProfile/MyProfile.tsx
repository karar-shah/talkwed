import Breadcrumb from "@/common/Breadcrumb";
import { Divider } from "@nextui-org/react";
import DetailsSection from "./DetailsSection";
import Profile from "./Profile";

let list = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "My Profile",
    link: "/myprofile",
    active: true,
  },
];
const MyProfile = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <Breadcrumb list={list} />
      <Divider className="mt-6 mb-12" />
      <div className="flex mt-12 gap-5 flex-col md:flex-row">
        <div className="w-full md:w-3/12 text-center border pt-5 pb-20 px-2 max-h-[470px]">
          <Profile />
        </div>
        <div className="w-full md:w-9/12">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
