import { Divider } from "@nextui-org/react"
import Link from "next/link"

const Profile = () => {
  return (
    <>
    <img
            src="vendor2.svg"
            alt="profile picture"
            className="rounded-full size-32 object-cover mx-auto"
          />
          <div className="text-2xl font-bold text-brand-muted2 mt-2 mb-1">
            Smith J.
          </div>
          <div className="text-brand-muted2 font-medium flex items-center justify-center gap-1">
            <img src="/icons/ring.svg" alt="ring" /> Just Said Yes
          </div>
          <Divider className="my-6" />
          <div className="text-lg font-semibold text-brand-muted2 mb-5">
            About me
          </div>
          <p className="text-medium text-[#777777] mb-2">
            You haven&apos;t introduced yourself to the WeddingWire community
            yet.
          </p>
          <Link href="/" className="text-[#6B14A6] underline">
            Tell about your self
          </Link></>
  )
}

export default Profile