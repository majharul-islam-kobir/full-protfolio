import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Majharul Islam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
