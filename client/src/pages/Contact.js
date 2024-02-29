import React from "react";
import { Layout } from "../components/Layout";
import { BsPhoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

export const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <h1 className="contact-heading">Having any Queries ?</h1>
        <p className="contact-para">
          Any query and information about products feel free to call and mail on
          these , Available 24*7
        </p>
        <p className="mt-3">
          <BsPhoneFill size="30" />
          :+91-9998883434
        </p>
        <p>
          <CiMail size="30" />
          :kartzeesupp@gmail.com
        </p>
      </div>
    </Layout>
  );
};
