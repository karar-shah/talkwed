import Typography from "@/common/Typography";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

const VendorProfile = () => {
  return (
    <Card className="w-full  md:w-3/12">
        <CardHeader className="font-semibold text-lg text-brand-heading p-6">
          Tell other couple about your experience
        </CardHeader>
        <CardBody className="px-6">
          <div className="">
            <img src="/vendor3.svg" alt="vendor" />
            <Typography
              component="p"
              title="Dreamlife Photos & Video"
              className="py-1"
            />
            <div className="text-xs font-semibold text-[#888888]">
              New York, NY
            </div>
          </div>
        </CardBody>
      </Card>
  )
}

export default VendorProfile