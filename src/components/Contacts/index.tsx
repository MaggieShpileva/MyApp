import React, { FC } from "react";
import { Header } from "../Header/Header.tsx";
export const Contacts: FC = () => {
  return (
    <>
      <Header />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.6927501785844!2d-118.1140944849401!3d34.1286147805852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2db4cd39ad5b1%3A0x279215f2c0b6d57!2zMTE1MSBPeGZvcmQgUmQsIFNhbiBNYXJpbm8sIENBIDkxMTA4LCDQodCo0JA!5e0!3m2!1sru!2str!4v1669743096144!5m2!1sru!2str"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};
