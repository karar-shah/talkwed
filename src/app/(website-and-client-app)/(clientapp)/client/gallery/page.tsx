import Button from "@/common/Button";
import { Input } from "@nextui-org/react";

const page = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-[999] bg-white flex items-center justify-center">
      <div className=" px-5 w-full md:w-6/12 mx-auto border rounded-[10px] border-[#B1B1B1] space-y-9 pt-5 pb-12">
        <div className="text-center space-y-6 ">
          <div className="lg:px-16">
            <h2 className="text-[26px] font-medium text-[#585858]">
              Get access to the Gallery
            </h2>
            <p className="text-[#666666]">
              To access the file, please enter your email address. This will
              grant you immediate access to the document.
            </p>
          </div>
          <div className="border-t border-[#CACACA]"></div>
        </div>

        <div className="lg:px-16">
          <div className="grid  space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-[#5F5F5F] font-medium text-medium mb-1.5"
              >
                Email
              </label>
              <Input
                name="email"
                placeholder="Enter your email"
                size="md"
                type="text"
                variant="bordered"
                className={"my-2"}
                classNames={{
                  input: "text-lg max-md:text-sm ",
                  inputWrapper:
                    "border border-[#A8A8A8] rounded-md py-3.5 px-[18px] h-fit",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="Password"
                className="text-[#5F5F5F] font-medium text-medium mb-1.5"
              >
                Password
              </label>
              <Input
                name="password"
                placeholder="Enter password "
                size="md"
                type="text"
                variant="bordered"
                className={"my-2"}
                classNames={{
                  input: "text-lg max-md:text-sm ",
                  inputWrapper:
                    "border border-[#A8A8A8] rounded-md py-3.5 px-[18px] h-fit",
                }}
              />
            </div>
          </div>
          <Button
            title="Continue"
            btn={false}
            href="/client/gallery/my-gallery"
            className="bg-brand text-white text-lg w-full flex items-center justify-center py-3.5 mt-10 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
