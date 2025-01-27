import { NavBar } from "@/components/template/NavBar";
import { Footer } from "@/components/template/Footer";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>
          {/* Gradient Background */}
          <div className="fixed inset-0 bg-background -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-800/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-700/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <NavBar />
          {children}
          <Footer />
        </>
  );
}
