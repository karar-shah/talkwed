import { useModalAction } from "@/context/modal.context";

const AddWaterMark = () => {
  const { openModal, closeModal } = useModalAction();
  return (
    <div className="py-4 px-3">
      <h1 className="text-[22px] text-[#464646] font-semibold">Watermark</h1>
      <div className="flex flex-wrap -m-2.5 mt-12 mb-14">
        <div className="p-2.5 w-full lg:w-1/2" onClick={closeModal}>
          <div className="bg-[#F3F3F3] flex items-start space-x-3 py-5 px-4">
            <img src="/icons/Vector.svg" alt="T" className="mt-1" />
            <div className="space-y-1">
              <h3 className="text-[#6B6B6B] font-semibold">Text watermark</h3>
              <p className="text-lg text-[#808080] font-medium">
                Enter custom text to be used as your watermark
              </p>
            </div>
          </div>
        </div>

        <div
          className="p-2.5 w-full lg:w-1/2"
          onClick={() =>
            openModal({
              title: "Add watermark image",
              modal: "UPLOAD_WATERMARK_IMAGE",
              bodyOnly: true,
              size:'4xl'
            })
          }
        >
          <div className="bg-[#F3F3F3] flex items-start space-x-3 py-5 px-4">
            <img src="/icons/Image_01.svg" alt="T" className="mt-1" />
            <div className="space-y-1">
              <h3 className="text-[#6B6B6B] font-semibold">
                Upload watermark image
              </h3>
              <p className="text-lg text-[#808080] font-medium">
                Upload your own watermark image as the watermark here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWaterMark;
