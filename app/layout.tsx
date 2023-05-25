import BackgroundGrid from "@/components/BackgroundGrid";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { data } from "@/settings/data.settings";

const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: `${data.name} | SquareLogic`,
  description: "SquareLogic | Web Development | Team Member Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.variable} bg-BG_BLACK`}>
        <BackgroundGrid />
        {children}
      </body>
    </html>
  );
}
