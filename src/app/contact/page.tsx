import Contact from "@/components/contact/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Birkan Dogan",
};
const ContactPage = () => {
  return (
    <section className="py-16 md:py-24 flex flex-col justify-center items-center">
      <Contact />
    </section>
  );
};

export default ContactPage;
