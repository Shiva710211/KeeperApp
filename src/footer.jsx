import React from "react";
const currentdate = new Date();
const year = currentdate.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>
        Copyright<span>&copy;</span>
        {year}
      </p>
    </footer>
  );
}
export default Footer;
