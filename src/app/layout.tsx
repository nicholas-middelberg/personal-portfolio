import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Nicholas Middelberg | Portfolio",
  description: "Welcome to my personal portfolio showcasing my education, projects, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
