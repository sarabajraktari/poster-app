import { LayoutProps } from "interfaces/LayoutProps";
import { ReactElement } from "react";
import { Footer } from "./Footer";
import { MainNavigation } from "./MainNavigation";

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <MainNavigation />
      <main className="max-w-xl mx-auto bg-white rounded-xl  overflow-hidden md:max-w-6xl">
        {children}
      </main>
      <Footer />
    </>
  );
};
