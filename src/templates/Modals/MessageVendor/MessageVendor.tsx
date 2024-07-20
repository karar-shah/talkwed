import Input from "@/common/Input";
import React, { useState } from "react";
import { Textarea } from "@nextui-org/input";
import Button from "@/common/Button";

const MessageVendor = () => {
  const [data, setData] = useState({ message: "", date: "" });
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className=" pt-6 pb-4"
      >
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
            title="Get Deal"
            type="submit"
            btn
            className="px-16 text-center "
          />
        </div>
      </form>
    </div>
  );
};

export default MessageVendor;
