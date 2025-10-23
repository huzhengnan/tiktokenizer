import Head from "next/head";

interface SchemaOrgProps {
  type: "WebApplication" | "BlogPosting" | "Organization" | "FAQPage";
  data: Record<string, any>;
}

export const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </Head>
  );
};
