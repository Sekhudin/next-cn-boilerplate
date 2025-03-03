import { LayoutProps } from "src/types/global.type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="">
      <div></div>
      {children}
    </main>
  );
};

export default Layout;
