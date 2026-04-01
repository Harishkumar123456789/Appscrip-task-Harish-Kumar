import '@/styles/Typography.css';

export const metadata = {
  title: 'Appscrip - Discover Our Products',
  description: 'Shop the latest fashion and accessories with Appscrip. Browse curated collections for men, women, and kids with responsive design optimized for all devices.',
  keywords: 'fashion, shopping, accessories, clothing, online store',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Appscrip - Discover Our Products',
    description: 'Shop the latest fashion and accessories with Appscrip',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Store',
            name: 'Appscrip',
            description: metadata.description,
            url: 'https://appscrip.com',
          })}
        </script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
