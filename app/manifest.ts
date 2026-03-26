import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EuroWorkMatch",
    short_name: "EuroWorkMatch",
    description:
      "Intelligent platform matching skilled professionals from India with European companies.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
