import ExitModal from "./ExitModal";
import ReviewForm from "./ReviewForm";
import VendorProfile from "./VendorProfile";

const ReviewVendor = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 pb-10">
     <ExitModal />
      <div className="flex mt-5 gap-5 flex-col md:flex-row">
        <VendorProfile />
        <ReviewForm />
      </div>
    </div>
  );
};

export default ReviewVendor;
