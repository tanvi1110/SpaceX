import React from "react";
import styles from './Navbar.module.scss'
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className={styles.iconNav}>
                <Link href="/" >  
                    <div className={styles.icon}>Home</div>
                </Link>
                <Link href="/about">
                    <div className={styles.icon}>About</div>
                </Link>
                <Link href="/blog">
                    <div className={styles.icon}>Blog</div>
                </Link>
                <Link href="/discovery">
                    <div className={styles.icon}>Discovery</div>
                </Link>
                <Link href="/contact">
                    <div className={styles.icon}>Contact</div>
                </Link>
            </div>

        </>
    )
}