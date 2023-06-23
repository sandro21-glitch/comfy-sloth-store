import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-[#222]">
      <div className="py-5 section-center flex items-center justify-center">
        <p className="mb-0 text-white">© {currentYear} <span className="text-darkBrown">ComfySloth</span> All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
