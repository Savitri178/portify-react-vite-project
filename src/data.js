export const starterTemplates = [
  {
    id: "modern",
    name: "Modern Developer",
    category: "Developer",
    style: "dark",
    description: "A bold dark layout for developers.",
    tag: "Popular",
    color: "violet"
  },
  {
    id: "minimal",
    name: "Minimal Professional",
    category: "Professional",
    style: "light",
    description: "A clean professional portfolio.",
    tag: "Clean",
    color: "blue"
  },
  {
    id: "creative",
    name: "Creative Studio",
    category: "Creative",
    style: "colorful",
    description: "A vibrant creative portfolio.",
    tag: "New",
    color: "orange"
  },

  ...[
    ["ocean", "Ocean Blue", "Professional", "#075985"],
    ["forest", "Forest Green", "Professional", "#166534"],
    ["midnight", "Midnight Tech", "Developer", "#7dd3fc"],
    ["rose", "Rose Elegance", "Creative", "#be185d"],
    ["gold", "Golden Executive", "Professional", "#92600d"],
    ["terminal", "Terminal Hacker", "Developer", "#4ade80"],
    ["lavender", "Lavender Dream", "Creative", "#7040b5"],
    ["coral", "Coral Pop", "Creative", "#b83c26"],
    ["slate", "Slate Resume", "Professional", "#475569"],
    ["mono", "Monochrome", "Professional", "#404040"],
    ["sunset", "Sunset Artist", "Creative", "#fdba74"],
    ["teal", "Teal Innovation", "Developer", "#0f766e"],
    ["royal", "Royal Purple", "Developer", "#c4b5fd"],
    ["sand", "Sandstone Editorial", "Professional", "#8a5632"],
    ["neon", "Neon Future", "Developer", "#67e8f9"]
  ].map(([id, name, category, color]) => ({
    id,
    name,
    category,
    style: id,
    description: `A stylish ${name} portfolio template.`,
    tag: "New",
    color
  }))
];

export const demoPortfolio = {
  name: "Alex Morgan",
  role: "Frontend Developer & UI Enthusiast",
  bio: "I build thoughtful digital experiences with clean code and accessible design.",
  email: "hello@example.com",
  location: "Hyderabad, India",
  skills: "React, JavaScript, HTML, CSS, Figma, Git",
  education: "B.Tech in Computer Science",
  projects:
    "Portfolio Website|A responsive personal website built with React.\n" +
    "TaskFlow App|A simple productivity dashboard.\n" +
    "Weather UI|A responsive weather application.",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/"
};