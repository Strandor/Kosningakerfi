import Link from "next/link";
import React from "react";
import styles from "./Sideheader.module.css";
import { IProps } from "./interface";

export const SideHeader = ({ children, links }: IProps) => {
  return (
    <div className={styles.outer}>
      <div className={styles.header}>
        {links.map((link) => (
          <Link href={link.link}>
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};
