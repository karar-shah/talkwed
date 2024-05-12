import React from 'react'

const SearchForm = () => {
  return (
    <div className="flex items-center  rounded-lg h-[60px] bg-white ">
    <input
      type="text"
      className={`border-0 bg-[url(/icons/Search.svg)] bg-no-repeat	 w-full h-full ps-10`}
      placeholder="Search for vendors"
      style={{ backgroundPosition: "14px 20px" }}
      name=""
      id=""
    />
    <div className="bg-black w-[2px] h-[38px] mx-3" />
    <input
      type="text"
      className="w-full h-full px-2"
      placeholder="in    Location"
      name=""
      id=""
    />
    <button className="bg-brand text-white h-full max-w-[107px] w-full rounded-r-lg">
      Search
    </button>
  </div>
  )
}

export default SearchForm