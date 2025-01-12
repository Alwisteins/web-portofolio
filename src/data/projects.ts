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
    image: "/assets/kampusku.png",
    description: "A website to find list of universities in Indonesia",
    demo: "https://kampusku.vercel.app/",
    source:
      "https://www.figma.com/design/kPi2Yok7y2HgUD0eXgcYmc/Kampusku-Project?node-id=0-1&t=IxP9cI0aSvt2gKNf-1",
    tech: [
      "./icons/nextjs-original.svg",
      "./icons/typescript-original.svg",
      "./icons/tailwindcss-original.svg",
    ],
  },
  {
    name: "steinslink",
    image: "/assets/steinslink.png",
    description: "A website landing page for internet services providers",
    demo: "https://steinslink.vercel.app/",
    source: "https://github.com/Alwisteins/steinslink",
    tech: ["./icons/html5-original.svg", "./icons/css3-original.svg"],
  },
];
