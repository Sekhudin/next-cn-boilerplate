import React from "react";
import { Favicon } from "src/shared/public/brand";
import { Avatar, AvatarFallback, AvatarImage } from "src/shared/ui/avatar";
import SignInForm from "src/modules/auth/forms/signin.form";
import * as env from "src/configs/env.config";

const Page = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="/" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center text-primary-foreground">
            <Avatar className="size-8">
              <AvatarImage src={Favicon.src} />
              <AvatarFallback>KB</AvatarFallback>
            </Avatar>
          </div>
          <span className="first-letter:uppercase font-medium">{env.app.name}</span>
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <SignInForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;
