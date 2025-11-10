import { Helmet } from "react-helmet-async";

function MetaComponent({
  pageTitle,
  pageDescription,
  pagePreview,
}: {
  pageTitle: string;
  pageDescription: string;
  pagePreview?: string | null;
}) {
  return (
    <Helmet>
      <title>Fahad | {pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        property="og:title"
        content={pageTitle ? "Fahad" : `Fahad | ${pageTitle}`}
      />
      <meta
        property="og:description"
        content={pageDescription ? "Webpage of Fahad's site" : pageDescription}
      />
      <meta
        property="og:image"
        content={pagePreview ? pagePreview : "/opengraph-image.jpg"}
      />
      <link rel="canonical" href="https://justfahad.me/" />
    </Helmet>
  );
}

export default MetaComponent;
