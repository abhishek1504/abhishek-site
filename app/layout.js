import "./globals.css";
import { site } from "../lib/content";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.title}`,
    description: site.description,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.shortTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#FAF8F3",
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    url: site.url,
    image: `${site.url}/og-image.png`,
    jobTitle: site.title,
    description: site.description,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "Gajigesa (Kredivo Group)",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "IIT Roorkee",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "H.N.B. Garhwal University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Delhi",
      },
    ],
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "Forward Deployed Engineering",
      "Full-Stack Development",
      "Engineering Management",
      "React",
      "React Native",
      "Node.js",
      "AWS",
      "Generative AI",
      "Agentic AI",
      "Fintech Engineering",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: `${site.name} — Portfolio`,
    description: site.description,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profilepage`,
    mainEntity: { "@id": `${site.url}/#person` },
    url: site.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
