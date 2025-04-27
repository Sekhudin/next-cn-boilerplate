import { Github } from "lucide-react";
import { AnimatedGridBackground } from "src/shared/components/backgrounds/animated-grid.background";
import CommonLayout from "src/shared/components/layouts/common.layout";
import ThemeToggle from "src/shared/components/toggles/theme.toggle";
import { AnchorButton } from "src/shared/ui/anchor-button";
import { cn } from "src/utils/common";
import type { LayoutProps } from "src/types/global.type";
import * as env from "src/configs/env.config";

export const Layout = ({ children }: LayoutProps) => (
  <CommonLayout className="relative w-full h-dvh overflow-y-hidden">
    <div className="absolute top-4 right-6 flex gap-x-2">
      <AnchorButton
        className="rounded-full"
        href={env.app.repository.url}
        target="_blank"
        variant="ghost"
        size="icon"
      >
        <Github />
      </AnchorButton>
      <ThemeToggle />
    </div>

    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        {children}
      </div>

      <AnimatedGridBackground
        width={100}
        height={80}
        numSquares={30}
        maxOpacity={0.1}
        duration={5}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  </CommonLayout>
);

export default Layout;
