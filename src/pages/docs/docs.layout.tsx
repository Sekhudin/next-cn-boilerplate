import CommonLayout from "src/shared/components/layouts/common.layout";
import type { LayoutProps } from "src/types/global.type";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/github.css";

const Layout = ({ children }: LayoutProps) => {
  return <CommonLayout className="[all:unset] prose dark:prose-invert">{children}</CommonLayout>;
};

export default Layout;
