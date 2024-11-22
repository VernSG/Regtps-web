import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta Tags */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* Deskripsi untuk Growtopia Private Server */}
          <meta name="description" content="Regtps: A private server for Growtopia with enhanced features, custom content, and an amazing community." />
          <meta name="keywords" content="Growtopia, private server, Regtps, multiplayer, gaming, private, Growtopia server" />
          <meta name="author" content="Regtps Team" />
          
          {/* Open Graph Meta Tags for social sharing (Facebook, etc.) */}
          <meta property="og:title" content="Regtps - Growtopia Private Server" />
          <meta property="og:description" content="Join Regtps, a Growtopia private server with custom features and an amazing community!" />
          <meta property="og:image" content="/favicon.ico" /> {/* Replace with an image URL */}
          <meta property="og:url" content="https://www.regtps.vercel.app" /> {/* Replace with your site URL */}
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Regtps - Growtopia Private Server" />
          <meta name="twitter:description" content="Join Regtps, a Growtopia private server with custom features and an amazing community!" />
          <meta name="twitter:image" content="/favicon.ico" /> {/* Replace with an image URL */}
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
