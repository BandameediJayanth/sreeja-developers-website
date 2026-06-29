export default function robots() {
  const siteUrl = "https://sreejadevelopers.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}