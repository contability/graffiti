import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link style={{ paddingRight: "10px" }} href="/">
        Home
      </Link>
      <Link style={{ paddingRight: "10px" }} href="/contract">
        Contract
      </Link>
      <Link style={{ paddingRight: "10px" }} href="/custom-event">
        Custom-Event
      </Link>
      <Link href="/statistics">Statistics</Link>
    </nav>
  );
};

export default Header;
