import Link from "next/link";
import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex items-center justify-between navbar container">
      <nav className="flex items-center gap-10">
        <Link href={"/"} className="text-3xl font-semibold">
          Logo
        </Link>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="">
              About Page
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="">
              Contact Page
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <FaBell className="navbar__icon" />
      </div>
    </div>
  );
}

export default Navbar;
