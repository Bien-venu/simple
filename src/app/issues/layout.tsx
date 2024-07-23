import LeftNavbar from "@/components/LeftNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple",
  description: "Generated by simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-hidden flex w-full">
      <LeftNavbar />
      {children}
    </div>
  );
}
