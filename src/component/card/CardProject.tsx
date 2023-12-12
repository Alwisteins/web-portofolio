interface DataSkills {
  name: string;
  image: string;
  source: string[];
  description: string;
  tech: string[];
}

export const web: DataSkills[] = [
  {
    name: "kampusku",
    image: "/kampusku.png",
    source: [
      "https://kampusku.vercel.app/",
      "https://github.com/Alwisteins/kampusKu-frontend",
    ],
    description:
      "A website to find recommendations for a list of universities in Indonesia",
    tech: ["/nextjs.svg", "/bxl-tailwind-css.svg", "bxl-typescript.svg"],
  },
  {
    name: "hardika-portofolio",
    image: "/hardika-portofolio.png",
    source: [
      "https://hardika-portofolio.vercel.app/",
      "https://github.com/Alwisteins/hardika-portofolio",
    ],
    description: "A friend portofolio website",
    tech: ["/bxl-html5.svg", "/bxl-css3.svg"],
  },
  {
    name: "alwisteins-portofolio",
    image: "/alwisteins-portofolio.png",
    source: [
      "https://alwisteins.vercel.app/",
      "https://github.com/Alwisteins/web-portofolio",
    ],
    description: "my portofolio website",
    tech: ["bxl-react.svg", "/bxl-tailwind-css.svg", "bxl-typescript.svg"],
  },
];

export const CardProject = ({ data }: { data: DataSkills[] }): JSX.Element => {
  return (
    <div className="relative top-3 sm:top-5 flex flex-wrap justify-center m-auto">
      {data.map((obj: DataSkills, index: number) => (
        <div
          key={index}
          className="w-screen sm:w-96 h-fit sm:h-[330px] pb-5 bg-sec-white border-2 border-sec-gray flex flex-col outline-1 outline-prim-black hover:shadow-md m-3 rounded-xl"
        >
          <img
            className="w-80 sm:w-96 h-40 sm:h-48 m-auto rounded-xl"
            src={obj.image}
            alt=""
          />
          <div className="flex justify-between items-center px-4 pt-2">
            <h1 className="font-semibold font-['Rubik'] text-xl">{obj.name}</h1>
            <ul className="flex space-x-3 text-sec-blue">
              <li>
                <a href={obj.source[0]}>demo</a>
              </li>
              <li>
                <a href={obj.source[1]}>source</a>
              </li>
            </ul>
          </div>
          <p className="px-4 py-2 text-sm">{obj.description}</p>
          <div className="flex space-x-2 px-4">
            {obj.tech.map((image: string, index: number) => (
              <div
                key={index}
                className="flex items-center justify-center w-10 sm:w-8 h-10 sm:h-8 bg-prim-gray rounded-xl"
              >
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-7 sm:w-5 h-7 sm:h-5"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
