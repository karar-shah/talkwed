import React from 'react'
import { Input, InputProps } from "@nextui-org/react";

const InputField: React.FC<InputProps> = (props) => {
  return (
    <Input {...props} />
  )
}

export default InputField
