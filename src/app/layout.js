import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { Poppins, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/running/header";
import Footer from "@/components/running/footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Corporation de développement de Schefferville",
  description: "",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${poppins.variable} ${dmSans.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="top-center" />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
