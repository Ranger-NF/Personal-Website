import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function MetaComponent({
  pageTitle,
  pageDescription,
  pagePreview,
}: {
  pageTitle: string;
  pageDescription: string;
  pagePreview?: string | null;
}) {
  const location = useLocation();
  const baseUrl = "https://justfahad.me";
  const canonicalUrl = baseUrl + location.pathname;

  return (
    <Helmet>
      <title>Fahad | {pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        property="og:title"
        content={pageTitle ? `${pageTitle} | Fahad` : "Fahad"}
      />
      <meta
        property="og:description"
        content={
          pageDescription
            ? "Fahad’s personal website showcasing projects, blogs, and insights on technology, design, and development."
            : pageDescription
        }
      />
      <meta
        property="og:image"
        content={
          pagePreview
            ? `${baseUrl}/${pagePreview}`
            : `${baseUrl}/opengraph-image.jpg`
        }
      />

      <meta property="og:url" content={canonicalUrl} />

      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

export default MetaComponent;
