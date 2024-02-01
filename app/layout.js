import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-green-50 to-green-100 overflow-x-hidden ">
        <Header />
        {children}
        <Footer />
        <NextTopLoader color="#99cc00" />
      </body>
    </html>
  );
}
