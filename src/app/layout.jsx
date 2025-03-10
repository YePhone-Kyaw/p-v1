import { firaCode, geistMono, geistSans, poppins } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Ye Phone Kyaw ",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${firaCode.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
