import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center  container">
      <nav className="flex items-center gap-10">
        <Link href={"/"}>Logo</Link>
        <ul className="flex items-center gap-5">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About Page</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
