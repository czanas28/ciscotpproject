import { useEffect, useState } from "react";
import Link from "next/link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/adddevice">
            <a>Add Device</a>
          </Link>
        </li>
        <li className={styles.filter}>
          {!matches ? <label htmlFor="filter" className={styles.label}>Filter</label> : null}
          <input
            id="filter"
            className={styles.input}
            placeholder={matches ? "Filter" : null}
          />
        </li>
      </ul>
    </div>
  );
}
