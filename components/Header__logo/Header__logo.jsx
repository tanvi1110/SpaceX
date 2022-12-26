import React from "react";
import styles from './Header__logo.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';

export default function Header__logo() {

  return (
    <>
      <div className={styles.header_container}>
        <div className={styles['header header_icons']}>
          <a className={styles.socialMedia} href="#">
            <FaFacebookF />
          </a>
          <a className={styles.socialMedia} href="#">
            <FaInstagram />
          </a>
          <a className={styles.socialMedia} href="#">
            <FaTwitter />
          </a>
          <a className={styles.socialMedia} href="#">
            <FaPinterestP />
          </a>
        </div>
        <div className={styles['header header_logo']}>
          <h1 className={styles.logo}>SpaceX</h1>
        </div>
        <div className={styles['header ']}>
          <button className={styles.header_button_text}  >Work With Me</button>
        </div>
      </div>
    </>
  )
}