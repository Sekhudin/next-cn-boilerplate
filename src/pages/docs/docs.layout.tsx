import { Github } from "lucide-react";
import { AnchorButton } from "src/shared/ui/anchor-button";
import { Avatar, AvatarFallback, AvatarImage } from "src/shared/ui/avatar";
import CommonLayout from "src/shared/components/layouts/common.layout";
import CommonContainer from "src/shared/components/containers/common.container";
import FloatingContainer from "src/shared/components/containers/floating.container";
import NavigateTopButton from "src/shared/components/special-buttons/navigate-top.button";
import ThemeToggle from "src/shared/components/toggles/theme.toggle";
import { Favicon } from "src/shared/public/brand";
import type { LayoutProps } from "src/types/global.type";
import * as env from "src/configs/env.config";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/github.css";

type Link = Record<"name" | "href", string>;
const links: Link[] = [{ name: "dashboard", href: "/dashboard" }];
const Layout = ({ children }: LayoutProps) => {
  return (
    <CommonLayout className="flex flex-col items-center bg-sidebar">
      <div className="sticky w-full flex items-center gap-x-4 top-0 px-4 md:px-16 py-4 border-b bg-background z-50">
        <a href="/" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center text-primary-foreground">
            <Avatar className="size-8">
              <AvatarImage src={Favicon.src} />
              <AvatarFallback>KB</AvatarFallback>
            </Avatar>
          </div>
          <span className="first-letter:uppercase font-medium">Docs</span>
        </a>

        <div className="flex-grow flex items-center justify-end gap-x-4">
          {links.map((link, key) => (
            <a
              className="first-letter:uppercase hover:underline underline-offset-2 duration-300"
              key={key}
              href={link.href}
            >
              {link.name}
            </a>
          ))}

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
      </div>

      <CommonContainer>{children}</CommonContainer>
      <FloatingContainer>
        <NavigateTopButton />
      </FloatingContainer>
    </CommonLayout>
  );
};

export default Layout;
