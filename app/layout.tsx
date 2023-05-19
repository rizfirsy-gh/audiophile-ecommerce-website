import "./globals.css";
import { Manrope } from "next/font/google";

const font = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Audiophile Store",
  description: "An Audio Store which sell amazing audio devices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
