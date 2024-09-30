import { Button } from "@nextui-org/react";

const DeleteMessage = () => {
  return (
    <div className="text-[#5A5A5A] mt-3 px-2">
      <h2 className="font-semibold text-[22px] text-center">Delete Message</h2>
      <p className="text-lg text-center">
        Are you sure you want to remove this message? It will be deleted
        permanently.
      </p>
      <div className="flex items-center justify-center space-x-3.5 mb-3.5 mt-5">
        <Button
          variant="bordered"
          size="lg"
          className="text-lg text-brand border border-brand px-12 rounded-lg"
        >
          Cancel
        </Button>
        <Button
          variant="solid"
          size="lg"
          className="text-lg bg-brand text-white px-12 rounded-lg"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteMessage;
