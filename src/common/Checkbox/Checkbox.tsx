import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ariaLabel?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id, name, label, onChange, ariaLabel, ...props
}) => {
  const computedAriaLabel = ariaLabel || label.replaceAll(' ', '-');
  return (
    <div className="relative flex items-center "> 
      <div className="flex h-8 capitalize items-center">
        <input
          id={id || name}
          aria-label={computedAriaLabel}
          name={name}
          {...props}
          type="checkbox"
          onChange={onChange}
          className="h-5 w-5 rounded border-gray-300 cursor-pointer capitalize text-[#5C148C] focus:ring-[#5C148C]"
        />
      </div>
      {label && <div className="ml-3 leading-6">
        <label 
          aria-label={computedAriaLabel} 
          dangerouslySetInnerHTML={{ __html: label }} 
          htmlFor={id || name} 
          className={`${props.checked ? 'font-bold' : 'font-normal'} text-gray-900`} 
        />
      </div>}
    </div>
  )
}

export default Checkbox;
