import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title?: string;
  name?: string;
  content?: string;
  keywords?: string;
}

export const Meta: NextPage<Props> = ({ title, content, keywords }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
          rel="stylesheet"
        />
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "Marantha Family Mission Outreach",
  content: "Marantha Family Mission Outreach",
  keywords: "Marantha family Mission outreach, Mission Churn",
};
