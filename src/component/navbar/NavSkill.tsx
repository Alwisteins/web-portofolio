import { Link } from "react-router-dom";

export default function NavSkill() {
  return (
    <div className="relative top-40">
      <ul className="flex text-right mt-2 italic text-sm sm:mr-4 justify-center space-x-6">
        <li>
          <Link to="/">Language</Link>
        </li>
        <li>
          <Link to="/framework">Framework</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/DBMS">DBMS</Link>
        </li>
      </ul>
    </div>
  );
}
