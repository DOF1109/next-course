import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My Next project | Home",
  description: "Course of Next.js with FaztWeb",
  keywords: ["next.js", "react", "javascript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
