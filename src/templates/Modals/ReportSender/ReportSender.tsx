import { Button, Checkbox, Textarea } from "@nextui-org/react";

const ReportSender = () => {
  const blockReason = [
    "Spam or unsolicited messages.",
    "Harassment or abusive language.",
    "Irrelevant inquiries.",
    "Excessive negotiation or haggling.",
    "Unprofessional behavior.",
    "Requests for illegal services.",
  ];
  return (
    <div className="pt-3 pb-6">
      <h2 className="font-semibold text-[22px] text-[#5A5A5A]">
        Report Sender
      </h2>
      <div className="border-t border-[#E4E4E4] my-3.5"></div>
      <p className="font-semibold text-lg text-[#686868]">
        Describe the reason for blocking this sender
      </p>
      <div className="flex flex-col space-y-2.5 mt-7">
        {blockReason.map((item) => (
          <div className="flex space-x-3.5 items-center " key={item}>
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="font-medium text-[#6C6C6C]">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="text-[#6C6C6C] font-semibold mb-1">
          Others
        </label>
        <Textarea
          id="message"
          variant="bordered"
          placeholder="Write the reason..."
          type="text"
          className={"my-2 text-brand-heading "}
          classNames={{
            inputWrapper:
              "input-wrapper input-border border border-[#bfbfbf] px-3 py-2 h-20 flex items-start",
            input: "input text-base max-md:text-sm ",
          }}
        />
      </div>
      <Button
        variant="solid"
        size="lg"
        className="text-lg bg-brand text-white px-12 mt-11 rounded-lg"
      >
        Report & Block
      </Button>
    </div>
  );
};

export default ReportSender;
