import { Input } from "@nextui-org/react";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  size?: "sm" | "md" | "lg";
}
const InputCustom = ({ id,label, placeholder, size = "md" }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className={"font-semibold text-base text-[#6C6C6C]"}>
        {label}
      </label>
      <Input
        id={id}
        placeholder={placeholder}
        size={size}
        variant="bordered"
        type="text"
        label=""
        className={"my-2 text-brand-heading "}
        classNames={{
          inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
          input: "input text-lg max-md:text-sm",
        }}
      />
    </div>
  );
};

export default InputCustom;
