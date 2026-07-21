import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ofenfischer GmbH",
    short_name: "Ofenfischer",
    description:
      "Ihr Meisterbetrieb für individuelle Kaminanlagen, Kachelöfen, Gaskamine, Heizung und Sanitär in Berlin und Plessa.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1A1A1A",
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
