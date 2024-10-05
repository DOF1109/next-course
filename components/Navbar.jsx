import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar py-5 m-3">
      <Link href="/">
        <h2 className="text-3xl font-bold">Next.js course</h2>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/commerce/categories">Categories</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
