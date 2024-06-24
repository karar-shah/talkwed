import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";

interface ItemProps {
  key: number;
  label: string;
}

interface SelectItemsProps {
  items: ItemProps[];
  className?: string; // Making className optional
  placeholder: string;
  label: string;
}

const SelectItems: React.FC<SelectItemsProps> = ({ items, className, placeholder, label }) => {
  return (
    // <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-3">
    //   <Select
    //     label={label}
    //     placeholder={placeholder}
    //     labelPlacement="outside"
    //     className={`bg-white border border-gray-300 ${className} relative px-8 gap-3 w-full inline-flex flex-row items-center shadow-sm tap-highlight-transparent h-10 min-h-10 rounded-md outline-none focus:z-10 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2`}
    //     disableSelectorIconRotation
    //   >
    //     {items.map((item) => (
    //       <SelectItem key={item.key}>
    //         {item.label}
    //       </SelectItem>
    //     ))}
    //   </Select>
    // </div>
    <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        className={`bg-white border border-gray-300 ${className} relative px-3 gap-3 w-full inline-flex items-center shadow-sm tap-highlight-transparent h-10 min-h-10 rounded-md outline-none focus:z-10 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2`}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {items.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItems;
