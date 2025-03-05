import React from "react";
import NextImage from "next/image";
import { Card, CardContent } from "src/shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "src/shared/ui/avatar";
import SignUpForm from "src/modules/auth/forms/signup.form";
import { SigInBg } from "src/shared/public/images";
import { Favicon } from "src/shared/public/brand";
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

      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <SignUpForm />
          <div className="relative hidden bg-muted md:block">
            <NextImage
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              src={SigInBg}
              alt="Image"
              priority={true}
            />
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Page;
