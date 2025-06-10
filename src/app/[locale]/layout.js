import { NextIntlClientProvider } from "next-intl";

import { Poppins, DM_Sans } from "next/font/google";
import "../globals.css";

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

export default async function RootLayout({ children }, { params }) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../messages/fr.json`)).default;
  }

  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className={`${poppins.variable} ${dmSans.variable} antialiased`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
