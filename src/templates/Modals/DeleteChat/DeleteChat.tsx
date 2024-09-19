import { Button } from "@nextui-org/react";

const DeleteChat = () => {
  return (
    <div className="text-[#5A5A5A] mt-3 px-2">
      <h2 className="font-semibold text-[22px] ">Delete Chat</h2>
      <p className="text-lg">
        Are you sure you want to remove this chat? It will be deleted
        permanently.
      </p>
      <div className="flex space-x-3.5 mb-3.5 mt-5">
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

export default DeleteChat;
