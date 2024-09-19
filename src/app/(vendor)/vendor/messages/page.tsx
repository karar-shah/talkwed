"use client";

import { useState } from "react";
import MessagaesScreen from "./_components/MessagesScreen";
import NoMessageScreen from "./_components/NoMessageScreen";

const Page = () => {
  const [showMessagesScreen, setShowMessagesScreen] = useState(false);
  return (
    <>
      {!showMessagesScreen ? (
        <>
          <NoMessageScreen  setShowMessagesScreen={setShowMessagesScreen}/>
        </>
      ) : (
        <MessagaesScreen />
      )}
    </>
  );
};
export default Page;
