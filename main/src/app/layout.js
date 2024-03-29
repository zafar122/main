import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
        {children}
        
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
