interface DataSkills {
  name: string;
  icon: string;
}

export const language: DataSkills[] = [
  {
    name: "HTML",
    icon: "./public/bxl-html5.svg",
  },
  {
    name: "CSS",
    icon: "./public/bxl-css3.svg",
  },
  {
    name: "javascript",
    icon: "./public/bxl-javascript.svg",
  },
  {
    name: "typescript",
    icon: "./public/bxl-typescript.svg",
  },
  {
    name: "nodeJS",
    icon: "./public/bxl-nodejs.svg",
  },
];

export const framework: DataSkills[] = [
  {
    name: "hapiJS",
    icon: "./public/hapijs-icon.svg",
  },
  {
    name: "expressJS",
    icon: "./public/expressjs-ar21.svg",
  },
];

export const library: DataSkills[] = [
  {
    name: "reactJS",
    icon: "./public/bxl-react.svg",
  },
  {
    name: "tailwind",
    icon: "./public/bxl-tailwind-css.svg",
  },
  {
    name: "ejs",
    icon: "./public/ejs.svg",
  },
  {
    name: "mongoose",
    icon: "./public/mongoose.svg",
  },
];

export const DBMS: DataSkills[] = [
  {
    name: "mongoDB",
    icon: "./public/bxl-mongodb.svg",
  },
  {
    name: "mySQL",
    icon: "./public/mysql-ar21.svg",
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
