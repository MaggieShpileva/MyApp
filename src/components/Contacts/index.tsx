import React, { FC } from "react";
import styles from "./index.module.scss";
import { Header } from "../Header/Header.tsx";
export const Contacts: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.contact_content}>
        <div className={styles.location}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h1>Location</h1>
              <p>Get directions to our event center</p>
            </div>
            <div className={styles.adress}>
              <p>Address:</p>
              <h6>01 Pascale Springs Apt. 339, NY City United State</h6>
            </div>
            <div className={styles.phone}>
              <p>Phone:</p>
              <h6>(+12)-345-67-8910</h6>
            </div>
            <div className={styles.email}>
              <p>Email:</p>
              <h6>info.colorlib@gmail.com</h6>
            </div>
            <div className={styles.email}>
              <p>Website:</p>
              <h6>https://conference.colorlib.com</h6>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.6927501785844!2d-118.1140944849401!3d34.1286147805852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2db4cd39ad5b1%3A0x279215f2c0b6d57!2zMTE1MSBPeGZvcmQgUmQsIFNhbiBNYXJpbm8sIENBIDkxMTA4LCDQodCo0JA!5e0!3m2!1sru!2str!4v1669743096144!5m2!1sru!2str"
            width="100%"
            height="580"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
