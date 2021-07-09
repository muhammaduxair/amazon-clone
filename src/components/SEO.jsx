import { Helmet } from "react-helmet";

export default function SEO({ title, description, keyword }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
    </Helmet>
  );
}
