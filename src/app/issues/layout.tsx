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
    <div className="h-screen w-full bg-background text-white">{children}</div>
  );
}
