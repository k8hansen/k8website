import Head from "next/head";

const MyHead = () => {
  return (
    <Head>
      <title>Kate Hansen</title>
      <meta
        name="keywords"
        content="web development, programming, Kate Hansen, Pittsburgh, artist, programmer"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap"
      />
      <script
        src="https://kit.fontawesome.com/1983994918.js"
        crossorigin="anonymous"
      ></script>
    </Head>
  );
};

export default MyHead;
