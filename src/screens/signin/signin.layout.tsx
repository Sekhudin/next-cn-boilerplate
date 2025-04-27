import NextImage from "next/image";
import CommonLayout from "src/shared/components/layouts/common.layout";
import { SigInBg } from "src/shared/public/images";
import type { LayoutProps } from "src/types/global.type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <CommonLayout className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">{children}</div>
      <div className="relative hidden bg-muted lg:block">
        <NextImage
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          src={SigInBg}
          alt="Image"
          priority={true}
        />
      </div>
    </CommonLayout>
  );
};

export default Layout;
