import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const MapLocation = ({ address }: { address: string }) => {
  return (
    <div className="space-y-4">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9215570064057!2d-74.03196512315414!3d40.63161187140585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245587212f613%3A0xb14fb5fd304eff0e!2s238%20Bay%20Ridge%20Pkwy%2C%20Brooklyn%2C%20NY%2011209%2C%20USA!5e0!3m2!1sen!2s!4v1720943294270!5m2!1sen!2s"
          width="100%"
          height="450"
          title="Talkzee"
          style={{ border: "none" }}
          //   allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="space-x-4 text-[#505050] text-base font-medium flex items-center border-[#6b14a630] border rounded p-2 bg-[#6b14a60a] w-full px-4">
        <IoLocationOutline />
        <span>{address}</span>
      </div>
    </div>
  );
};

export default MapLocation;
