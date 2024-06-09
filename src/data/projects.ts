export interface ProjectsList {
  name: string;
  image: string;
  description: string;
  demo: string;
  source: string;
  tech: string[];
}

export const projectsList: ProjectsList[] = [
  {
    name: "kampusku",
    image: "/kampusku.png",
    description: "A website to find list of universities in Indonesia",
    demo: "https://kampusku.vercel.app/",
    source: "https://github.com/Alwisteins/kampusKu-frontend",
    tech: [
      "./nextjs-original.svg",
      "./typescript-original.svg",
      "./tailwindcss-original.svg",
    ],
  },
  {
    name: "steinslink",
    image: "/steinslink.png",
    description: "A website landing page for internet services providers",
    demo: "https://steinslink.vercel.app/",
    source: "https://github.com/Alwisteins/steinslink",
    tech: ["./html5-original.svg", "./css3-original.svg"],
  },
];
