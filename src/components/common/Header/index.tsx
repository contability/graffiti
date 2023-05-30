import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link style={{ paddingRight: "10px" }} href="/">
        Home
      </Link>
      <Link href="/contract">Contract</Link>
    </nav>
  );
};

export default Header;
