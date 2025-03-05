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
        <div className="page-container">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}

// export default function Home() {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <h1>Testing Inter Font</h1>
//         <p>This text should be in the Inter font.</p>
//       </body>
//     </html>
//   );
// }
