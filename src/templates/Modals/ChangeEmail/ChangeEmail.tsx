import { Button, Input } from "@nextui-org/react"

const ChangeEmail = () => {
  return (
    <div className="px-3 py-4">
      <h2 className="font-semibold text-[22px] text-[#464646]">Change Email</h2>
      <div className="border-t bprder-[#CECECE] mt-4 mb-3.5"></div>
      <div>
        <label htmlFor="email" className="text-[#6C6C6C] font-semibold mb-6">
          Add any email that you&apos;d like to receive notifications about new
          messages.
        </label>
        <Input
          name="email"
          placeholder="smith@gmail.com"
          size="md"
          type="text"
          variant="bordered"
          className={"my-2"}
          classNames={{
            input: "text-lg max-md:text-sm ",
            inputWrapper:
              "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
          }}
        />
      </div>
      <Button
        variant="solid"
        size="lg"
        className="bg-brand text-white font-medium text-lg rounded-lg mt-14 mb-5"
      >
        Add Email
      </Button>
    </div>
  )
}

export default ChangeEmail