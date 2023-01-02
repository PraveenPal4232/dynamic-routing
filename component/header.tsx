import Link from "next/link";
import styles from "../styles/Global.module.css";

export default function Header() {
  return (
    <header>
      <ul className={styles.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/route">Route</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
