export interface DataSkills {
  name: string;
  icon: string;
}

export const language: DataSkills[] = [
  {
    name: "HTML",
    icon: "/bxl-html5.svg",
  },
  {
    name: "CSS",
    icon: "/bxl-css3.svg",
  },
  {
    name: "javascript",
    icon: "/bxl-javascript.svg",
  },
  {
    name: "typescript",
    icon: "/bxl-typescript.svg",
  },
  {
    name: "nodeJS",
    icon: "/bxl-nodejs.svg",
  },
];

export const framework: DataSkills[] = [
  {
    name: "hapiJS",
    icon: "/hapijs-icon.svg",
  },
  {
    name: "expressJS",
    icon: "/expressjs-ar21.svg",
  },
];

export const library: DataSkills[] = [
  {
    name: "reactJS",
    icon: "/bxl-react.svg",
  },
  {
    name: "tailwind",
    icon: "/bxl-tailwind-css.svg",
  },
  {
    name: "ejs",
    icon: "/ejs.svg",
  },
  {
    name: "mongoose",
    icon: "/mongoose.svg",
  },
];

export const DBMS: DataSkills[] = [
  {
    name: "mongoDB",
    icon: "/bxl-mongodb.svg",
  },
  {
    name: "mySQL",
    icon: "/mysql-ar21.svg",
  },
];

export const Card = ({ name }: { name: DataSkills[] }) => {
  return (
    <div className="relative top-3 sm:top-5 flex flex-wrap justify-center w-[240px] sm:w-[544px] m-auto">
      {name.map((obj: DataSkills, index: number) => (
        <div
          key={index}
          className="w-24 sm:w-28 h-24 sm:h-28 box-border bg-sec-white border-2 border-sec-gray flex flex-col justify-center hover:scale-105 outline-1 outline-prim-black ald  items-center sm:p-3 m-3 hover:shadow-md rounded"
        >
          <img
            className="w-16 sm:w-20 h-16 sm:h-20 m-auto hover:animate-wave hover:scale-150"
            src={obj.icon}
            alt=""
          />
          <h2 className="font-medium text-base">{obj.name}</h2>
        </div>
      ))}
    </div>
  );
};
