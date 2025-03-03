import ThemeProvider from "../core/theme.provider";
import { geist, geistMono } from "src/shared/fonts/local.font";
import CommonToaster from "../core/common.toaster";
import type { LayoutProps } from "src/types/global.type";
import "src/shared/styles/globals.css";

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased min-h-dvh w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CommonToaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
