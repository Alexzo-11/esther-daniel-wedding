import './globals.css';

export const metadata = {
  title: 'Esther & Daniel · Wedding',
  description: 'Solemnization of Holy Matrimony – 14th November 2026',
  icons: {
    icon: './favicon.svg',
    shortcut: './favicon.svg',
    apple: './favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
        <link rel="apple-touch-icon" href="./favicon.svg" />
        <link rel="shortcut icon" href="./favicon.svg" />
      </head>
      <body className="bg-cream text-dark font-sans antialiased">
        {children}
      </body>
    </html>
  );
}