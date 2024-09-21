import KeyMatricCardsContainer from "../KeyMatricCardsContainer";


export const ChatsNotDisplayed = () => {
 
  return (
    <div className="max-lg:px-4 lg:pl-8 pt-5 lg:pr-2 max-lg:flex max-lg:flex-col-reverse">
     <KeyMatricCardsContainer />
      <div className="hidden lg:flex justify-center">
        <div className="flex flex-col justify-center items-center py-28 lg:w-1/2 text-center">
          <img src="/icons/image 135(1).svg" alt="" />
          <p className="font-bold text-lg text-[#464646]">
            Click on a chat to view it
          </p>
          <p className="font-medium text-[#6A6A6A]">
            Here you can send and receive messages from vendors, venue and
            wedding forum members
          </p>
        </div>
      </div>
    </div>
  );
};
