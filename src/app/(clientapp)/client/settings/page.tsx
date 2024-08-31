"use client";
import { CalendarDate, Time } from "@internationalized/date";
import {
  Button,
  DateInput,
  Input,
  Textarea,
  TimeInput,
} from "@nextui-org/react";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="flex flex-wrap -mx-3 pt-5 pb-20">
        <div className="w-full md:w-3/12 px-3"></div>
        <div className="w-full md:w-9/12 px-3">
          <h2 className="font-bold text-[#444444] text-[22px] leading-7 py-6">
            User Information
          </h2>
          <div className="space-y-11">
            <div className="border rounded-md">
              <h3 className="font-semibold text-lg leading-6 bg-[#F9F2FE] text-[#535353] py-3 pl-11 rounded-md">
                Personal Information
              </h3>
              <section className="pl-12 pb-11 pt-7 flex">
                <div className="w-full md:w-1/2 space-y-5">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      Your name
                    </label>
                    <Input
                      id="name"
                      placeholder="Smith"
                      size="md"
                      variant="bordered"
                      type="text"
                      className={"my-2 text-brand-heading "}
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3 h-fit",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      Partner{"'"}s name
                    </label>
                    <Input
                      id="partnerName"
                      placeholder="Emily"
                      size="md"
                      variant="bordered"
                      type="text"
                      className={"my-2 text-brand-heading "}
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3 h-fit",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      Contact number
                    </label>
                    <Input
                      id="contact"
                      placeholder="+1 764 874 8736"
                      size="md"
                      variant="bordered"
                      type="text"
                      className={"my-2 text-brand-heading "}
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3 h-fit",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      About me
                    </label>
                    <Textarea
                      id="aboutMe"
                      variant="bordered"
                      placeholder="Enter text"
                      type="text"
                      className={"my-2 text-brand-heading "}
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3  h-[102px]",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                <div className="relative w-full">
                <Image
                    src="/Rectangle 34624440.svg"
                    alt="settings prfile"
                    width={161}
                    height={161}
                    className="absolute top-5 right-10"
                  />
                  <Image
                    src="/icons/Group 5901.svg"
                    alt="camera icon"
                    width={45}
                    height={45}
                    className="border-white absolute top-32 right-12 "
                  />
                </div>
                </div>
              </section>
            </div>
            {/* new code  */}
            <div className="my-wedding border rounded-md">
              <h3 className="font-semibold text-lg leading-6 bg-[#F9F2FE] text-[#535353] py-3 pl-11 rounded-md">
                My Wedding
              </h3>
              <section className="pl-12 pt-7 pb-12 space-y-5">
                <div className="flex flex-col w-full md:w-1/2">
                  <label
                    htmlFor="name"
                    className={"font-semibold text-[#6C6C6C]"}
                  >
                    Wedding place
                  </label>
                  <Input
                    id="weddingPlace"
                    placeholder="New York,NY"
                    size="md"
                    variant="bordered"
                    type="text"
                    className={"my-2 text-brand-heading "}
                    classNames={{
                      inputWrapper:
                        "input-wrapper input-border px-5 py-3 h-fit",
                      input: "input text-lg max-md:text-sm",
                    }}
                  />
                </div>
                <div className="flex w-full justify-between space-x-2.5 md:w-1/2">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label
                      htmlFor="name"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      Wedding date
                    </label>
                    <DateInput
                      variant="bordered"
                      placeholderValue={new CalendarDate(1995, 11, 6)}
                      className={"my-2 text-brand-heading "}
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3 h-fit",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label
                      htmlFor="name"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      Estimated cost
                    </label>
                    <Input
                      id="partnerName"
                      placeholder="$3000"
                      size="md"
                      variant="bordered"
                      type="number"
                      className={"my-2 text-brand-heading "}
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3 h-fit",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="guests"
                    className={"font-semibold text-base text-[#6C6C6C]"}
                  >
                    Number of guests
                  </label>
                  <Input
                    id="totalGuests"
                    placeholder="100"
                    size="md"
                    variant="bordered"
                    type="number"
                    className={"my-2 text-brand-heading "}
                    classNames={{
                      inputWrapper:
                        "input-wrapper input-border px-5 py-3 h-fit",
                      input: "input text-lg max-md:text-sm",
                    }}
                  />
                </div>
                <div className="timing flex justify-between space-x-2.5 w-full md:w-1/2">
                  <div className="w-full md:w-1/2                                                                          flex flex-col">
                    <label
                      htmlFor="start-time"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      Start time
                    </label>
                    <TimeInput
                      id="startTime"
                      variant="bordered"
                      defaultValue={new Time(11, 45)}
                      className="my-2 text-brand-heading"
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3 h-fit",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2                                                                          flex flex-col">
                    <label
                      htmlFor="start-time"
                      className={"font-semibold text-base text-[#6C6C6C]"}
                    >
                      End time
                    </label>
                    <TimeInput
                      id="startTime"
                      variant="bordered"
                      defaultValue={new Time(11, 45)}
                      className={"my-2 text-brand-heading"}
                      classNames={{
                        inputWrapper:
                          "input-wrapper input-border px-5 py-3 h-fit",
                        input: "input text-lg max-md:text-sm",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <label
                    htmlFor="name"
                    className={"font-semibold text-[#6C6C6C]"}
                  >
                    Wedding details
                  </label>
                  <Textarea
                    id="wedDetails"
                    variant="bordered"
                    placeholder="Enter text"
                    type="text"
                    className={"my-2 text-brand-heading "}
                    classNames={{
                      inputWrapper:
                        "input-wrapper input-border px-5 py-2 h-[102px]",
                      input: "input text-lg max-md:text-sm",
                    }}
                  />
                </div>
              </section>
            </div>
          </div>
          <Button
            variant="solid"
            className="w-full mt-10 py-3.5 h-[50px] max-w-[152px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
