const TextWithLine = ({ text }: { text: string }) => (
  <div className="flex items-center w-full">
    <p className="text-[#7C7C7C] font-semibold whitespace-nowrap mr-5">
      {text}
    </p>
    <div className="flex-grow">
      <div className="border-t border-[#B7B6B6] w-full"></div>
    </div>
  </div>
);

export default TextWithLine;
