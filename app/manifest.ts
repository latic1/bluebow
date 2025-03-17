import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blue Bow Maritime Liberia",
    short_name: "Blue Bow Maritime",
    description: "Expert maritime services from Blue Bow Maritime Liberia—shipping, stevedoring, and more.",
    start_url: `${siteUrl}/`,
    scope: "/",
    display: "standalone",
    background_color: "#f5f5f5", 
    theme_color: "#0ea5e9", 
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}