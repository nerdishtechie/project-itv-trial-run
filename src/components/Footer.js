import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <br></br>
      <div>&copy; {currentYear} Team ITV. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
