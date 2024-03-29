import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "˗ˏˋIhsanˎˊ",
  description: "Resume for Public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="googlebot" content="noindex" />
        {/* <GoogleAnalytics gaId="G-GFF36FH35B" /> */}
      </head>
      <body className="bg-white dark:bg-bunker-950 text-zinc-800 dark:text-zinc-100 max-w-screen-md px-6 mx-auto">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
