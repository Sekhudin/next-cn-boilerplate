import NextImage from "next/image";
import CommonLayout from "src/shared/components/layouts/common.layout";
import { SigInBg } from "src/shared/public/images";
import { initMetadata } from "src/utils/metadata.util";
import * as env from "src/configs/env.config";
import type { LayoutProps } from "src/types/global.type";

export const metadata = initMetadata({
  title: `${env.client.APP_NAME} | Signin`,
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <CommonLayout className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">{children}</div>
      <div className="relative hidden bg-muted lg:block">
        <NextImage
          src={SigInBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </CommonLayout>
  );
};

export default Layout;
