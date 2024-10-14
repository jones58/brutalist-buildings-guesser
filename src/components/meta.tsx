import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>London Brutalist Map</title>
      <meta
        name="keywords"
        content="free, London, map, brutalist, modernist "
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="London Brutalist Map" />
      <meta
        name="description"
        content={"A map of London's Brutalist Buildings"}
      />
      <link rel="canonical" href="https://londonbrutalistmap.co.uk" />
      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="public/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="public/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="public/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="./favicons/site.webmanifest" />
      <link rel="shortcut icon" href="./favicons/favicon.ico" />

      {/* Theme color */}
      <meta name="theme-color" content="#000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:card"
        content="public/images/AboutPage.webp"
      />
      <meta name="twitter:title" content="London Brutalist Map" />
      <meta
        name="twitter:description"
        content="Map of London's Brutalist Buildings"
      />
      <meta
        name="twitter:image"
        content="public/images/AboutPage.webp"
      />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:site_name"
        content="London Brutalist Map"
      ></meta>
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://londonbrutalistmap.co.uk/"
      />
      <meta property="og:title" content="London Brutalist Map" />
      <meta
        property="og:description"
        content="Map of London's Brutalist Buildings"
      />
      <meta
        property="og:image"
        content="public/images/AboutPage.webp"
      />

      {/* Viewport */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Head>
  );
}
