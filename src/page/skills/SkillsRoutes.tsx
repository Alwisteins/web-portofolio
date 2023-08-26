import { Routes, Route } from "react-router-dom";
import { Card } from "../../component/card/Card";

export default function SkillRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Card name="language" index={0} />} />
      <Route path="/framework" element={<Card name="framework" index={1} />} />
      <Route path="/library" element={<Card name="library" index={2} />} />
      <Route path="/DBMS" element={<Card name="DBMS" index={3} />} />
    </Routes>
  );
}
