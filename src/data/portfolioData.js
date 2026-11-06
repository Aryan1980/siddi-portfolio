/**
 * Central Portfolio Configuration for Siddarth Mohan
 * 
 * To edit projects, simply update the fields in `portfolioData.projects`.
 * Google Drive videos will automatically be embedded using:
 * https://drive.google.com/file/d/[FILE_ID]/preview
 */

export const portfolioData = {
  profile: {
    name: "SIDDARTH MOHAN",
    title: "Filmmaker · Video Editor · Creative Director",
    headline: "Visual storytelling through rhythmic editing, spec films, and high-contrast motion design.",
    bio: "Siddarth Mohan is a filmmaker and video editor working at the intersection of commercial advertising, stylized comic aesthetics, and cinematic sound design. Specializing in high-energy pacing, tactile soundscapes, and visual storytelling, his work builds vivid, immersive worlds across commercial specs, trailers, and narrative cuts.",
    location: "India",
    status: "Available for Commissions & Commercial Work (2025–2026)",
    email: "siddarthmohan.film@gmail.com",
    links: {
      email: "mailto:siddarthmohan.film@gmail.com",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
      youtube: "https://youtube.com/",
      resume: "#resume",
    },
    software: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "DaVinci Resolve Studio",
      "Blender 3D",
      "Cinema 4D",
      "Sound Design & Foley",
      "Adobe Photoshop",
      "Figma",
    ],
    education: [
      {
        institution: "Chitkara Design School",
        degree: "Design Degree",
        period: "2025–2029",
        current: true,
      },
      {
        institution: "Swami Vivekanand Public School",
        degree: "High School Education",
        period: "Graduated 2024",
        current: false,
      },
    ],
    experience: [
      {
        role: "Freelance Video Editor & Motion Designer",
        period: "2024–Present",
        description: "Commercial spec films, cinematic trailers, narrative editing, kinetic typography, and multi-track sound engineering.",
      },
      {
        role: "Creative Direction & Sound Design",
        period: "2023–Present",
        description: "Concept development, stylized comic treatment, camera choreography, and sound design for independent video projects.",
      },
    ],
  },

  /**
   * Projects list
   * Order here determines the presentation order on the website.
   */
  projects: [
    {
      id: "psp-spec-ad",
      title: "PSP Spec Ad",
      year: "2025",
      category: "Spec Commercial / 3D Motion",
      client: "PlayStation Portable (Spec)",
      role: "Concept · Direction · Editing · Sound Design",
      duration: "0:45",
      aspectRatio: "16/9",
      description: "A neon-soaked cyberpunk tribute to the PlayStation Portable. Drawing inspiration from Earth-1610 graphic language, featuring kinetic street-art silhouettes, dynamic pacing, and gritty analog texture overlays.",
      tags: ["Spec Commercial", "Motion Design", "Earth 1610", "Sound Design"],
      thumbnail: "/thumbnails/psp-spec-ad.webp",
      thumbnailWebp: "/thumbnails/psp-spec-ad.webp",
      thumbnailFallback: "/thumbnails/psp-spec-ad.jpg",
      driveUrl: "https://drive.google.com/file/d/1RvQrl3NK1TKEs98y9mal5JV5t-PORTJ2/view?usp=sharing",
      driveFileId: "1RvQrl3NK1TKEs98y9mal5JV5t-PORTJ2",
      embedUrl: "https://drive.google.com/file/d/1RvQrl3NK1TKEs98y9mal5JV5t-PORTJ2/preview",
      featured: false,
    },
    {
      id: "showreel-2025-26",
      title: "Showreel 2025–26",
      year: "2025–2026",
      category: "Showreel / Selected Works",
      client: "Siddarth Mohan",
      role: "Directing · Editing · Sound Design · Color Grading",
      duration: "1:15",
      aspectRatio: "16/9",
      description: "A comprehensive montage capturing Siddarth's range across spec advertising, motion graphics, graphic pacing, and narrative rhythm. Built to demonstrate technical precision and visual punch.",
      tags: ["Showreel", "Selected Works", "Pacing & Rhythm", "Commercial Cuts"],
      thumbnail: "/thumbnails/showreel-2025-26.webp",
      thumbnailWebp: "/thumbnails/showreel-2025-26.webp",
      thumbnailFallback: "/thumbnails/showreel-2025-26.jpg",
      driveUrl: "https://drive.google.com/file/d/1piSHy_AxPPvFcskPrgz0IUZmGgbTGptZ/view?usp=sharing",
      driveFileId: "1piSHy_AxPPvFcskPrgz0IUZmGgbTGptZ",
      embedUrl: "https://drive.google.com/file/d/1piSHy_AxPPvFcskPrgz0IUZmGgbTGptZ/preview",
      featured: true,
    },
    {
      id: "spider-noir",
      title: "Spider Noir",
      year: "2025",
      category: "Narrative Short / Stylized Comic",
      client: "Spec Short",
      role: "Concept · Halftone Grading · Sound Foley · Cut",
      duration: "1:00",
      aspectRatio: "16/9",
      description: "An atmospheric black-and-white noir motion piece exploring comic book halftone screen tones, ticking pocket watch motifs, rain-soaked shadows, and intense dramatic timing.",
      tags: ["Comic Halftone", "Noir Cinema", "Tension", "Monochrome"],
      thumbnail: "/thumbnails/spider-noir.webp",
      thumbnailWebp: "/thumbnails/spider-noir.webp",
      thumbnailFallback: "/thumbnails/spider-noir.jpg",
      driveUrl: "https://drive.google.com/file/d/1PwlJukxgLqN-vkPkrNi5eoHXEMfGP66U/view?usp=sharing",
      driveFileId: "1PwlJukxgLqN-vkPkrNi5eoHXEMfGP66U",
      embedUrl: "https://drive.google.com/file/d/1PwlJukxgLqN-vkPkrNi5eoHXEMfGP66U/preview",
      featured: false,
    },
    {
      id: "nothing-spec-ad",
      title: "Nothing Spec Ad",
      year: "2025",
      category: "Brand Commercial / 3D Telemetry",
      client: "Nothing Phone (Speculative)",
      role: "Direction · 3D Environment · Sound Design · Color Grade",
      duration: "0:50",
      aspectRatio: "16/9",
      description: "Speculative product film for the Nothing Phone (4a Pro). Set against a high-contrast crimson Martian landscape with military-grade HUD telemetry, glyph interface highlights, and Nothing's raw industrial aesthetic.",
      tags: ["Tech Commercial", "HUD Graphics", "Nothing", "Sci-Fi Grade"],
      thumbnail: "/thumbnails/nothing-spec-ad.webp",
      thumbnailWebp: "/thumbnails/nothing-spec-ad.webp",
      thumbnailFallback: "/thumbnails/nothing-spec-ad.jpg",
      driveUrl: "https://drive.google.com/file/d/177hu5h1ZoYqXAD_vDFq1NOBU9LOuy3pG/view?usp=sharing",
      driveFileId: "177hu5h1ZoYqXAD_vDFq1NOBU9LOuy3pG",
      embedUrl: "https://drive.google.com/file/d/177hu5h1ZoYqXAD_vDFq1NOBU9LOuy3pG/preview",
      featured: false,
    },
  ],
};
