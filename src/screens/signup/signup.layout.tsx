import CommonLayout from "src/shared/components/layouts/common.layout";
import { Anchor } from "src/shared/ui/anchor";
import type { LayoutProps } from "src/types/global.type";
import * as env from "src/configs/env.config";

const Layout = ({ children }: LayoutProps) => {
  return (
    <CommonLayout className="flex min-h-dvh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={"flex flex-col gap-6"}>
          {children}
          <div className="text-balance text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Anchor href={env.client.TERMS_ROUTE}>Terms of Service</Anchor> and{" "}
            <Anchor href={env.client.POLICY_ROUTE}>Privacy Policy</Anchor>.
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Layout;
