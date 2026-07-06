import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header, Footer } from "./shared";

export default function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FBF7F0]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
