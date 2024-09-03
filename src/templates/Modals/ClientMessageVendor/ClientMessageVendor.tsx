import Button from "@/common/Button";
import Input from "@/common/Input";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";

const ClientMessageVendor = () => {
  const [data, setData] = useState({ message: "", date: "" });
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="pt-2 pb-5"
      >
        <h2 className="font-semibold text-xl text-[#353535]">Message vendor</h2>
        <div className="text-[#353535]">Banquet Halls</div>
        <hr className="mt-3 mb-7"/>
        <div className="mb-10">
          <Textarea
            classNames={{ inputWrapper: "input-border" }}
            label="Message"
            variant="bordered"
            labelPlacement="outside"
            type="textarea"
            isRequired
            required
            onChange={(event) =>
              setData({ ...data, message: event.target.value })
            }
            placeholder="Type your message here..."
          />
        </div>
        <div className="mb-5">
          <Input
            label="Event Date"
            variant="bordered"
            isRequired
            labelPlacement="outside"
            type="date"
            required
            onChange={(event) => setData({ ...data, date: event.target.value })}
            placeholder="Type your message here..."
          />
        </div>
        <div className="flex justify-end w-full">
          <Button
            title="Send Message"
            type="submit"
            btn
            className="px-10 text-center "
          />
        </div>
      </form>
    </div>
  );
};

export default ClientMessageVendor;
