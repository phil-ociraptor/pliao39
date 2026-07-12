import Script from "next/script";
import "./globals.css";

const gaID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const metadata = {
  title: "Phil Liao",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: "Phil Liao",
    url: "https://philipliao.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@philipliao_",
    creator: "@philipliao_",
    title: "Phil Liao",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {gaID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
