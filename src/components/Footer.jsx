import React from "react";
import { FaTools } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer flex justify-between px-15 py-10 items-start ">
      <div className="footerFirst">
        <div className="footLogo flex gap-2 items-center">
          <div className="logoImg text-sm">
            <FaTools />
          </div>
          <div className="logoText text-lg font-semibold">
            <h1>DevVault</h1>
          </div>
        </div>
        <div className="copy font-normal text-gray-600 text-sm mt-4">
          &copy; 2026 DevVault Inc.
        </div>
      </div>
      <div className="links flex gap-8 font-normal text-gray-600 text-sm">
        <ul className="list-none flex flex-col gap-3">
          <li className="font-semibold text-white">Products</li>
          <li>Features</li>
          <li>Integrations</li>
          <li>Changelog</li>
        </ul>
        <ul className="list-none flex flex-col gap-3">
          <li className="font-semibold text-white">Community</li>
          <li>Github</li>
          <li>Twitter</li>
          <li>Discord</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
