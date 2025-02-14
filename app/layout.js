import { Geist, Geist_Mono,Road_Rage } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roadRage = Road_Rage({
  variable: "--font-road-rage",
  weight:'400',
  subsets:['latin'],
  display:'swap'
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roadRage.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
