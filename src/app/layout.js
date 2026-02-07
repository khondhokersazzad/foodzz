import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {default: "foodzz",
    template : "%s | foodzz",
  },
  description: "A Restaurant food delevery app",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Khondhoker' }, { name: 'Sazzad', url: 'https://nextjs.org' }],
  creator: 'Khondhoker Sazzad',
  publisher: 'Khondhoker Sazzad',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <CartProvider>

        {children}

          </CartProvider>

        </main>
      </body>
    </html>
  );
}
