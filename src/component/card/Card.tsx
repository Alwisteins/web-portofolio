interface DataSkills {
  name: string;
  icon: string;
}

type Skills = DataSkills[];

const language: DataSkills[] = [
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
    icon: "./src/assets/bxljavascript.svg",
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

const framework: DataSkills[] = [
  {
    name: "hapiJS",
    icon: "./src/assets/hapijs-icon.svg",
  },
  {
    name: "expressJS",
    icon: "./src/assets/expressjs-arr21.svg",
  },
];

const library: DataSkills[] = [
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

const DBMS: DataSkills[] = [
  {
    name: "mongoDB",
    icon: "./src/assets/bxl-mongodb.svg",
  },
  {
    name: "mySQL",
    icon: "./src/assets/mysql-ar21.svg",
  },
];

const skills: Skills[] = [language, framework, library, DBMS];


export const Card= ({ props }: any) => {
  return (
    <div>
      {props.name.map((obj: DataSkills) => {
        <div>
          <img src={obj.icon} alt="" />
          <h2>{obj.name}</h2>
        </div>;
      })}
    </div>
  );
};
