import Button from "@/common/Button";
import Container from "@/common/Container";
import Input from "@/common/Input";
import Typography from "@/common/Typography";
import React from "react";

const SignUp = () => {
  return (
    <Container className="p-8">
      <Typography component="h1" title="Sign up Now" className="font-medium text-[#585858]" />
      <div className="grid grid-cols-2 space-x-4 my-6">
        <div>
          <form className="grid grid-cols-2 gap-8">
            <Input label="First name" variant="bordered" radius={"sm"} />
            <Input label="Last name " variant="bordered" radius={"sm"} />
            <Input
              label="Email"
              type="email"
              variant="bordered"
              radius={"sm"}
            />
            <Input
              label="Password"
              type="password"
              variant="bordered"
              radius={"sm"}
            />
            <Button title="Sign up" btn type="submit" className="grid-span-2"/>
          </form>
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default SignUp;
