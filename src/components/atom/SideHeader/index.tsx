import Link from "next/link";
import React from "react";
import styles from "./SideHeader.module.css";
import { IProps } from "./interface";

export const SideHeader = ({ children, links }: IProps) => {
  return (
    <div className={styles.outer}>
      <div>
        <div className={styles.header}>
          {links.map((link) => (
            <Link href={link.link}>
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};
