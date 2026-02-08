import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimierung: Verhindert unsichtbaren Text während des Ladens
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Optimierung: Verhindert unsichtbaren Text während des Ladens
});

// SEO Konfiguration
export const metadata: Metadata = {
  // MetadataBase ist wichtig, damit Bilder für Social Media korrekt gefunden werden
  // Ersetzen Sie dies später durch Ihre echte Domain (z.B. https://www.ofenfischer.de)
  metadataBase: new URL("https://ofenfischer-demo.vercel.app"),

  title: {
    default: "Ofenfischer GmbH | Kamine, Öfen & Heizungstechnik",
    template: "%s | Ofenfischer GmbH", // Fügt automatisch den Firmennamen auf Unterseiten an
  },
  description:
    "Ihr Meisterbetrieb für individuelle Kaminanlagen, Kachelöfen, Gaskamine, Heizung und Sanitär. Beratung, Planung & Montage in Berlin, Dresden und Plessa.",
  keywords: [
    "Kaminbau",
    "Kachelofen",
    "Kaminofen",
    "Gaskamin",
    "Heizung",
    "Sanitär",
    "Wärmepumpe",
    "Berlin",
    "Dresden",
    "Plessa",
    "Ofenfischer",
  ],
  authors: [{ name: "Ofenfischer GmbH" }],
  creator: "Ofenfischer GmbH",
  publisher: "Ofenfischer GmbH",

  // Steuert, wie Suchmaschinen die Seite indexieren
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Social Media Vorschau (Open Graph)
  openGraph: {
    title: "Ofenfischer GmbH | Feuer & Wärme aus Meisterhand",
    description:
      "Entdecken Sie exklusive Kamine und innovative Heiztechnik. Wir bieten Beratung, Planung und Montage seit über 25 Jahren.",
    url: "/",
    siteName: "Ofenfischer GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/kamine.webp", // KORRIGIERT: .webp statt .jpg (basierend auf deinen Dateien)
        width: 1200,
        height: 630,
        alt: "Ofenfischer Kamin Ausstellung",
      },
    ],
  },

  // Twitter Card Vorschau
  twitter: {
    card: "summary_large_image",
    title: "Ofenfischer GmbH | Kamine & Heizung",
    description:
      "Ihr Experte für Kaminbau und Haustechnik in Berlin, Dresden & Plessa.",
    images: ["/kamine.webp"], // KORRIGIERT: .webp statt .jpg
  },

  // Verhindert, dass Telefonnummern/Adressen auf iPhones automatisch verlinkt werden
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // WICHTIG: Sprache auf Deutsch setzen für SEO
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}