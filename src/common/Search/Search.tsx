import React from "react";

const Search = ({ placeholder = "" }: { placeholder?: string }) => {
  return (
    <div className="flex items-center  justify-between rounded-lg h-[60px] bg-white shadow-lg ">
      <div className="h-full flex-1  focus-within:border-blue-500 focus-within:rounded-s-lg focus-within:border-2">
        <input
          type="text"
          className={`border-0 bg-[url(/icons/Search.svg)] bg-no-repeat focus:outline-none  	 w-full h-full ps-10 pe-6`}
          placeholder={placeholder}
          style={{ backgroundPosition: "14px 20px" }}
          name=""
          id=""
        />
      </div>

      <button className="bg-brand text-white h-full w-[107px]  rounded-r-lg  ">
        Search
      </button>
    </div>
  );
};

export default Search;
