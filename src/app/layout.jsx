import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "My Next project | Home",
  description: "Course of Next.js with FaztWeb",
  keywords: ["next.js", "react", "javascript"],
};

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
