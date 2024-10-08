import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/running/header";
import Footer from "@/components/running/footer";

/* TODO: FIX FONTS */

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "900"],
});

export const metadata = {
  title: "Corporation de développement de Schefferville",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
