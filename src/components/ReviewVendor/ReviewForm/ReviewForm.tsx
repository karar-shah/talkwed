"use client";
import Button from "@/common/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useState } from "react";
import { FirstPart } from "./FirstPart";
import { SecondPart } from "./SecondPart";

const ReviewForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Card className="w-full md:w-9/12">
      <CardHeader className="font-semibold text-2xl text-brand-heading px-8 py-6 bg-[#FBFBFB] border">
        Rate Vendor{" "}
        <span className="text-brand-muted2 text-base ml-2">
          ({activeStep + 1} of 2)
        </span>
      </CardHeader>
      <CardBody className="px-8">
        {activeStep === 0 ? <FirstPart /> : <SecondPart />}
      </CardBody>
      <CardFooter className="px-8 py-3 bg-[#FBFBFB] border">
        <Button
          title="Back"
          btn
          className={`border-none bg-transparent text-brand font-semibold ${
            activeStep === 0 && "hidden"
          }`}
          onClick={() => setActiveStep(0)}
        />
        <Button
          title={activeStep === 0 ? "Next" : "Submit"}
          btn
          variant="file"
          className="ml-auto px-8 py-2"
          onClick={() => setActiveStep(1)}
        />
      </CardFooter>
    </Card>
  );
};

export default ReviewForm;
