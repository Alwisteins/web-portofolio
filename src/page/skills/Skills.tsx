import NavSkill from "../../component/navbar/NavSkill";
import SkillRoutes from "./SkillsRoutes";

export default function Skill() {
  return (
    <div>
      <h1 className="font-semibold text-base sm:text-2xl relative text-center top-40 sm:top-20">
        My Skills
      </h1>
      <NavSkill />
      <SkillRoutes />
    </div>
  );
}
