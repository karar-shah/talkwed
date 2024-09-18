"use client";
import SwitchContainer from "./SwitchContainer";
const emailNotificatoinsTitles = [
  "Communications regarding Campus educational content.",
  "Training emails during your first week.",
  "Promotional communications about our products/services, events, giveaways, and exclusive discounts.",
  "Receive an email when someone sends you a message",
];

const Notifications = () => {
  return (
    <div className="space-y-9">
      <h2 className="font-bold text-[#444444] text-2xl">Notifications</h2>
      <div className="w-full border border-[#DADADA] rounded-md overflow-hidden pb-10">
        <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] pt-3 pb-3.5 px-12">
          Email Notifications
        </h3>
        <div className="px-12 pt-5 text-[#6C6C6C] space-y-2.5">
          <p className="font-semibold  text-medium mb-6">
            Receive an email when someone
          </p>
          {emailNotificatoinsTitles.map((title, index) => (
            <SwitchContainer key={index} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
