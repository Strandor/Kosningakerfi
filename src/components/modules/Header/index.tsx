import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <Link href={"/applications"}>
        <img className={styles.logo} src={"/images/logo.jpg"} />
      </Link>
    </div>
  );
};
