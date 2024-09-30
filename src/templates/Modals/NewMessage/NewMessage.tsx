import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";

const NewMessage = () => {
  return (
    <div className="p-3">
      <h2 className="text-[22px] font-semibold text-[#464646]">New Message</h2>
      <div className="space-y-6">
        <Select
          items={friends}
          placeholder="Select form friends"
          label="Recipient"
          labelPlacement="outside"
          className=""
          variant="bordered"
          classNames={{
            trigger:
              "mt-8 trigger p-2 h-fit w-full rounded border border-[#DCDCDC]",
            value: "value text-base max-md:text-sm",
          }}
        >
          {(friend) => <SelectItem key={friend.key}>{friend.label}</SelectItem>}
        </Select>

        <Textarea
          id="description"
          variant="bordered"
          placeholder="Write message.."
          label="Message"
          minRows={6}
          labelPlacement="outside"
          type="text"
          className={"mt-2 text-brand-heading "}
          classNames={{
            inputWrapper:
              "input-wrapper  border border-[#bfbfbf] px-5 py-2 rounded-md",
            input: "input text-base max-md:text-sm",
          }}
        />
      </div>
      <div className="w-full flex items-center justify-end">
        <Button
          variant="solid"
          className="text-white ml-auto text-lg bg-brand rounded-lg py-4 px-10 min-h-[50px] font-medium mt-8 mb-4"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};
export const friends = [
  { key: "a", label: "John Doe" },
  { key: "b", label: "Yoshi" },
];

export default NewMessage;
