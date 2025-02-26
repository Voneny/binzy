import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";

// Specifikování váhy fontu
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"], // Přidání "latin-ext" pro české znaky
  weight: ["400", "700"], // Definice váhy pro Roboto
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"], // Přidání "latin-ext" pro české znaky
  weight: ["400", "700"], // Definice váhy pro Open Sans
});

export const metadata = {
  title: "Nakolo.pokus",
  description: "Pokus o vytvoření stránky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body
        className={`${roboto.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
