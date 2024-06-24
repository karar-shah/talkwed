import React from "react";

const SearchForm = ({searchPlaceholder, locationPlaceholder}: {searchPlaceholder:string, locationPlaceholder: string}) => {
  return (
    <div className="flex items-center  justify-between rounded-lg h-[60px] bg-white shadow-lg ">
      <div className="h-full w-2/5  focus-within:border-blue-500 focus-within:rounded-s-lg focus-within:border-2">
        <input
          type="text"
          className={`border-0 bg-[url(/icons/Search.svg)] bg-no-repeat focus:outline-none  	 w-full h-full ps-10 pe-6`}
          placeholder={searchPlaceholder}
          style={{ backgroundPosition: "14px 20px" }}
          name=""
          id=""
        />
      </div>
      {/* <div className="bg-black w-[2px] h-[38px] mx-3" /> */}

      <div className=" w-2/5 border-gray-300  py-1  transition duration-300 focus-within:border-2 h-full focus-within:border-blue-500 flex items-center">
        <span>in</span>
        <input
          type="text"
          className="w-full h-full px-2 focus:outline-none"
          placeholder={locationPlaceholder}
          name=""
          id=""
        />
      </div>
      <button className="bg-brand text-white h-full max-w-[107px]  rounded-r-lg  w-1/5">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
