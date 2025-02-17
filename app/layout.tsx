import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "context/AuthContext";
import { CountryProvider } from "context/CountryContext";

const dmSans = DM_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomad Tax Pro",
  description: "The HR platform for global businesses!",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${dmSans.className}`}>
        <AuthProvider>
          <CountryProvider>{children}</CountryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
