import { useModalAction } from "@/context/modal.context";
import { Button, Input } from "@nextui-org/react";

const CreateNewSet = () => {
  const { closeModal } = useModalAction();
  return (
    <div>
      <h2 className="text-[#6C6C6C] font-semibold">Create new set</h2>
      <Input
        name="setName"
        placeholder="Enter set name"
        size="md"
        type="text"
        variant="bordered"
        className={"mt-4 mb-6"}
        classNames={{
          input: "text-base max-md:text-sm ",
          inputWrapper: "border border-[#BFBFBF] rounded-md px-2 py-4 h-fit",
        }}
      />
      <Button
        variant="solid"
        className="w-full py-3.5 h-[50px] max-w-[130px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
        onClick={() => closeModal()}
      >
        Create
      </Button>
    </div>
  );
};

export default CreateNewSet;
