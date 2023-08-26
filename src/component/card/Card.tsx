interface DataSkills {
  name: string;
  icon: string;
}

export const language: DataSkills[] = [
  {
    name: "HTML",
    icon: "./src/assets/bxl-html5.svg",
  },
  {
    name: "CSS",
    icon: "./src/assets/bxl-css3.svg",
  },
  {
    name: "javascript",
    icon: "./src/assets/bxl-javascript.svg",
  },
  {
    name: "typescript",
    icon: "./src/assets/bxl-typescript.svg",
  },
  {
    name: "nodeJS",
    icon: "./src/assets/bxl-nodejs.svg",
  },
];

export const framework: DataSkills[] = [
  {
    name: "hapiJS",
    icon: "./src/assets/hapijs-icon.svg",
  },
  {
    name: "expressJS",
    icon: "./src/assets/expressjs-ar21.svg",
  },
];

export const library: DataSkills[] = [
  {
    name: "reactJS",
    icon: "./src/assets/bxl-react.svg",
  },
  {
    name: "tailwind",
    icon: "./src/assets/bxl-tailwind-css.svg",
  },
  {
    name: "ejs",
    icon: "./src/assets/ejs.svg",
  },
  {
    name: "mongoose",
    icon: "./src/assets/mongoose.svg",
  },
];

export const DBMS: DataSkills[] = [
  {
    name: "mongoDB",
    icon: "./src/assets/bxl-mongodb.svg",
  },
  {
    name: "mySQL",
    icon: "./src/assets/mysql-ar21.svg",
  },
];

export const Card = ({ name }: { name: DataSkills[] }) => {
  return (
    <div className="relative top-3 sm:top-5 flex flex-wrap justify-center space-x-6 w[240px] sm:w-[544px] m-auto">
      {name.map((obj: DataSkills, index: number) => (
        <div
          key={index}
          className="w-24 sm:28 h-24 sm:28 box-border bg-sec-white border-2 border-sec-gray flex flex-col justify-center items-center sm:p-3 my-3"
        >
          <img className="w-16 sm:w-20 h-16 sm:h-20 m-auto" src={obj.icon} alt="" />
          <h2 className="font-medium text-sm">{obj.name}</h2>
        </div>
      ))}
    </div>
  );
};
